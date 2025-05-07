const { PrismaClient } = require('../app/generated/prisma');
const fs = require('fs').promises;
const prisma = new PrismaClient();

async function main() {
  const coursesData = JSON.parse(await fs.readFile('app/data/courses.json', 'utf-8'));
  const usersData = JSON.parse(await fs.readFile('app/data/users.json', 'utf-8'));

  const courseMap = {};

  for (const course of coursesData) {
    const schedule = await prisma.schedule.create({
      data: {
        startTime: course.schedule.startTime,
        endTime: course.schedule.endTime,
        days: {
          create: course.schedule.days.map(day => ({ day }))
        }
      }
    });

    const newCourse = await prisma.course.create({
      data: {
        id: course.id,
        crn: course.crn,
        name: course.name,
        category: course.category,
        description: course.description,
        instructor: course.instructor,
        openForRegistration: course.openForRegistration,
        adminApprove: course.adminApprove,
        totalSeats: course.totalSeats,
        availableSeats: course.availableSeats,
        hasStarted: course.hasStarted,
        creditHours: course.creditHours,
        isPublishedForInstructors: course.isPublishedForInstructors || false,
        assignmentConfirmed: course.assignmentConfirmed,
        interestDeadline: new Date(course.interestDeadline),
        schedule: { connect: { id: schedule.id } }
      }
    });

    courseMap[course.id] = newCourse;
  }

  for (const user of usersData) {
    const baseUser = await prisma.user.create({
      data: {
        id: user.id,
        name: user.name || null,
        email: user.email,
        password: user.password,
        role: user.role,
        gpa: parseFloat(user.gpa || 0),
        major: user.major || null,
        creditsCompleted: user.creditsCompleted || 0
      }
    });

    if (user.completedCourses) {
      for (const course of user.completedCourses) {
        await prisma.completedCourse.create({
          data: {
            userId: baseUser.id,
            courseId: course.id,
            name: course.name,
            crn: course.crn,
            creditHours: course.creditHours,
            grade: course.grade,
            category: course.category,
            instructor: course.instructor || null
          }
        });
      }
    }

    if (user.registeredCourses) {
      for (const rc of user.registeredCourses) {
        const found = courseMap[rc.id];
        if (found) {
          await prisma.course.update({
            where: { id: rc.id },
            data: {
              registeredUsers: {
                connect: { id: baseUser.id }
              }
            }
          });
        }
      }
    }

    if (user.areasOfExpertise) {
      for (const area of user.areasOfExpertise) {
        await prisma.expertise.create({
          data: {
            userId: baseUser.id,
            value: area
          }
        });
      }
    }

    if (user.responsibilities) {
      for (const task of user.responsibilities) {
        await prisma.responsibility.create({
          data: {
            userId: baseUser.id,
            value: task
          }
        });
      }
    }

    if (user.interestedCourses) {
      for (const crn of user.interestedCourses) {
        const course = Object.values(courseMap).find(c => c.crn === parseInt(crn));
        if (course) {
          await prisma.course.update({
            where: { id: course.id },
            data: {
              interestedInstructors: {
                connect: { id: baseUser.id }
              }
            }
          });
        }
      }
    }

    if (user.assignedCourses) {
      for (const cid of user.assignedCourses) {
        await prisma.course.update({
          where: { id: cid },
          data: {
            assignedToInstructor: {
              connect: { id: baseUser.id }
            }
          }
        });
      }
    }
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

// Converted from JSON file-based logic to Prisma-based CoursesRepo
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

class CoursesRepo {
    async getCourses() {
        return await prisma.course.findMany({
            include: { schedule: { include: { days: true } } }
        });
    }

    async getCourseByID(crn) {
        return await prisma.course.findUnique({
            where: { crn: parseInt(crn) },
            include: { schedule: { include: { days: true } } }
        });
    }

    async approveCourse({ crn, approved }) {
        await prisma.course.update({
            where: { crn: parseInt(crn) },
            data: { adminApprove: approved === 'true' }
        });
        return 'Course approval updated successfully';
    }

    async disApproveCourse({ crn }) {
        await prisma.course.update({
            where: { crn: parseInt(crn) },
            data: { adminApprove: false }
        });
        return 'Course disapproved successfully';
    }

    async updateCourse(courseData) {
        const existing = await prisma.course.findUnique({ where: { crn: courseData.crn } });
        if (!existing) {
            const schedule = await prisma.schedule.create({
                data: {
                    startTime: courseData.schedule.startTime,
                    endTime: courseData.schedule.endTime,
                    days: { create: courseData.schedule.days.map(day => ({ day })) }
                }
            });
            const created = await prisma.course.create({
                data: {
                    ...courseData,
                    schedule: { connect: { id: schedule.id } }
                }
            });
            return { success: true, course: created };
        }
        const updated = await prisma.course.update({
            where: { crn: courseData.crn },
            data: courseData
        });
        return { success: true, course: updated };
    }

    async createClass(courseData) {
        const schedule = await prisma.schedule.create({
            data: {
                startTime: courseData.schedule.startTime,
                endTime: courseData.schedule.endTime,
                days: { create: courseData.schedule.days.map(day => ({ day })) }
            }
        });
        const newCourse = await prisma.course.create({
            data: {
                ...courseData,
                crn: parseInt(courseData.crn),
                adminApprove: false,
                openForRegistration: false,
                availableSeats: courseData.totalSeats || 30,
                schedule: { connect: { id: schedule.id } }
            }
        });
        return {
            success: true,
            message: 'Course created successfully',
            course: newCourse
        };
    }

    async hasCompletedPrerequisites(userId, courseCrn) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { completedCourses: true }
        });
        const course = await prisma.course.findUnique({
            where: { crn: parseInt(courseCrn) }
        });
        if (!user || !course || !course.prerequisites) return false;
        return course.prerequisites.every(pr =>
            user.completedCourses.some(cc => cc.courseId === pr)
        );
    }

    async adjustRegistrationStatus(crn, isOpen) {
        await prisma.course.update({
            where: { crn: parseInt(crn) },
            data: { openForRegistration: isOpen }
        });
        return {
            success: true,
            message: `Course registration ${isOpen ? 'opened' : 'closed'} successfully`
        };
    }

    async publishCourseForInstructors(crn, publish) {
        await prisma.course.update({
            where: { crn: parseInt(crn) },
            data: {
                isPublishedForInstructors: publish,
                interestedInstructors: publish ? undefined : { set: [] }
            }
        });
        return {
            success: true,
            message: `Course has been ${publish ? 'published' : 'unpublished'} successfully`
        };
    }

    async setInterestDeadline(courseCrns, deadline) {
        for (const crn of courseCrns) {
            await prisma.course.update({
                where: { crn: parseInt(crn) },
                data: { interestDeadline: new Date(deadline) }
            });
        }
        return { success: true, message: 'Deadline set successfully' };
    }

    async updateInterestedInstructors(crn, instructorId, interested) {
        const course = await prisma.course.findUnique({ where: { crn: parseInt(crn) } });
        if (!course) return { error: 'Course not found' };

        const data = interested
            ? { interestedInstructors: { connect: { id: instructorId } } }
            : { interestedInstructors: { disconnect: { id: instructorId } } };

        await prisma.course.update({ where: { crn: parseInt(crn) }, data });
        return true;
    }
}

export default new CoursesRepo()
// Converted from file-based logic to Prisma-based repository
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

class UsersRepo {

    async loginUser(email, pass) {
        const user = await prisma.user.findFirst({
            where: { email, password: pass }
        });
        return user || false;
    }

    async getCourse(crn) {
        const course = await prisma.course.findUnique({
            where: { crn: parseInt(crn) },
            include: {
                schedule: { include: { days: true } }
            }
        });
        return course || { errorMessage: 'Course does not exist' };
    }

    async getUser(id) {
        return await prisma.user.findUnique({ where: { id: parseInt(id) } });
    }

    async getUserCourses(userId) {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(userId) },
            include: {
                completedCourses: true,
                registeredCourses: true
            }
        });
        if (!user) return { success: false, errorMessage: 'User not found' };
        return {
            success: true,
            data: {
                completedCourses: user.completedCourses,
                registeredCourses: user.registeredCourses
            }
        };
    }

    async updateInstructorInterest(instructorId, courseId, interested) {
        const course = await prisma.course.findUnique({ where: { id: courseId } });
        if (!course) throw new Error('Course not found');

        const data = interested
            ? { interestedInstructors: { connect: { id: instructorId } } }
            : { interestedInstructors: { disconnect: { id: instructorId } } };

        await prisma.course.update({ where: { id: courseId }, data });
        return await prisma.user.findUnique({ where: { id: instructorId } });
    }

    async registerCourse(userId, courseId) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { registeredCourses: true, completedCourses: true }
        });
        if (!user) return { success: false, errorMessage: 'User not found' };

        if (user.registeredCourses.some(c => c.id === courseId)) {
            return { success: false, errorMessage: 'Course already registered' };
        }
        if (user.completedCourses.some(c => c.id === courseId)) {
            return { success: false, errorMessage: 'Course already completed' };
        }

        await prisma.course.update({
            where: { id: courseId },
            data: { registeredUsers: { connect: { id: userId } } }
        });
        return { success: true };
    }

    async withdrawCourse(userId, courseId) {
        await prisma.course.update({
            where: { id: courseId },
            data: { registeredUsers: { disconnect: { id: userId } } }
        });
        return { success: true };
    }

    async updateStudentGrades(courseCrn, grades) {
        const course = await prisma.course.findUnique({ where: { crn: courseCrn } });
        if (!course) return { success: false, message: 'Course not found' };

        for (const { studentId, grade } of grades) {
            const student = await prisma.user.findUnique({
                where: { id: studentId },
                include: { registeredCourses: true, completedCourses: true }
            });
            if (!student) continue;

            const isRegistered = student.registeredCourses.some(c => c.id === course.id);
            if (!isRegistered) continue;

            await prisma.completedCourse.create({
                data: {
                    userId: studentId,
                    courseId: course.id,
                    name: course.name,
                    crn: course.crn,
                    creditHours: course.creditHours,
                    category: course.category,
                    instructor: course.instructor,
                    grade
                }
            });

            await prisma.course.update({
                where: { id: course.id },
                data: { registeredUsers: { disconnect: { id: studentId } } }
            });

            const completedCourses = await prisma.completedCourse.findMany({
                where: { userId: studentId }
            });

            let totalPoints = 0, totalCredits = 0;
            for (const c of completedCourses) {
                const points = this.convertGradeToPoints(c.grade);
                totalPoints += points * c.creditHours;
                totalCredits += c.creditHours;
            }
            const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';

            await prisma.user.update({
                where: { id: studentId },
                data: {
                    creditsCompleted: totalCredits,
                    gpa: parseFloat(gpa)
                }
            });
        }

        return { success: true };
    }

    convertGradeToPoints(grade) {
        switch (grade) {
            case 'A': return 4.0;
            case 'B+': return 3.5;
            case 'B': return 3.0;
            case 'C+': return 2.5;
            case 'C': return 2.0;
            case 'D+': return 1.5;
            case 'D': return 1.0;
            case 'F': return 0.0;
            default: return 0.0;
        }
    }

    async getUserById(userId) {
        return await prisma.user.findUnique({ where: { id: userId } });
    }
}

export default new UsersRepo()

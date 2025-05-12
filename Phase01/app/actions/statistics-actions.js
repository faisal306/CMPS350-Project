// server-actions/statistics-actions.js
'use server'

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// 1. Total number of students
export async function totalStudents() {
    return await prisma.user.count({ where: { role: 'student' } });
}

// 2. Total students per course category
export async function studentsPerCategory() {
    const categories = await prisma.course.findMany({
        select: {
            category: true,
            registeredUsers: true
        }
    });

    const result = {};
    categories.forEach(course => {
        result[course.category] = (result[course.category] || 0) + course.registeredUsers.length;
    });
    return result;
}

// 3. Total students per course
export async function studentsPerCourse() {
    return await prisma.course.findMany({
        select: {
            name: true,
            crn: true,
            registeredUsers: { select: { id: true } }
        }
    });
}

// 4. Top 3 most registered courses
export async function topCourses() {
    const courses = await prisma.course.findMany({
        select: {
            name: true,
            registeredUsers: true
        }
    });

    return courses
        .map(c => ({ name: c.name, count: c.registeredUsers.length }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 3);
}

// 5. Failure rate per course (grade = 'F')
export async function failureRatePerCourse() {
    const courses = await prisma.course.findMany();
    const result = {};

    for (const course of courses) {
        const total = await prisma.completedCourse.count({ where: { courseId: course.id } });
        const fails = await prisma.completedCourse.count({ where: { courseId: course.id, grade: 'F' } });
        result[course.name] = total === 0 ? 'N/A' : ((fails / total) * 100).toFixed(2) + '%';
    }
    return result;
}

// 6. Number of courses with 100% approval
export async function fullyApprovedCourses() {
    return await prisma.course.count({ where: { adminApprove: true } });
}

// 7. Number of courses per instructor
export async function coursesPerInstructor() {
    const instructors = await prisma.user.findMany({
        where: { role: 'instructor' },
        include: { assignedCourses: true }
    });
    return instructors.map(i => ({ name: i.name, count: i.assignedCourses.length }));
}

// 8. GPA distribution
export async function gpaDistribution() {
    const students = await prisma.user.findMany({
        where: { role: 'student' },
        select: { gpa: true }
    });
    const buckets = { '4.0': 0, '3.5-3.9': 0, '3.0-3.4': 0, '2.5-2.9': 0, '<2.5': 0 };
    students.forEach(s => {
        const gpa = s.gpa || 0;
        if (gpa === 4.0) buckets['4.0']++;
        else if (gpa >= 3.5) buckets['3.5-3.9']++;
        else if (gpa >= 3.0) buckets['3.0-3.4']++;
        else if (gpa >= 2.5) buckets['2.5-2.9']++;
        else buckets['<2.5']++;
    });
    return buckets;
}

// 9. Courses with 0 registered students
export async function emptyCourses() {
    return await prisma.course.findMany({
        where: { registeredUsers: { none: {} } },
        select: { name: true, crn: true }
    });
}

// 10. Student count per major
export async function studentsPerMajor() {
    const majors = await prisma.user.groupBy({
        by: ['major'],
        where: { role: 'student' },
        _count: true
    });
    return majors.map(m => ({ major: m.major, count: m._count }));
}

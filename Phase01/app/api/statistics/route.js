// app/api/statistics/route.js
import * as stats from '@/app/actions/statistics-actions';

export async function GET() {
    try {
        const result = {
            totalStudents: await stats.totalStudents(),
            studentsPerCategory: await stats.studentsPerCategory(),
            studentsPerCourse: await stats.studentsPerCourse(),
            topCourses: await stats.topCourses(),
            failureRatePerCourse: await stats.failureRatePerCourse(),
            fullyApprovedCourses: await stats.fullyApprovedCourses(),
            coursesPerInstructor: await stats.coursesPerInstructor(),
            gpaDistribution: await stats.gpaDistribution(),
            emptyCourses: await stats.emptyCourses(),
            studentsPerMajor: await stats.studentsPerMajor()
        };

        return Response.json(result);
    } catch (error) {
        console.error('[GET /api/statistics]', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch statistics' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

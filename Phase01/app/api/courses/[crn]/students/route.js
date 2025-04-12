import CoursesRepo from "@/app/repo/courses-repo";
import UsersRepo from "@/app/repo/users-repo";

export async function GET(request, { params }) {
    try {
        const { crn } = params;
        
        // Get the course
        const course = await CoursesRepo.getCourseByID(crn);
        
        if (!course) {
            return Response.json({ error: `Course with ID ${crn} not found` }, { status: 404 });
        }
        
        // Get the registered students
        const studentIds = course.registeredStudents || [];
        const students = [];
        
        // Get details for each student
        for (const studentId of studentIds) {
            const student = await UsersRepo.getUserById(studentId);
            if (student) {
                students.push({
                    id: student.id,
                    name: student.name,
                    email: student.email,
                    currentGrade: student.completedCourses?.find(c => c.crn === crn)?.grade
                });
            }
        }
        
        return Response.json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
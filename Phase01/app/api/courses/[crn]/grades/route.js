import CoursesRepo from '../../../../repo/courses-repo';
import UsersRepo from '../../../../repo/users-repo';

export async function POST(request, { params }) {
    try {
        const { crn } = params;
        const { grades } = await request.json();
        
        if (!grades || !Array.isArray(grades) || grades.length === 0) {
            return Response.json({ success: false, message: "No grades provided" }, { status: 400 });
        }
        
        // Update grades for each student
        const results = await UsersRepo.updateStudentGrades(crn, grades);
        
        if (results.success) {
            return Response.json({ success: true, message: "Grades submitted successfully" });
        } else {
            return Response.json({ success: false, message: results.message || "Failed to submit grades" }, { status: 500 });
        }
    } catch (error) {
        console.error("Error submitting grades:", error);
        return Response.json({ success: false, message: "An error occurred while submitting grades" }, { status: 500 });
    }
}
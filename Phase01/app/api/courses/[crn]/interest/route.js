import coursesRepo from "@/app/repo/courses-repo";
import UsersRepo from "@/app/repo/users-repo";

export async function POST(request, { params }) {
    

        const { crn } = await params;
        const { instructorId, interested } = await request.json();
        
        // Update the instructor's interested courses
        let result = await UsersRepo.updateInstructorInterest(instructorId, crn, interested);
        if (result.error) {
            return Response.json({
                success: false,
                message: result.error
            });
        }
        
        // Update interestedInstructors in courses.json
        result = await coursesRepo.updateInterestedInstructors(crn, instructorId, interested);
        if (result.error) {
            return Response.json({
                success: false,
                message: result.error
            });
        }

        return Response.json({
            success: true,
            message: interested ? "Interest expressed successfully" : "Interest removed successfully",
            result
        });
    
        
}
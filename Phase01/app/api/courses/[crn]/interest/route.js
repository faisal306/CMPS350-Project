import UsersRepo from "@/app/repo/users-repo";

export async function POST(request, { params }) {
    

        const { crn } = await params;
        const { instructorId, interested } = await request.json();
        
        // Update the instructor's interested courses
        const result = await UsersRepo.updateInstructorInterest(instructorId, crn, interested);
        
        return Response.json({
            success: true,
            message: interested ? "Interest expressed successfully" : "Interest removed successfully",
            result
        });
    
        
}
import CoursesRepo from "@/app/repo/courses-repo";

export async function POST(request, { params }) {
    try {
        const { crn } = params;
        const { publish } = await request.json();
        
        const result = await CoursesRepo.publishCourseForInstructors(crn, publish);
        return Response.json(result);
    } catch (error) {
        console.error("Error publishing course:", error);
        return Response.json({ 
            success: false, 
            message: error.message || "Failed to update publication status" 
        }, { status: 500 });
    }
}
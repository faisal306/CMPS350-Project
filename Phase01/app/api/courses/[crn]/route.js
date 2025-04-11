import CoursesRepo from "@/app/repo/courses-repo";

// GET a specific course by CRN
export async function GET(request, { params }) {
    try {
        const { crn } = await params;
        
        // Convert crn to string to ensure consistent comparison
        const crnString = String(crn);
        
        const courses = await CoursesRepo.getCourses();
        const course = courses.find(c => String(c.crn) === crnString);
        
        if (!course) {
            return Response.json({ error: `Course with CRN ${crn} not found` }, { status: 404 });
        }
        
        return Response.json(course);
    } catch (error) {
        console.error("Error getting course:", error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}

// PUT to update a course (including approval)
export async function PUT(request, { params }) {
    try {
        const { crn } = await params;
        const updates = await request.json();
        
        // Convert crn to string to ensure consistent comparison
        const crnString = String(crn);
        
        // Handle course approval specifically
        if (updates.approved !== undefined) {
            // Get all courses
            const courses = await CoursesRepo.getCourses();
            
            // Use string comparison for consistency
            const courseIndex = courses.findIndex(c => String(c.crn) === crnString);
            
            if (courseIndex === -1) {
                return Response.json({ 
                    success: false, 
                    message: `Course with CRN ${crn} not found` 
                }, { status: 404 });
            }
            
            // Update the course
            courses[courseIndex].adminApprove = updates.approved;
            
            // Save the updated courses
            await CoursesRepo.saveCourses(courses);
            
            return Response.json({
                success: true,
                message: `Course ${updates.approved ? 'approved' : 'disapproved'} successfully`,
                result: courses[courseIndex]
            });
        }
        
        // Handle other types of updates here if needed
        
        return Response.json({ 
            success: false, 
            message: "Update type not supported" 
        }, { status: 400 });
    } catch (error) {
        console.error("Error updating course:", error);
        return Response.json({ 
            success: false, 
            message: error.message || "Failed to update course" 
        }, { status: 500 });
    }
}

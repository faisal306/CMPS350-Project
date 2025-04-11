import CoursesRepo from "@/app/repo/courses-repo";


export async function GET(request) {
    try {
        // No need to create a new instance - use the imported singleton
        const courses = await CoursesRepo.getCourses();
        return Response.json(courses);
    } catch (error) {
        console.error("Error getting courses:", error);
        return Response.json([], { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        
        // Create a new course
        if (body.name && body.id) {
            const result = await CoursesRepo.createClass(body);
            return Response.json(result);
        }
        
        // Set deadline for courses
        if (body.courses && body.deadline) {
            const result = await CoursesRepo.setInterestDeadline(body.courses, body.deadline);
            return Response.json(result);
        }
        
        return Response.json({ success: false, message: "Invalid request" }, { status: 400 });
    } catch (error) {
        console.error("Error in POST request:", error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}

// export async function GET(request, { params }) {
//     const { crn } = await params;
//     const { searchParams } = new URL(request.url);
//     const approved = await searchParams.get("approved");
//     const approval = await CoursesRepo.approveCourse({crn, approved});
//     return Response.json(approval);
// }

// export async function POST(request, { params }) { //api/courses/[crn]
//     try {
//         const { studentId, crn } = await request.json();
//         console.log(studentId, crn);
//         const registration = await CoursesRepo.registerClass(studentId, crn);
//         return Response.json(registration);
//     } catch (error) {
//         return Response.json({ error: error.message }, { status: 400 });
//     }
// }

// export async function DELETE(request, { params }) {
//     try {
//         const { studentId } = await request.json();
//         const { crn } = params;
//         const result = await CoursesRepo.unregisterClass(studentId, crn);
//         return Response.json(result);
//     } catch (error) {
//         return Response.json({ error: error.message }, { status: 400 });
//     }
// }
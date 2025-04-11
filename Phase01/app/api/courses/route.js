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



// GET all courses by 'approved' status


// export async function getCourses(request) {

//     const { searchParams } = new URL(request.url);
//     const approved = searchParams.get('approved');

//     const courses = await CoursesRepo.getCourses({approved});
//     return Response.json(courses);

    
// }


// // POST to create a new course
// export async function createCourse(request) { 

//     const courseData = await request.json();
//     const result = await CoursesRepo.createClass(courseData);
//     return Response.json(result);

// }



// // POST to publish a course for instructors (by CRN)

// export async function publishCourseForInstructors(request, { params }) {
    
//     // get the data of the course
    

//         const { crn } = params;
//         const { publish } = await request.json();
//         const result = await CoursesRepo.publishCourseForInstructors(crn, publish);
//         return Response.json(result);
    
// }



// // POST to set an interest deadline for courses

// export async function setInterestDeadline(request) {



//         const { courses, deadline } = await request.json();
//         const result = await CoursesRepo.setInterestDeadline(courses, deadline);
//         return Response.json(result);
   

// }


// // GET all published courses


// export async function getPublishedCourses(request) {
    
//         const publishedCourses = await CoursesRepo.getPublishedCourses();
//         return Response.json(publishedCourses);
   
// }


// // this for instructors to express interest

// export async function POST(request, { params }) {
//     try {
//         const { id } = params;
//         const { instructorId, interested } = await request.json();
//         const result = await CoursesRepo.toggleInstructorInterest(id, instructorId, interested);
//         return Response.json(result);
//     } catch (error) {
//         return Response.json({ error: error.message }, { status: 400 });
//     }
// }


// export async function GET(request) {
//     try {
//         const { searchParams } = new URL(request.url);
//         const approved = searchParams.get('approved');
//         const published = searchParams.get('published');

//         // Create instance of CoursesRepo
//         const coursesRepo = new CoursesRepo();
        
//         // Return published courses if requested
//         if (published === 'true') {
//             const publishedCourses = await coursesRepo.getPublishedCourses();
//             return Response.json(publishedCourses);
//         }
        
//         // Otherwise return all courses (with optional approved filter)
//         const courses = await coursesRepo.getCourses({approved});
//         return Response.json(courses);
//     } catch (error) {
//         console.error("Error in GET /api/courses:", error);
//         return Response.json({ error: error.message }, { status: 500 });
//     }
// }


// export async function POST(request) {
//     try {
//         // Create instance of CoursesRepo
//         const coursesRepo = new CoursesRepo();
        
//         const body = await request.json();
        
//         // Create a new course
//         if (body.name && (!body.instructorId || body.instructorId === undefined)) {
//             const result = await coursesRepo.createClass(body);
//             return Response.json(result);
//         }
        
//         // Set deadline for courses
//         if (body.courses && body.deadline) {
//             const result = await coursesRepo.setInterestDeadline(body.courses, body.deadline);
//             return Response.json(result);
//         }
        
//         // Toggle instructor interest
//         if (body.instructorId && body.interested !== undefined) {
//             const result = await coursesRepo.toggleInstructorInterest(body.id, body.instructorId, body.interested);
//             return Response.json(result);
//         }
        
//         return Response.json({ success: false, message: "Invalid request body" }, { status: 400 });
//     } catch (error) {
//         console.error("Error in POST /api/courses:", error);
//         return Response.json({ error: error.message }, { status: 500 });
//     }
// }



// export async function GET(request) {

//         const publishedCourses = await CoursesRepo.getPublishedCourses();
//         return Response.json(publishedCourses);
    
// }


// export async function POST(request, { params }) {
    
//         const { id } = params;
//         const { instructorId, interested } = await request.json();
//         const result = await CoursesRepo.toggleInstructorInterest(id, instructorId, interested);
//         return Response.json(result);
   

// }
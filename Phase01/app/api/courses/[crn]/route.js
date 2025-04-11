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


// import CoursesRepo from "@/app/repo/courses-repo";

// // GET a specific course by CRN
// export async function GET(request, { params }) {
//     try {
//         const { crn } = await params;
        
//         // Use getCourseByID if it exists, otherwise use getCourseById or findCourse
//         // Choose the method that exists in your repo
//         const course = await CoursesRepo.getCourses().then(courses => 
//             courses.find(c => c.crn === crn)
//         );
        
//         if (!course) {
//             return Response.json({ error: `Course with CRN ${crn} not found` }, { status: 404 });
//         }
        
//         return Response.json(course);
//     } catch (error) {
//         console.error("Error getting course:", error);
//         return Response.json({ error: error.message }, { status: 500 });
//     }
// }

// // PUT to update a course (including approval)
// export async function PUT(request, { params }) {
//     try {
//         const { crn } = await params;
//         const updates = await request.json();
        
//         // Handle course approval specifically
//         if (updates.approved !== undefined) {
//             // Get all courses
//             const courses = await CoursesRepo.getCourses();
//             const courseIndex = courses.findIndex(c => c.crn === crn);
            
//             if (courseIndex === -1) {
//                 return Response.json({ 
//                     success: false, 
//                     message: `Course with CRN ${crn} not found` 
//                 }, { status: 404 });
//             }
            
//             // Update approval status
//             courses[courseIndex].adminApprove = updates.approved;
            
//             // Save changes
//             await CoursesRepo.saveCourses(courses);
            
//             return Response.json({
//                 success: true,
//                 message: `Course ${updates.approved ? 'approved' : 'disapproved'} successfully`,
//                 course: courses[courseIndex]
//             });
//         }
        
//         // Handle other course updates
//         return Response.json({ 
//             success: false, 
//             message: "Update functionality not implemented" 
//         }, { status: 501 });
//     } catch (error) {
//         console.error("Error updating course:", error);
//         return Response.json({ 
//             success: false, 
//             message: error.message || "Failed to update course" 
//         }, { status: 500 });
//     }
// }


// import CoursesRepo from "@/app/repo/courses-repo";

// // GET a specific course by CRN
// export async function GET(request, { params }) {
//     try {
//         const { crn } = params;
        
        
//         // Use getCourseByID if it exists, otherwise use getCourseById or findCourse
//         // Choose the method that exists in your repo
//         const course = await CoursesRepo.getCourses().then(courses => 
//             courses.find(c => c.crn === crn)
//         );
        
        
//         if (!course) {
//             return Response.json({ error: `Course with CRN ${crn} not found` }, { status: 404 });
//         }
        
//         return Response.json(course);
//     } catch (error) {
//         console.error("Error getting course:", error);
//         return Response.json({ error: error.message }, { status: 500 });
//     }
// }

// // PUT to update a course (including approval)
// export async function PUT(request, { params }) {
//     try {
//         const { crn } = params;
//         const updates = await request.json();
        
//         // Handle course approval specifically
//         if (updates.approved !== undefined) {

//             // Get all courses
//             const courses = await CoursesRepo.getCourses();
//             const courseIndex = courses.findIndex(c => c.crn === crn);
            

//             if (courseIndex === -1) {
//                 return Response.json({ 
//                     success: false, 
//                     message: `Course with CRN ${crn} not found` 
//                 }, { status: 404 });
//             }

//             // Update approval status
//             courses[courseIndex].adminApprove = updates.approved;
            
//             // Save changes
//             await CoursesRepo.saveCourses(courses);
            
//             return Response.json({
//                 success: true,
//                 message: `Course ${updates.approved ? 'approved' : 'disapproved'} successfully`,
//                 course: courses[courseIndex]
//             });
//         }
        
//         // Handle other course updates
//         const result = await CoursesRepo.updateCourse(crn, updates);
//         return Response.json({
//             success: true,
//             message: "Course updated successfully",
//             result
//         });
//     } catch (error) {
//         console.error("Error updating course:", error);
//         return Response.json({ 
//             success: false, 
//             message: error.message || "Failed to update course" 
//         }, { status: 500 });
//     }
// }

// // Register a student for a course
// export async function POST(request, { params }) {
//     try {
//         const { studentId } = await request.json();
//         const { crn } = params;
//         const registration = await CoursesRepo.registerClass(studentId, crn);
//         return Response.json(registration);
//     } catch (error) {
//         return Response.json({ error: error.message }, { status: 400 });
//     }
// }

// // Unregister a student from a course
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




// // import CoursesRepo from "@/app/repo/courses-repo";


// // export async function GET(request) {
// //     try {
// //         // No need to create a new instance - use the imported singleton
// //         const courses = await CoursesRepo.getCourses();
// //         return Response.json(courses);
// //     } catch (error) {
// //         console.error("Error getting courses:", error);
// //         return Response.json([], { status: 500 });
// //     }
// // }

// // export async function POST(request) {
// //     try {
// //         const body = await request.json();
        
// //         // Create a new course
// //         if (body.name && body.id) {
// //             const result = await CoursesRepo.createClass(body);
// //             return Response.json(result);
// //         }
        
// //         // Set deadline for courses
// //         if (body.courses && body.deadline) {
// //             const result = await CoursesRepo.setInterestDeadline(body.courses, body.deadline);
// //             return Response.json(result);
// //         }
        
// //         return Response.json({ success: false, message: "Invalid request" }, { status: 400 });
// //     } catch (error) {
// //         console.error("Error in POST request:", error);
// //         return Response.json({ error: error.message }, { status: 500 });
// //     }
// // }

// // // export async function GET(request, { params }) {
// // //     const { crn } = await params;
// // //     const { searchParams } = new URL(request.url);
// // //     const approved = await searchParams.get("approved");
// // //     const approval = await CoursesRepo.approveCourse({crn, approved});
// // //     return Response.json(approval);
// // // }

// // // export async function POST(request, { params }) { //api/courses/[crn]
// // //     try {
// // //         const { studentId, crn } = await request.json();
// // //         console.log(studentId, crn);
// // //         const registration = await CoursesRepo.registerClass(studentId, crn);
// // //         return Response.json(registration);
// // //     } catch (error) {
// // //         return Response.json({ error: error.message }, { status: 400 });
// // //     }
// // // }

// // // export async function DELETE(request, { params }) {
// // //     try {
// // //         const { studentId } = await request.json();
// // //         const { crn } = params;
// // //         const result = await CoursesRepo.unregisterClass(studentId, crn);
// // //         return Response.json(result);
// // //     } catch (error) {
// // //         return Response.json({ error: error.message }, { status: 400 });
// // //     }
// // // }
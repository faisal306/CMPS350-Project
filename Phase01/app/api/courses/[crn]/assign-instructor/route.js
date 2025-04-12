import CoursesRepo from "@/app/repo/courses-repo";
import UsersRepo from "@/app/repo/users-repo";
import fs from 'fs-extra';

export async function PUT(request, { params }) {
    try {
        const { crn } = await params;
        const { instructor, instructorId, clearInterested } = await request.json();
        
        // Get the course
        const course = await CoursesRepo.getCourseByID(crn);
        if (!course) {
            return Response.json({ success: false, message: "Course not found" }, { status: 404 });
        }
        
        // Handle two different assignment methods: by ID or by name
        let selectedInstructor = null;
        
        if (instructorId) {
            // Method 1: Assign by instructor ID
            const users = await UsersRepo.getUsers();
            const instructorIndex = users.findIndex(u => u.id == instructorId);
            
            if (instructorIndex === -1) {
                return Response.json({ success: false, message: "Instructor not found" }, { status: 404 });
            }
            
            // Update the instructor's assignedCourses array
            if (!users[instructorIndex].assignedCourses) {
                users[instructorIndex].assignedCourses = [];
            }
            
            // Only add the course if not already assigned
            if (!users[instructorIndex].assignedCourses.includes(course.id)) {
                users[instructorIndex].assignedCourses.push(course.id);
            }
            
            // Update course with instructor name from users data
            course.instructor = users[instructorIndex].name;
            
            // Save the updated users data
            await UsersRepo.saveUsers(users);
            selectedInstructor = users[instructorIndex];
            
        } else if (instructor) {
            // Method 2: Assign by instructor name
            const users = await UsersRepo.getUsers();
            const instructorObj = users.find(u => u.name === instructor && u.role === 'instructor');
            
            if (!instructorObj) {
                return Response.json({ success: false, message: "Instructor not found" }, { status: 404 });
            }
            
            // Update the instructor's assignedCourses array
            if (!instructorObj.assignedCourses) {
                instructorObj.assignedCourses = [];
            }
            
            // Only add the course if not already assigned
            if (!instructorObj.assignedCourses.includes(course.id)) {
                instructorObj.assignedCourses.push(course.id);
            }
            
            // Update course with instructor name
            course.instructor = instructor;
            
            // Save the updated users data
            await UsersRepo.saveUsers(users);
            selectedInstructor = instructorObj;
        } else {
            return Response.json({ success: false, message: "Either instructorId or instructor name is required" }, { status: 400 });
        }
        
        // Clear interested instructors if flag is set
        if (clearInterested && course.interestedInstructors) {
            course.interestedInstructors = [];
        }
        
        // Mark assignment as confirmed
        course.assignmentConfirmed = true;
        
        // Update the course
        await CoursesRepo.updateCourse(course);
        
        return Response.json({
            success: true,
            message: "Instructor assigned successfully",
            instructor: selectedInstructor.name
        });
    } catch (error) {
        console.error("Error assigning instructor:", error);
        return Response.json({
            success: false,
            message: error.message || "Failed to assign instructor"
        }, { status: 500 });
    }
}
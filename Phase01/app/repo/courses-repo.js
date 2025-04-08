import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'

class CoursesRepo {
    constructor() {
        this.filePath = path.join(process.cwd(), 'app/data/courses.json');
    }

    async getCourses() {
        const courses = await fs.readJSON(this.filePath);
        return courses;
    }

    async approveCourse(params) {
        let courses = await fs.readJson(this.filePath);
        const index = courses.findIndex(course => course.crn == params.crn);
        if (index >= 0) {
            if(params.approved == "true"){
                courses[index].adminApprove = true;
            }
            else{
                courses[index].adminApprove = false;
            }
            await fs.writeJson(this.filePath, courses);
            return "Course approval updated successfully";
        }
        return "Unable to update course because it does not exist";
    }

    async disApproveCourse(params) {
        const courses = await fs.readJson(this.filePath);
        const index = courses.findIndex(course => course.crn == params.crn);
        if (index >= 0) {
            courses[index].adminApprove = false;
            await fs.writeJson(this.filePath, courses);
            return "Course approved successfully";
        }
        return "Unable to update course because it does not exist";
    }

    async getCourse(crn) {
        const courses = await fs.readJson(this.filePath);
        const course = courses.find(course => course.crn == crn);
        if (course)
            return course;
        else
            return { errorMessage: 'Course does not exit' };
    }

    async registerClass(userId, crn) {
        try {
            // Read the courses list from the file
            const courses = await fs.readJson(this.filePath);
            
            // Find the course index
            let courseIndex = -1;
            for (let i = 0; i < courses.length; i++) {
                if (courses[i].crn == crn) {
                courseIndex = i;
                break;
                }
            }
            
            // If no course is found
            if (courseIndex === -1) {
                return { success: false, message: "Course not found" };
            }
            
            // Get the course from the courses array
            const course = courses[courseIndex];
            
            // Check if the course is approved by an admin
            if (!course.adminApprove) {
                return { success: false, message: "Course has not been approved by admin" };
            }
            

            
            
            // Check if the course is open for registration
            if (!course.openForRegistration) {
                return { success: false, message: "Course is not open for registration" };
            }
            
            // Check if there are any available seats
            if (course.availableSeats <= 0) {
                return { success: false, message: "No available seats in this course" };
            }
            
            
            if (!course.registeredStudents) {
                course.registeredStudents = [];
            }
            
            // Check if the student is already registered


            let alreadyRegistered = false;
            for (let i = 0; i < course.registeredStudents.length; i++) {
                if (course.registeredStudents[i] == userId) {
                alreadyRegistered = true;
                break;
                }
            }


            if (alreadyRegistered) {
                return { success: false, message: "You are already registered for this course" };
            }
            
            // Check if the student has completed the prerequisites
            const hasPrereqs = await this.hasCompletedPrerequisites(userId, crn);
            if (!hasPrereqs) {
                return { success: false, message: "You have not completed the required prerequisites" };
            }
            
            // Add the user to the registeredStudents list
            course.registeredStudents.push(userId);
            // Decrease the available seats by 1
            course.availableSeats = course.availableSeats - 1;
            
            // Write the updated courses back to the file.
            await fs.writeJson(this.filePath, courses);
            


            // Now update the user's record with the new course.
            const users = await fs.readJson(this.usersFilePath);
            
            // get the user
            let userIndex = -1;
            for (let i = 0; i < users.length; i++) {
                if (users[i].id == userId) {
                userIndex = i;
                break;
                }
            }
            
            // If the user is found, update their registeredCourses property
            if (userIndex !== -1) {
                // will be true if registeredCourses === undefined or null
                if (!users[userIndex].registeredCourses) {
                users[userIndex].registeredCourses = [];
                }
                
                // Access the User's Registered Courses and add a new registration 
                users[userIndex].registeredCourses.push({
                id: course.crn,
                name: course.name,
                });
                
                // Write the updated users back.
                await fs.writeJson(this.usersFilePath, users);
            }
            



            return { success: true, message: "Successfully registered for the course" };
            } catch (error) {
            // if any errors 
            console.error("Error registering for course:", error);
            return { success: false, message: "An error occurred during registration" };
        }
    }



}

export default new CoursesRepo()
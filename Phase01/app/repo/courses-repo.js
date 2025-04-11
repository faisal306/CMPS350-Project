import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'

class CoursesRepo {


    constructor() {
        this.filePath = path.join(process.cwd(), 'app/data/courses.json');
        this.usersFilePath = path.join(process.cwd(), 'app/data/users.json');
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
            await fs.writeJson(this.filePath, courses, { spaces: 2 });
            return "Course approval updated successfully";
        }
        return "Unable to update course because it does not exist";
    }

    async disApproveCourse(params) {
        const courses = await fs.readJson(this.filePath);
        const index = courses.findIndex(course => course.crn == params.crn);
        if (index >= 0) {
            courses[index].adminApprove = false;
            await fs.writeJson(this.filePath, courses, { spaces: 2 });
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
            
            // If no course 
            if (courseIndex === -1) {
                return { success: false, message: "Course not found" };
            }
            
            // Get the course from the courses array
            const course = courses[courseIndex];
            
            // Check if the course is open
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

            course.availableSeats = course.availableSeats - 1;
            
            // Write the updated courses back
            await fs.writeJson(this.filePath, courses, { spaces: 2 });
            
            // update the user's with the new course
            const users = await fs.readJson(this.usersFilePath);
            
            // get the user
            let userIndex = -1;
            for (let i = 0; i < users.length; i++) {
                if (users[i].id == userId) {
                userIndex = i;
                break;
                }
            }
            
            // update their registeredCourses property if found
            if (userIndex !== -1) {


                // will be true if registeredCourses === undefined or null
                if (!users[userIndex].registeredCourses) {
                users[userIndex].registeredCourses = [];
                }
                
                users[userIndex].registeredCourses.push({
                crn: course.crn,
                id: course.id,
                name: course.name
                });
                
             
                await fs.writeJson(this.usersFilePath, users, { spaces: 2 });
            }
            



            return { success: true, message: "Successfully registered for the course" };
            } catch (error) {
            
            console.error("Error registering for course:", error);
            return { success: false, message: "An error occurred during registration!" };
        }
    }



    // this method only for admin to creata a new class for students 
        // courseData is an object that contains the details of the course
    async createClass(courseData) {

        try {
            // Read
            const courses = await fs.readJson(this.filePath);
                
            // If the course doesn't have a CRN
            if (!courseData.crn) {
                courseData.crn = nanoid(8);  
            }
                


            

            // in javaScript and JSON the ordre doesn’t matter for functionality
            // Because in the JSON file the openForRegistration is before adminApprove
            // javaSCript will still be able to read and use those properties correctly.


            // Create a new course with default settings
            const newCourse = {
            // used here the spread operator here
            
            ...courseData, // Copy all info from courseData 
            adminApprove: false,           
            openForRegistration: false,    
            availableSeats: courseData.totalSeats || 30, 
            registeredStudents: [], 
            };
                

            // Add the new course 
            courses.push(newCourse);
                
            // Save the updated list of courses
            await fs.writeJson(this.filePath, courses, { spaces: 2 });
                



            // Return success message
            return {
                success: true,
                message: "Course created successfully",
                course: newCourse
            };
                
            } catch (error) {
                // If there's any error
                console.error("Error creating course:", error);
                return {
                    success: false,
                    message: "An error occurred while creating the course"
                        };
                    }
                }


    async hasCompletedPrerequisites(userId, courseId) {


            try {

                
                const users = await fs.readJson(this.usersFilePath);
                
                // get the user with the given ID
                const user = users.find(u => u.id == userId);
                
                // If user doesn't exist 
                if (!user || !user.completedCourses) {
                    return false;
                }


                
                // get all courses
                const courses = await this.getCourses();
                
                // Find the course the student wants to register for
                const course = courses.find(c => c.crn == courseId);
                
                // If course doesn't exist or has no prerequisites
                if (!course || !course.prerequisites || course.prerequisites.length === 0) {
                    return true;
                }
                

                // give me the list of course IDs the user has already completed
                const completedCourseIds = user.completedCourses.map(c => c.id);
                
                // Check if the user has completed all required prerequisites
                
                for (let i = 0; i < course.prerequisites.length; i++) {
                    const requiredCourse = course.prerequisites[i];
        
                    // Check if requiredCourse exists in completedCourseIds
                    let found = false;
                    for (let j = 0; j < completedCourseIds.length; j++) {
                        if (completedCourseIds[j] === requiredCourse) {
                            found = true;
                            break;
                        }
                    }
        
                    // If any required course is not found
                    if (!found) {
                        return false;
                    }
                }
        
                // prerequisites are all found
                return true;


                
                } catch (error) {
                        console.error("Error checking prerequisites:", error);
                        return false;
                    }
                }
                

    // This method will give the admin the ability to either open or close a class

    async adjustRegistrationStatus(crn, isOpen) {


        try {
            // Read courses from the JSON file
            const courses = await fs.readJson(this.filePath);
    
            // Find the course with the matching CRN
            let courseIndex = -1;
            for (let i = 0; i < courses.length; i++) {
                if (courses[i].crn == crn) {
                    courseIndex = i;
                    break;
                }
            }
    

            // If course not found
            if (courseIndex === -1) {
                return {
                    success: false,
                    message: "Course not found"
                };
            }
    


            // Update the registration status for this specific course
            courses[courseIndex].openForRegistration = isOpen;
    

            //Save changes 
            await fs.writeJson(this.filePath, courses, { spaces: 2 });
    
            


            let statusText = ""; // initialize
            if (isOpen) {
                statusText = "opened";
            } else {
                statusText = "closed";
            }
    
            // success
            return {
                success: true,
                message: `Course registration ${statusText} successfully`
            };
    


        } catch (error) {
            
            console.error("Error toggling registration status:", error);
            return {
                success: false,
                message: "An error occurred while updating registration status"
            };
        }
    }

    async unregisterClass(userId, crn) {
        try {
            
            const courses = await fs.readJson(this.filePath);
            const users = await fs.readJson(this.usersFilePath);

            // Find course and user
            const course = courses.find(c => c.crn == crn);
            const user = users.find(u => u.id == userId);

            if (!course || !user) {
                return { success: false, message: "Course or user not found" };
            }

            // Remove student from course's registered students
            const studentIndex = course.registeredStudents.indexOf(userId);
            if (studentIndex === -1) {
                return { success: false, message: "Student not registered in this course" };
            }

            course.registeredStudents.splice(studentIndex, 1);
            course.availableSeats++;

            // Remove course from user's registered courses
            user.registeredCourses = user.registeredCourses.filter(c => c.crn !== crn);
            console.log("Registered Courses", user.registeredCourses);
            

            
            

            await fs.writeJson(this.filePath, courses, { spaces: 2 });
            await fs.writeJson(this.usersFilePath, users, { spaces: 2 });

            return { success: true, message: "Successfully unregistered from course" };
        } catch (error) {
            console.error("Error unregistering from course:", error);
            return { success: false, message: "An error occurred during unregistration" };
        }
    }


    async publishCourseForInstructors(crn, publish) {
    


        const allCourses = await fs.readJson(this.filePath);


        // get the course with the crn
        const courseIndex = allCourses.findIndex(course => course.crn == crn);



        // If course not found
        if (courseIndex === -1) {
            return { success: false, message: "Course not found" };
        }



        // update the publish for that specific course
        allCourses[courseIndex].isPublishedForInstructors = publish;

        // if unpublishing the course, clear the list of instructors
        if (publish === false) {
            allCourses[courseIndex].interestedInstructors = [];
        }



        // Save the updated courses back to the file
        await fs.writeJson(this.filePath, allCourses, { spaces: 2 });



        return {
            success: true,
            message: `Course has been ${publish ? 'published' : 'unpublished'} successfully`
        };
    

    }



    async setInterestDeadline(courseIds, deadline) {
        

            // read the current list of courses 
            const allCourses = await fs.readJson(this.filePath);
    
            // loop through each  ID 
            for (const crn of courseIds) {


                const index = allCourses.findIndex(course => course.crn == crn);
    
                // If found, update its interest deadline
                if (index !== -1) {
                    allCourses[index].interestDeadline = deadline;
                }
            }
    
         

            await fs.writeJson(this.filePath, allCourses, { spaces: 2 });
    
            
            return {
                success: true,
                message: "Deadline set successfully"
            };
    
        
    }
    

// Add this method to courses-repo.js
async saveCourses(courses) {
    try {
        await fs.writeJson(this.filePath, courses, { spaces: 2 });
        return true;
    } catch (error) {
        console.error("Error saving courses:", error);
        throw error;
    }
}

}


export default new CoursesRepo()
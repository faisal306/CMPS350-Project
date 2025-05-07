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

        // This is just an alias for the existing getCourse method

    async getCourseByID(crn) {
        return this.getCourse(crn);
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



    // Check if method exists and add if missing
    async updateCourse(courseData) {
        try {
          // Read the current list of courses from the JSON file.
          const courses = await fs.readJson(this.filePath);
      
          // Look for the course by comparing course numbers (CRN).
          const index = courses.findIndex(course => String(course.crn) === String(courseData.crn));
      
          // If the course isn't found, add it as a new course.
          if (index === -1) {
            courses.push(courseData);
            // Save the updated list with the new course added.
            await fs.writeJson(this.filePath, courses, { spaces: 2 });
            return { success: true, course: courseData };
          }
      
          // If the course exists, update its information with the new data.
          courses[index] = { ...courses[index], ...courseData };
          // Save the updated list to the JSON file.
          await fs.writeJson(this.filePath, courses, { spaces: 2 });
      
          return { success: true, course: courses[index] };
        } catch (error) {
          console.error('Error updating course:', error);
          throw error;
        }
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

// Update interestedInstructors in courses.json
async updateInterestedInstructors(crn, instructorId, interested) {
    try {
        const courses = await fs.readJson(this.filePath);
        console.log(crn);
        const courseIndex = courses.findIndex(course => course.crn == crn);

        if (courseIndex === -1) {
            return { error: "Course not found" };
        }

        const users = await fs.readJson(this.usersFilePath);
        const instructor = users.find(user => user.id == instructorId);
        if (!instructor) {
            return { error: "Instructor not found" };
        }

        if (interested) {
            courses[courseIndex].interestedInstructors.push({
              instructorId: instructorId,
              instructorName: instructor.name,
              instructorEmail: instructor.email
        });
        } else {
            courses[courseIndex].interestedInstructors = courses[courseIndex].interestedInstructors.filter(id => id !== instructorId);
        }

        await fs.writeJson(this.filePath, courses, { spaces: 2 });
        return true;
    } catch (error) {
        console.error("Error updating interested instructors:", error);
        return { error: "An error occurred while updating interested instructors" };
    }
}
}
 


export default new CoursesRepo()
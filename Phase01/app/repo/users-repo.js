import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'

class UsersRepo {
    constructor() {
        this.filePath = path.join(process.cwd(), 'app/data/users.json');
        this.coursesFilePath = path.join(process.cwd(), 'app/data/courses.json');
    }

    async getUsers() {
        const users = await fs.readJSON(this.filePath);
        return users;
    }

    async loginUser(email, pass){
        console.log(email);
        console.log(pass);
        const users = await this.getUsers();
        const index = users.findIndex(user => user.email == email && user.password == pass);
        if (index >= 0) {
            return users[index];
        }
        return false;
    }

    async getCourse(crn) {
        const courses = await fs.readJson(this.filePath);
        const course = courses.find(course => course.crn == crn);
        if (course)
            return course;
        else
            return { errorMessage: 'Course does not exit' };
    }


    // this method just to retrieve the user data by the Id
    async getUser(id) {
        const users = await this.getUsers();
        // search for the user in the array 
        const user = users.find(user => user.id == id);
        if (user)
            return user;
        else
            return { errorMessage: 'User not found' };
    }


    // this method will use the user Id to get his courses and categorizes them into
    // completed / In-Progress / Pending 
    async getUserCourses(userId) {


        try {
            // get user and course data
            const users = await this.getUsers();
            const user = users.find(u => u.id == userId);

            if (!user) {
                return { success: false, errorMessage: 'User not found' };
            } 
            

            const allCourses = await fs.readJson(this.coursesFilePath);
            
            // Initialize categories
            const completedCourses = user.completedCourses || [];
            const registeredCourses = user.registeredCourses || [];
            const pendingCourses = [];
            const inProgressCourses = [];
            
            // loop through each course in the student's registeredCourses
            for (const regCourse of registeredCourses) {

                // get teh details 
                const courseDetails = allCourses.find(c => c.crn == regCourse.id);

                // if found
                if (courseDetails) {

                    // using the sperad i will combine regCourse and enrichedCourse
                    // to get all the relevant info about the course and then categorize them
                    const enrichedCourse = { ...regCourse, ...courseDetails };
                    

                    /*


                    How the classification will be:
                    pending: A course that the student has registered for but hasn't started yet. 
                    It's still open for registration or is waiting to begin.

                    in-Progress: A course that has already started, and the student 
                    is currently attending. The course is ongoing but hasn't been completed yet.

                    */

                    // Check if the course is pending or in progress
                    if (courseDetails.openForRegistration && !courseDetails.hasStarted) {
                        // added to the pending courses array
                        pendingCourses.push(enrichedCourse); 

                        
                    } else {
                        inProgressCourses.push(enrichedCourse); 
                    }
                }
            }
    
            return {
                success: true,
                data: {
                    // the list of courses
                    completedCourses: completedCourses,
                    inProgressCourses: inProgressCourses,
                    pendingCourses: pendingCourses
                }
            };


        // in case fail happend to when getting the courses 
        } catch (error) {
            console.error('Error getting user courses:', error);
            return { 
                success: false, errorMessage: 'An error occurred while retrieving user courses' 
            };
        }


    }


}

export default new UsersRepo()
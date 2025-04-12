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
            console.log(user);

            if (!user) {
                return { success: false, errorMessage: 'User not found' }; 
            } 
            
            const allCourses = await fs.readJson(this.coursesFilePath);
            
            // Initialize categories
            const completedCourses = user.completedCourses || [];
            const registeredCourses = user.registeredCourses || [];
            
            return {
                success: true,
                data: {
                    completedCourses: completedCourses.map(c => ({
                        ...c,
                        ...allCourses.find(ac => ac.crn === c.id)
                    })),
                    registeredCourses: registeredCourses.map(c => ({
                        ...c,
                        ...allCourses.find(ac => ac.crn === c.id)
                    })),
                }
            };
        } catch (error) {
            console.error('Error getting user courses:', error);
            return { 
                success: false, 
                errorMessage: 'An error occurred while retrieving user courses' 
            };
        }
    }


// Update an instructor's interest in a course 
async updateInstructorInterest(instructorId, courseId, interested) {
        
        const users = await fs.readJson(this.filePath);
    
        // Find the index of the instructor using their ID.
        const instructorIndex = users.findIndex(user => user.id == instructorId);
        if (instructorIndex === -1) {
            throw new Error(`Instructor with ID ${instructorId} not found`);
        }
    
        // Get the instructor's data.
        const instructor = users[instructorIndex];
    

        // Initialize the interestedCourses list if it doesn't exist.
        if (!instructor.interestedCourses) {
            instructor.interestedCourses = [];
        }
    
        // If the instructor is showing interest, add the courseId if it's not already in the list.
        if (interested) {
            if (!instructor.interestedCourses.includes(courseId)) {
            instructor.interestedCourses.push(courseId);
            }

        } else {
            // If not interested, remove the courseId from the list.
            instructor.interestedCourses = instructor.interestedCourses.filter(id => id !== courseId);
        }
    
        // Save the updated users
                                            // spaces: for formatting
        await fs.writeJson(this.filePath, users, { spaces: 2 });
    
        // Return the updated instructor information.
        return instructor;

    }


}

export default new UsersRepo()
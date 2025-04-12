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


    async registerCourse(userId, course) {
        try {
            const users = await this.getUsers();
            const userIndex = users.findIndex(user => user.id == userId);
            if (userIndex === -1) {
                return { success: false, errorMessage: 'User not found' };
            }

            // Check if the course is already registered
            const user = users[userIndex];
            if (user.registeredCourses && user.registeredCourses.some(c => c.crn == course.crn)) {
                return { success: false, errorMessage: 'Course already registered' };
            }
            // Check if the course is already completed
            if (user.completedCourses && user.completedCourses.some(c => c.crn == course.crn)) {
                return { success: false, errorMessage: 'Course already completed' };
            }

            // Add the course to the user's registered courses
            if (!user.registeredCourses) {
                user.registeredCourses = [];
            }
            // Only take the course ID and name and crn
            user.registeredCourses.push({
                id: course.id,
                name: course.name,
                crn: course.crn,
                creditHours: course.creditHours,
                category: course.category,
                instructor: course.instructor
            });


            // Save the updated users data
            await fs.writeJSON(this.filePath, users, { spaces: 2 });

            // Get the courses data and write the user id into the course
            const courses = await fs.readJson(this.coursesFilePath);
            const courseIndex = courses.findIndex(c => c.crn == course.crn);
            if (courseIndex === -1) {
                return { success: false, errorMessage: 'Course not found' };
            }
            // Add the user ID to the course's registered users
            if (!courses[courseIndex].registeredUsers) {
                courses[courseIndex].registeredUsers = [];
            }
            // Only take the user ID
            courses[courseIndex].registeredUsers.push(user.id);

            // Save the updated courses data
            await fs.writeJSON(this.coursesFilePath, courses, { spaces: 2 });

            return { success: true };
        } catch (error) {
            console.error('Error registering course:', error);
            return { success: false, errorMessage: 'An error occurred while registering the course' };
        }
    }



    async withdrawCourse(userId, course) {
        try {
            const users = await this.getUsers();
            const userIndex = users.findIndex(user => user.id == userId);
            if (userIndex === -1) {
                return { success: false, errorMessage: 'User not found' };
            }

            // Check if the course is registered
            const user = users[userIndex];
            if (!user.registeredCourses || !user.registeredCourses.some(c => c.crn == course.crn)) {
                return { success: false, errorMessage: 'Course not registered' };
            }

            // Remove the course from the user's registered courses
            user.registeredCourses = user.registeredCourses.filter(c => c.crn != course.crn);

            // Save the updated users data
            await fs.writeJSON(this.filePath, users, { spaces: 2 });

            // Get the courses data and remove the user id from the course
            const courses = await fs.readJson(this.coursesFilePath);
            const courseIndex = courses.findIndex(c => c.crn == course.crn);
            if (courseIndex === -1) {
                return { success: false, errorMessage: 'Course not found' };
            }
            // Remove the user ID from the course's registered users
            courses[courseIndex].registeredUsers = courses[courseIndex].registeredUsers.filter(uId => uId != user.id);

            // Save the updated courses data
            await fs.writeJSON(this.coursesFilePath, courses, { spaces: 2 });

            return { success: true };
        } catch (error) {
            console.error('Error withdrawing course:', error);
            return { success: false, errorMessage: 'An error occurred while withdrawing from the course' };
        }
    }

    // Add this method to the UsersRepo class

async saveUsers(users) {
    try {
        await fs.writeJson(this.filePath, users, { spaces: 2 });
        return true;
    } catch (error) {
        console.error("Error saving users:", error);
        throw error;
    }
}


    // Add to users-repo.js
async updateStudentGrades(courseId, grades) {
    try {
        const users = await this.getUsers();
        const courses = await fs.readJson(this.coursesFilePath);
        
        // Find the course
        const course = courses.find(c => c.crn == courseId);
        if (!course) {
            return { success: false, message: "Course not found" };
        }
        
        // Process each grade submission
        for (const gradeData of grades) {
            const { studentId, grade } = gradeData;
            
            // Find the student
            const studentIndex = users.findIndex(u => u.id == studentId);
            if (studentIndex === -1) continue; // Skip if student not found
            
            const student = users[studentIndex];
            
            // Check if the student is registered for this course
            const isRegistered = student.registeredCourses && 
                                student.registeredCourses.some(c => c.crn == courseId);
            
            if (!isRegistered) continue; // Skip if not registered
            
            // Initialize completedCourses if it doesn't exist
            if (!student.completedCourses) {
                student.completedCourses = [];
            }
            
            // Find the registered course details
            const registeredCourse = student.registeredCourses.find(c => c.crn == courseId);
            
            // Check if the course is already in completed courses (update the grade)
            const completedIndex = student.completedCourses.findIndex(c => c.crn == courseId);
            
            if (completedIndex !== -1) {
                // Update the existing grade
                student.completedCourses[completedIndex].grade = grade;
            } else {
                // Add to completed courses with the grade
                student.completedCourses.push({
                    ...registeredCourse,
                    grade: grade
                });
                
                // Remove from registered courses after grading
                student.registeredCourses = student.registeredCourses.filter(c => c.crn != courseId);
                
                // Update credits completed
                if (!student.creditsCompleted) {
                    student.creditsCompleted = 0;
                }
                student.creditsCompleted += course.creditHours || 0;
                
                // Calculate new GPA
                this.recalculateGPA(student);
            }
        }
        
        // Save the updated users
        await fs.writeJson(this.filePath, users, { spaces: 2 });
        
        return { success: true };
    } catch (error) {
        console.error("Error updating student grades:", error);
        return { success: false, message: "An error occurred while updating grades" };
    }
}

// Helper method to recalculate GPA
recalculateGPA(student) {
    if (!student.completedCourses || student.completedCourses.length === 0) {
        student.gpa = 0;
        return;
    }
    
    let totalPoints = 0;
    let totalCredits = 0;
    
    student.completedCourses.forEach(course => {
        const credits = course.creditHours || 0;
        totalCredits += credits;
        
        // Convert letter grade to GPA points
        let points = 0;
        switch (course.grade) {
            case 'A': points = 4.0; break;
            case 'B+': points = 3.5; break;
            case 'B': points = 3.0; break;
            case 'C+': points = 2.5; break;
            case 'C': points = 2.0; break;
            case 'D+': points = 1.5; break;
            case 'D': points = 1.0; break;
            case 'F': points = 0.0; break;
            default: points = 0.0;
        }
        
        totalPoints += credits * points;
    });
    
    student.gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
}


    // this method will get the user from his id
    async getUserById(userId) {
        try {
            const users = await this.getUsers();
            return users.find(user => user.id == userId) || null;
        } catch (error) {
            console.error('Error getting user by ID:', error);
            throw error;
        }
    }

}

export default new UsersRepo()
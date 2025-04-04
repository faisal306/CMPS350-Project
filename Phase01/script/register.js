// This file for the students when he register in a course

document.addEventListener("DOMContentLoaded", function() {

    async function registerCourse(courseId) {
        
        // To check if the user is logged in 
        const currentUserEmail = localStorage.getItem("currentUserEmail");
        if (!currentUserEmail) {
            alert("You must be logged in to register for courses.");
            return;
        }

        // Get the user data from the JSON file
        const data = await fetch("data/users.json");
        const users = await data.json();

        // To prevent admins and instructors register for a course
        const currentUser = users.find(user => user.email === currentUserEmail);

        if(!currentUser || currentUser.role !== "student") {
            alert("Sorry, only students can register for courses!");
            return;
        }

        // get the course data
        const courseData = await fetch('data/courses.json');
        const courses = await courseData.json();
        const course = courses.find(c => c.id === courseId);

        if(!course) {
            alert('Course not found.');
            return;
        }

        // Check if the course is approved and open
        if(!course.adminApprove || !course.openForRegistration) {
            alert("This course is not open for registration or has not been approved yet.");
            return;
        }

        // Check if the there is seats for registration
        if(course.availableSeats <= 0) {
            alert("No available seats for this course.");
            return;
        }

        // Check prerequisites
        const completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
        // assume all courses match
        let prerequisitesMatch = true;
        for (let i = 0; i < course.prerequisites.length; i++) {
            // get the courses one by one
            const pre = course.prerequisites[i];
            if (!completedCourses.includes(pre)) {
                // If we find even one that's not in completedCourses stop the loop immediately
                prerequisitesMatch = false;
                break;
            }
        }


        if (!prerequisitesMatch) {
            alert("You have not passed all prerequisite courses.");
            return;
        }
        

        // Student registration 
        course.registeredStudents = course.registeredStudents || [];
        if (course.registeredStudents.includes(currentUser.id)) {
            alert("You have already registered for this course.");
            return;
        }

        course.registeredStudents.push(currentUser.id);
        // Adding 1 student
        course.availableSeats--;

        localStorage.setItem("courses", JSON.stringify(courses));

        alert("Registration successful! You are now registered for the course.");

    }

});
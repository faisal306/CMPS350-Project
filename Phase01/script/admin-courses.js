// This file will display the courses for the admin to approve or Unapprove

document.addEventListener("DOMContentLoaded", function() {

    async function loadCoursesForAdmin() {
        
        const data = await fetch('data/courses.json');
        const courses = await data.json();

        const adminDiv = document.querySelector("#admin-course-list");

        

    }

});
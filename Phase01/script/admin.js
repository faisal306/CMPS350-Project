// // This file will handle the admin approval for courses


// async function loadCoursesForAdmin() {
        
//     const data = await fetch('data/courses.json');
//     const courses = await data.json();

//     const adminDiv = document.querySelector("#admin-course-list");

//     // To show only the latest version
//     adminDiv.innerHTML = "";

//     courses.forEach(course => {

//         // if the course is not approved by the admin
//         // in otherwords this block will run only for courses are waitiing for admin approve 
//         if (!course.adminApprove) {
//             // Here i used += instead of = beacuse i want to add a course to the parent (adminDiv)
//             // += i will prevent overriding the previous courses if i used = it will overwrite
//             adminDiv.innerHTML += `
//             <div class="course-item">
//                 <h3>${course.name}</h3>
//                 <p>${course.description}</p>
//                 <p><strong>Instructor</strong>: ${course.instructor}</p>
//                 <p><strong>Schedule</strong>: ${course.schedule}</p>
//                 <p><strong>Available Seats:</strong> ${course.availableSeats}</p>
//                 <button onclick="approveCourse('${course.id}')">Approve Course</button>
//             </div>
//             </hr>
//             `;
//         }

//     });

// }

// async function approveCourse(courseId) {
//     // Check if the user is logged in 
//     const currentUserEmail = localStorage.getItem("currentUserEmail");
//     const res = await fetch('data/users.json');
//     const users = await res.json();
//     // get the user from his email
//     const currentUser = users.find(u => u.email === currentUserEmail);

//     // only admins are allowed
//     if (!currentUser || currentUser.role !== "admin") {
//         alert("Only admin can approve courses.");
//         return;
//     }

//     if (currentUser.role === "admin") {
//         window.location.href = "admin.html";
//     }

//     else if (currentUser.role === "student") {
//         window.location.href = "dashboard.html";
//     }

//     // get the courses

//     const data = await fetch("data/courses.json");
//     const courses = await data.json();
//     let course = courses.find(c => c.id === courseId);

//     if(!course) {
//         alert("Coursr not found!");
//         return;
//     }

//     // Approve the course
//     course.adminApprove = true;
//     course.openForRegistration = true;

//     // Save the courses after update
//     localStorage.setItem("courses", JSON.stringify(courses));

//     alert(`Course ${course.name} has been approved and is now open for registration.`);

//     loadCoursesForAdmin();

// }


// document.addEventListener("DOMContentLoaded", loadCoursesForAdmin());


// to load pending courses
async function loadPendingCourses() {
    
    const data_pend = await fetch('data/pendingCourses.json');
    let pendCourses = await data_pend.json();

    const pendDiv = document.querySelector('#pending-courses');

    // To show only the latest version (except header)
    pendDiv.innerHTML = "<h2>Courses Pending Approval</h2>";

    pendCourses.forEach(course => {
        pendDiv.innerHTML += `
            <div id = "course-item">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <p><strong>Instructor:</strong> ${course.instructor}</p>
                <p><strong>Schedule:</strong> ${course.schedule}</p>
                <p><strong>Available Seats:</strong> ${course.availableSeats}</p>
                <button onclick="approveCourse('${course.id}')">Approve Course</button>
            </div>
            </hr>
        `;
    });

}

// to load approved courses

async function loadApprovedCourses() {
    
    const data_approv = await fetch('data/courses.json');
    let approvedCourses = await data_approv.json();

    const approvedDiv = document.querySelector("#approved-courses");

    approvedDiv.innerHTML = "<h2>Approved Courses (Open for Registration)</h2>";

    approvedCourses.forEach(course => {
        approvedDiv.innerHTML += `
            <div class="course-item">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <p><strong>Instructor:</strong> ${course.instructor}</p>
                <p><strong>Schedule:</strong> ${course.schedule}</p>
                <p><strong>Available Seats:</strong> ${course.availableSeats}</p>
            </div>
        `;
    });

}

// function to approve a course by only the admin

async function approveCourse(courseId) {
    
    // first: check if the user is admin

    const currentUserEmail = localStorage.getItem('currentUserEmail');

    const result = await fetch('data/users.json');

    const users = await result.json();

    const getCurrentUser = users.find(u => u.email === currentUserEmail);

    // check

    if(!getCurrentUser || getCurrentUser !== "admin") {
        alert("Only admin can approve courses.");
        return;
    }

    // get pending courses

    const pendingResults = await fetch('data/pendingCourses.json');

    // the pendCourses is an array
    let pendingCourses = await pendingResults.json();

    // find the course in the pending array

    let course = pendingCourses.find(c => c.id === courseId);

    if (!course) {
        alert("Course not found in pending list!");
        return;
    }

     // Approve the course
    course.adminApprove = true;
    course.openForRegistration = true;

    // Moving a course: 1- remove it from pending, 2- load approved courses

    pendingCourses = pendingCourses.find(c => c.id !== courseId);

    let approvedCourses = JSON.parse(localStorage.getItem("approvedCourses")) || [];

    approvedCourses.push(course);

    // saving updated courses
    localStorage.setItem("approvedCourses", JSON.stringify(approvedCourses));
    localStorage.setItem("pendingCourses", JSON.stringify(pendingCourses));

    alert(`Course "${course.name}" has been approved and is now open for registration.`);

    // Reload to reflect the changes 
    loadPendingCourses();
    loadApprovedCourses();

}

// When the page open load both courses
document.addEventListener("DOMContentLoaded", function(){
    loadPendingCourses();
    loadApprovedCourses();
});

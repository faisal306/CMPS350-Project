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

const pendDiv = document.querySelector('#pending-courses');
const approvedDiv = document.querySelector("#approved-courses");

// When the page open load both courses
document.addEventListener("DOMContentLoaded", function(){
    if(!permittedUser()){
        
        document.body.innerHTML = `
        <h1>You do not have permission to view this page. Please <a href="login.html">log in</a> with admin privliges.</h1>
        `;
        return;
    }
    loadCourses();
});

function permittedUser(){
    const role = localStorage.userRole;
    if(role == "admin") return true;
    return false;
}

// to load pending courses
async function loadCourses() {
    // To show only the latest version (except header)
    const data = await fetch('data/courses.json');
    let courses = await data.json();
    courses.forEach(course => {
        if(!course.adminApprove){
            pendDiv.innerHTML += `
                <div id = "course-item">
                    <h3>${course.name}</h3>
                    <p>${course.description}</p>
                    <p><strong>Instructor:</strong> ${course.instructor}</p>
                    <p><strong>Schedule:</strong> ${course.schedule}</p>
                    <p><strong>Available Seats:</strong> ${course.availableSeats}</p>
                    <button onclick="approveCourse('${course.crn}')">Approve Course</button>
                </div>
                </hr>
            `;
        } else{
            approvedDiv.innerHTML += `
                <div class="course-item">
                    <h3>${course.name}</h3>
                    <p>${course.description}</p>
                    <p><strong>Instructor:</strong> ${course.instructor}</p>
                    <p><strong>Schedule:</strong> ${course.schedule}</p>
                    <p><strong>Available Seats:</strong> ${course.availableSeats}</p>
                </div>
            `;
        }
    });

}

// function to approve a course by only the admin

async function approveCourse(courseCRN) {
    // get courses
    const data = await fetch('data/courses.json');
    let courses = await data.json();

    // find the course in the pending array
    let course = courses.find(c => c.crn == courseCRN);

    if (!course) { // Could happen if two admins using the page at the same time
        alert("Course not found in pending list!");
        return;
    }

    // Approve the course
    course.adminApprove = true;
    course.openForRegistration = true;

    alert(`Course "${course.name}" has been approved and is now open for registration.`);

    // Reload to reflect the changes 
    loadCourses();

}

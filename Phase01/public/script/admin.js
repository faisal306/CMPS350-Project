// This file will handle the admin approval for courses


async function loadCoursesForAdmin() {
        
    const data = await fetch('api/courses');
    const courses = await data.json();

    const categories = new Set();

    courses.forEach(c => {

        if (c.category) {
            categories.add(c.category);
        }
        

    });

    const dropdown = document.getElementById('department-filter');
    // Clear existing content 
    dropdown.innerHTML = '<option value="">Select Category</option>';


                        // here i will convert the set to an array
    const sortedCategories = Array.from(categories);
    for (var i = 0; i < sortedCategories.length; i++) {
        var category = sortedCategories[i];
        var option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        filter.appendChild(option);
    }


    // const adminDiv = document.querySelector("#admin-course-list");

    // // To show only the latest version
    // adminDiv.innerHTML = "";

    // courses.forEach(course => {

    //     // if the course is not approved by the admin
    //     // in otherwords this block will run only for courses are waitiing for admin approve 
    //     if (!course.adminApprove) {
    //         // Here i used += instead of = beacuse i want to add a course to the parent (adminDiv)
    //         // += i will prevent overriding the previous courses if i used = it will overwrite
    //         adminDiv.innerHTML += `
    //         <div class="course-item">
    //             <h3>${course.name}</h3>
    //             <p>${course.description}</p>
    //             <p><strong>Instructor</strong>: ${course.instructor}</p>
    //             <p><strong>Schedule</strong>: ${course.schedule}</p>
    //             <p><strong>Available Seats:</strong> ${course.availableSeats}</p>
    //             <button onclick="approveCourse('${course.id}')">Approve Course</button>
    //         </div>
    //         </hr>
    //         `;
    //     }

    // });

}

async function approveCourse(courseId) {
    // Check if the user is logged in 
    const currentUserEmail = localStorage.getItem("currentUserEmail");
    const res = await fetch('data/users.json');
    const users = await res.json();
    // get the user from his email
    const currentUser = users.find(u => u.email === currentUserEmail);

    // only admins are allowed
    if (!currentUser || currentUser.role !== "admin") {
        alert("Only admin can approve courses.");
        return;
    }

    if (currentUser.role === "admin") {
        window.location.href = "admin.html";
    }

    else if (currentUser.role === "student") {
        window.location.href = "dashboard.html";
    }

    // get the courses

    const data = await fetch("data/courses.json");
    const courses = await data.json();
    let course = courses.find(c => c.id === courseId);

    if(!course) {
        alert("Coursr not found!");
        return;
    }

    // Approve the course
    course.adminApprove = true;
    course.openForRegistration = true;

    // Save the courses after update
    localStorage.setItem("courses", JSON.stringify(courses));

    alert(`Course ${course.name} has been approved and is now open for registration.`);

    loadCoursesForAdmin();

}


document.addEventListener("DOMContentLoaded", loadCoursesForAdmin());

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
    

    try {

        
        // Get the courses list table body
        const coursesListTable = document.getElementById('courses-list');
        if (!coursesListTable) {
            console.error("Could not find courses-list element");
            return;
        }
        


        // Clear existing content
        coursesListTable.innerHTML = '<tr><td colspan="8">Loading courses...</td></tr>';
        

        // get the courses
        const response = await fetch('/api/courses');
        if (!response.ok) {
            throw new Error('Failed to fetch courses');
        }
        

        const courses = await response.json();
        

        
        // Clear the  message
        coursesListTable.innerHTML = '';
        



        // If no courses found
        if (!courses || courses.length === 0) {
            coursesListTable.innerHTML = '<tr><td colspan="8">No courses found</td></tr>';
            return;
        }


        
        // Display each course
        courses.forEach(course => {
            // Determine the status text and class
            let statusText = '';
            let statusClass = '';
            


            if (!course.adminApprove) {
                statusText = 'Pending Approval';
                statusClass = 'status-pending';
            } else if (course.openForRegistration) {
                statusText = 'Open for Registration';
                statusClass = 'status-open';
            } else if (course.hasStarted) {
                statusText = 'In Progress';
                statusClass = 'status-in-progress';
            } else {
                statusText = 'Approved';
                statusClass = 'status-approved';
            }
            


            // Create row
            const row = document.createElement('tr');

        

            row.innerHTML = `
                <td>${course.crn}</td>
                <td>${course.name}</td>
                <td>${course.department || course.category || 'N/A'}</td>
                <td>${course.creditHours || 'N/A'}</td>
                <td>${course.availableSeats}/${course.totalSeats || (course.availableSeats + course.registeredStudents.length)}</td>
                <td>${course.instructor || 'Not Assigned'}</td>
                <td><span class="status-label ${statusClass}">${statusText}</span></td>
                <td class="action-buttons">
                    ${!course.adminApprove ? 
                        `<button class="btn-action btn-approve" onclick="approveCourse('${course.crn}')">Approve</button>` : 
                        `<button class="btn-action btn-reject" onclick="disApproveCourse('${course.crn}')">Disapprove</button>`
                    }
                    <button class="btn-action btn-edit">Edit</button>
                    ${course.adminApprove ? 
                        `<button class="btn-action btn-toggle" onclick="toggleRegistration('${course.crn}', ${!course.openForRegistration})">
                            ${course.openForRegistration ? 'Close' : 'Open'} Registration
                        </button>` : ''
                    }
                </td>
            `;
            coursesListTable.appendChild(row);
        });
    } catch (error) {
        
        showNotification('Failed to load courses', 'error');
    }

}

// function to approve a course by only the admin

async function approveCourse(courseCRN) {
    await fetch(`api/courses/${courseCRN}?approved=true`);
    loadCourses();
}



async function disApproveCourse(courseCRN) {
    await fetch(`api/courses/${courseCRN}?approved=false`);
    loadCourses();
}


document.addEventListener("DOMContentLoaded", async () => {

    if(!permittedUser()) {
        document.body.innerHTML = `
                    <h1>You do not have permission to view this page. Please <a href="login.html">log in</a> as an admin.</h1>
        `;
        return;
    }

    // calling the functions 


    setupTabs();

   
    await loadCourses();

    document.getElementById('department-filter').addEventListener('change', filterCoursesByCategory);
 
     
    loadCoursesForPrerequisites();
 
    setupCreateCourseForm();
 
    loadInstructors();

});

    function setupTabs() {

        const tabButtons = document.querySelectorAll('.tab-btn');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Deactivate all tabs and tab contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

                // Activate the clicked tab and related content
                button.classList.add('active');
                const tabId = button.dataset.tab;
                document.getElementById(tabId).classList.add('active');
            });
        });

    }

    // this method will load all courses 
    async function loadCoursesForPrerequisites() {
        try {
            const res = await fetch('/api/courses');
            const courses = await res.json();

            const dropdown = document.getElementById('course-prerequisites');
            dropdown.innerHTML = ''; // Clear old options

            courses.forEach(course => {
                const option = document.createElement('option');
                option.value = course.crn;
                option.textContent = `${course.name} (${course.id})`;
                dropdown.appendChild(option);
            });
        } catch (err) {
            console.error('Could not load courses:', err);
            showNotification('Failed to load prerequisites', 'error');
        }
    }


    // this method will load the instructors by getting the users and then check the role of each one to be
    // instrctor
    async function loadInstructors() {
        try {
            const res = await fetch('/api/users');
            const users = await res.json();
    
            // Only keep users who are instructors
            const instructors = users.filter(user => user.role === 'instructor');
    
            const dropdown = document.getElementById('course-instructor');
            dropdown.innerHTML = '<option value="">Select Instructor (optional)</option>';
    
            instructors.forEach(inst => {
                const option = document.createElement('option');
                option.value = inst.id;
                option.textContent = `${inst.name}`;
                dropdown.appendChild(option);
            });
        } catch (err) {
            console.error('Could not load instructors:', err);
            showNotification('Failed to load instructors', 'error');
        }
    }

    // if the admin create a course 

    function setupCreateCourseForm() {
        const form = document.getElementById('create-course-form');
    
        form.addEventListener('submit', async (e) => {

            // to stop the page from reloading
            e.preventDefault(); 
    
            
            const crn = document.getElementById('course-crn').value.trim();
            const name = document.getElementById('course-name').value.trim();
            const department = document.getElementById('course-department').value.trim();
            const creditHours = Number(document.getElementById('course-credits').value);
            const totalSeats = Number(document.getElementById('course-seats').value);
            const instructorId = document.getElementById('course-instructor').value;
            const description = document.getElementById('course-description').value.trim();
    
            // Get all selected prerequisites
            const prereqDropdown = document.getElementById('course-prerequisites');
            
            const selectedOptions = prereqDropdown.selectedOptions;

            const selectedArray = [...selectedOptions];


            // get the value from each selected array
            const prerequisites = selectedArray.map(option => option.value);
            
    
            // just to make sure all filed are added
            if (!name || !creditHours || !totalSeats) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
    
            // Build the course object to send to the server
            const newCourse = {
                crn: crn || undefined, // If no CRN is given, let the backend generate one
                name,
                department,
                creditHours,
                totalSeats,
                availableSeats: totalSeats,

                // if there is no instructor make it undefined
                instructor: instructorId || undefined,
                description: description || undefined,
                // if there is add the prerequisites if not empty array
                prerequisites: prerequisites.length > 0 ? prerequisites : [],
                
            };
    
            try {
                const res = await fetch('/api/courses/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newCourse)
                });
    

                const result = await res.json();
    
                // if there is a result
                if (result.success) {
                    showNotification('Course created successfully!', 'success');
                    // clear the form
                    form.reset(); 
    
                    // Refresh 
                    loadCourses();


    
                    // Switch

                    const managementTabButton = document.querySelector('[data-tab="course-management-tab"]');
                    // as if it is a click
                    managementTabButton.click();


                } else {
                    showNotification(result.message || 'Failed to create course', 'error');
                }
            } catch (err) {
                console.error('Error submitting course:', err);
                showNotification('Error creating course. Please try again.', 'error');
            }
        });
    }

    // this is a notification 

    function showNotification(message, type) {
        const notificationBox = document.getElementById('notification-area');
        notificationBox.textContent = message;
        notificationBox.className = `notification ${type}`;
        notificationBox.classList.remove('hidden');
    


        // 5000 = 5s
        setTimeout(() => {
            notificationBox.classList.add('hidden');
        }, 5000);

    }
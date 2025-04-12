// This file will handle the admin approval for courses


const searchBtn = document.querySelector('#apply-filters');

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
        dropdown.appendChild(option);
    }

}

async function approveCourse(courseCRN) {


    try {
        const response = await fetch(`/api/courses/${courseCRN}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ approved: true })
        });
        
        

        const result = await response.json();
        
        if (result.success) {
            showNotification('Course approved successfully', 'success');
            loadCourses();
        } else {
            showNotification(result.message || 'Failed to approve course', 'error');
        }
        
        
        
    } catch (error) {
        console.error('Error approving course:', error);
        showNotification('Error approving course. Please try again.', 'error');
    }


    loadCoursesForAdmin();

}




// this functions should apply the filter when choosing a category

function filterCoursesByCategory() {

    const getCatValue = document.getElementById('department-filter').value;

    const getCourseListTable = document.getElementById('courses-list');


    // get the table rows
    const rows = getCourseListTable.querySelectorAll('tr');

    rows.forEach(row => {

        // because the category in the 3 column in the table
        // I used here cells because DOM provide you with it when using table
        const categoryCell = row.cells[2];

        // !getCatValue if not category is selectd
        // categoryCell.textContent === getCatValue display the category
        if (!getCatValue || categoryCell.textContent === getCatValue) {
            row.style.display = '';

        } else {
            row.style.display = 'none';
        }

    });

}

searchBtn.addEventListener('click', filterCoursesByCategory);


const pendDiv = document.querySelector('#pending-courses');
const approvedDiv = document.querySelector("#approved-courses");

// When the page open load both courses
document.addEventListener("DOMContentLoaded", async function(){
    if(!permittedUser()){
        
        document.body.innerHTML = `
        <h1>You do not have permission to view this page. Please <a href="login.html">log in</a> with admin privliges.</h1>
        `;
        return;
    }

    // load all functions
    
    setupTabs();
    loadCourses();
    loadCoursesForAdmin();
    loadWeeklySchedule();


    
    // Add all event listeners only after elements are visable
    document.getElementById('department-filter').addEventListener('change', filterCoursesByCategory);
    searchBtn.addEventListener('click', searchCoursesByName);

    // this for real-time search
    // when the user types anything it immediately calls searchCoursesByName() mehtod
    document.getElementById('course-name-search').addEventListener('input', searchCoursesByName);

    document.getElementById('status-filter').addEventListener('change', filterCoursesByStatus);

    // load the data

    loadCoursesForPrerequisites();
 
    setupCreateCourseForm();
 
    loadInstructors();

    loadCoursesForPublication();

    const currentuser = document.getElementById("student-email");
    if(localStorage.uid){
        const response = await fetch('api/users');
        const users = await response.json();
        const user = users.find(u => u.id == localStorage.uid);
        currentuser.innerHTML = 
        `
            ${user.email} 
        `

        const style = document.createElement("style");
        style.innerHTML = `
          .user-info:hover .logout-btn {
            display: block;
          }
          .user-info {
            display: inline-flex;
          }
        `;
        document.head.appendChild(style);

    }
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
                        // if the admin approve is false then show the approve button if not show the disapprove button
                        `<button class="btn-action btn-approve" onclick="approveCourse('${course.crn}')">Approve</button>` : 
                        `<button class="btn-action btn-reject" onclick="disApproveCourse('${course.crn}')">Disapprove</button>`
                    }
                    <button class="btn-action btn-view" onclick="showCourseDetails('${course.crn}')">View</button>
                    <button class="btn-action btn-edit" onclick="editCourse('${course.crn}')">Edit</button>
                    ${!course.instructor ? 
                        `<button class="btn-action btn-assign" onclick="assignInstructor('${course.crn}')">Assign Instructor</button>` 
                        : ''
                    }
                    ${course.adminApprove ? 
                        // if the admin approve is true show the button for close or open

                        // if the course is open for registration show close else open in the button label
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

    // here it will get the crn of the course and then chagne the admin approve to false
    // await fetch(`api/courses/${courseCRN}?approved=true`);
    // loadCourses();


    try {
        const response = await fetch(`/api/courses/${courseCRN}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ approved: true })
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification('Course approved successfully', 'success');
        } else {
            showNotification(result.message || 'Failed to approve course', 'error');
        }
        
        // Reload the course list
        loadCourses();
    } catch (error) {
        console.error('Error approving course:', error);
        showNotification('Error approving course. Please try again.', 'error');
    }

}


// search for a course 

function searchCoursesByName() {

    const searchName = document.getElementById('course-name-search').value.toLowerCase();
    const getListTable = document.getElementById('courses-list');

    const getRows = getListTable.querySelectorAll('tr');

    getRows.forEach(row => {

        if (!row.cells) return;

        // get the coures name from the second column, starting from index 0

        const courseNameCell = row.cells[1];

        const courseName = courseNameCell.textContent.toLowerCase();

                        // indexOf(searchName) means that the substring searchTerm is found 
                        // starting at the very first character of courseName

                        //example, if courseName is "Web Development" and searchTerm is "Web", 
                        // then courseName.indexOf("Web") returns 0, so the condition is true.
                        

        if (!searchName || courseName.indexOf(searchName) === 0) {
            row.style.display = '';
        }

        else {
            row.style.display = 'none';
        }

    });

}


async function disApproveCourse(courseCRN) {
    try {
        const response = await fetch(`/api/courses/${courseCRN}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ approved: false })
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification('Course disapproved successfully', 'success');
        } else {
            showNotification(result.message || 'Failed to disapprove course', 'error');
        }
        
        loadCourses();
    } catch (error) {
        console.error('Error disapproving course:', error);
        showNotification('Error disapproving course. Please try again.', 'error');
    }
}


document.addEventListener("DOMContentLoaded", async () => {

    if(!permittedUser()) {
        document.body.innerHTML = `
                    <h1>You do not have permission to view this page. Please <a href="login.html">log in</a> as an admin.</h1>
        `;
        return;
    }

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
                // get the custom data attribute
                const tabId = button.dataset.tab;
                document.getElementById(tabId).classList.add('active');


                // to load the courses when the user click on publish courses

                if (tabId === 'course-publication-tab') {
                    loadCoursesForPublication();
                }

            });
        });

    }

    // this method will load all courses 
    async function loadCoursesForPrerequisites() {
        try {
            const res = await fetch('/api/courses');
            const courses = await res.json();

            const container = document.getElementById('prerequisites-container');
            container.innerHTML = ''; // Clear old options

            courses.forEach(course => {
                const checkboxItem = document.createElement('div');
                checkboxItem.className = 'checkbox-item';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `prereq-${course.id}`;
                checkbox.value = course.id;
                checkbox.name = 'prerequisites';
                
                const label = document.createElement('label');
                label.htmlFor = `prereq-${course.id}`;
                label.textContent = `${course.name} (${course.id})`;
                
                // Handler for the entire div
                checkboxItem.onclick = (e) => {
                    // Only toggle if clicking the div or label, not the checkbox itself
                    if (e.target === checkboxItem || e.target === label) {
                        e.preventDefault(); // Prevent any default behavior
                        checkbox.checked = !checkbox.checked; // Toggle checkbox
                    }
                };
                
                checkboxItem.appendChild(checkbox);
                checkboxItem.appendChild(label);
                container.appendChild(checkboxItem);
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
                option.value = inst.name;
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
    
            
            const id = document.getElementById('course-id').value.trim().toUpperCase();

            const crn = document.getElementById('course-crn').value.trim();


            const name = document.getElementById('course-name').value.trim();


            const category = document.getElementById('course-category').value.trim();

            const description = document.getElementById('course-description').value.trim();


            // Get all selected prerequisites
            const prereqDropdown = document.getElementById('course-prerequisites');



            
            const creditHours = Number(document.getElementById('course-credits').value);
            const totalSeats = Number(document.getElementById('course-seats').value);
            const instructorId = document.getElementById('course-instructor').value;
    

            
            

            const selectedOptions = prereqDropdown.selectedOptions;

            const selectedArray = [...selectedOptions];


            // get the value from each selected array by going for each option
            const prerequisites = selectedArray.map(option => option.value);
            

    
            // Build the course object to send to the server
            const newCourse = {
                id,
                crn,
                name,
                category,
                totalSeats,
                creditHours,
                availableSeats: totalSeats,
                adminApprove: false,
                openForRegistration: false,
                registeredStudents: [],
                hasStarted: false,
                // if there is no instructor make it undefined
                instructor: instructorId || undefined,
                description: description || undefined,
                // if there is add the prerequisites if not empty array
                prerequisites: prerequisites.length > 0 ? prerequisites : [],
                
            };
    
            try {
                const res = await fetch('/api/courses', {
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


async function loadCoursesForPublication() {

        const response = await fetch('/api/courses');
        const courses = await response.json();
        
        const publishCoursesList = document.getElementById('publish-courses-list');

        // clear all previous 
        publishCoursesList.innerHTML = '';
        
        courses.forEach(course => {
            const row = document.createElement('tr');
            const isPublished = course.isPublishedForInstructors;
            
            row.innerHTML = `
                <td><input type="checkbox" class="course-select" data-crn="${course.crn}"></td>
                <td>${course.id}</td>
                <td>${course.name}</td>
                <td>${course.category}</td>
                <td>${isPublished ? 'Published' : 'Not Published'}</td>
                <td>${course.interestDeadline ? new Date(course.interestDeadline).toLocaleString() : "-"}</td>  
                <td>${course.interestedInstructors?.length || 0}</td>
                <td>
                    <button class="btn-action ${isPublished ? 'btn-reject' : 'btn-approve'}" 
                            onclick="togglePublishStatus('${course.crn}', ${!isPublished})">
                        ${isPublished ? 'Unpublish' : 'Publish'}
                    </button>
                </td>
            `;
            
            publishCoursesList.appendChild(row);
        });
}


// Function to set deadline for selected courses
document.getElementById('apply-deadline').addEventListener('click', async () => {
    const deadline = document.getElementById('interest-deadline').value;
    
    // get all checkboxes 
    const checkboxes = document.querySelectorAll('.course-select:checked');

    let selectedCourses = [];

    // loop on them 
    checkboxes.forEach(function(checkbox) {
        // get the courses that are selected by the user
        selectedCourses.push(checkbox.getAttribute('data-crn'));
    });


    // if no courses has been selected
    if (selectedCourses.length === 0) {
        showNotification('Please select at least one course', 'error');
        return;
    }
    


    
        const response = await fetch('/api/courses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // convert to JSON
            body: JSON.stringify({ 
                courses: selectedCourses,
                deadline: new Date(deadline).toISOString()
            })
        });


        const result = await response.json();
        if (result.success) {

            loadCoursesForPublication();
        } 
        
});


// This function is used to publish or unpublish a course

async function togglePublishStatus(crn, publish) {
    try {
        const response = await fetch(`/api/courses/${crn}/publish`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ publish })
        });
        
        const result = await response.json();
        if (result.success) {
            showNotification(`Course ${publish ? 'published' : 'unpublished'} successfully`, 'success');
            loadCoursesForPublication();
        } else {
            showNotification(result.message || 'Failed to update publication status', 'error');
        }
    } catch (error) {
        console.error('Error toggling publish status:', error);
        showNotification('Failed to update publication status', 'error');
    }
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


// this function will filter the courses by status

function filterCoursesByStatus() {

    const statusValue = document.getElementById('status-filter').value;

    const getCoursesTable = document.getElementById('courses-list');

    const rows = getCoursesTable.querySelectorAll('tr');

    rows.forEach(row => {

        // skip if no cells, start from 0

        if(!row.cells) return;

        // get column 7

        const getStatusCell = row.cells[6];


        // textContent will return the content of the status element
        // trim() to remove whitespace 
        const statusText = getStatusCell.textContent.trim();

        // map the status text to the value in dropdown 

        const statusMapping = {
            'Pending Approval': 'pending',
            'Approved': 'approved',
            'Open for Registration': 'open',
            'Closed for Registration': 'closed',
            'In Progress': 'inProgress',
            'Completed': 'completed'
        };

        // here how mapping works 
        // get the choosing status and then check for it in the list 
        // and if no status has been choosen put empty string
        const rowStatValue = statusMapping[statusText] || '';

        // showing and hiding

        if (!statusValue || rowStatValue === statusValue) {
            // show the row as the browser will go back to the default 
            // display style
            row.style.display = '';
        }

        // hide that row from view because the user did not choose a status 

        else {
            row.style.display = 'none';
        }

    });

}

function loadWeeklySchedule() {
    const scheduleBody = document.querySelector('#schedule-tab');
    scheduleBody.innerHTML = `
        <h2>Weekly Schedule</h2>
        <div class="day-tabs">
            <button class="day-tab active" data-day="Sunday">Sunday</button>
            <button class="day-tab" data-day="Monday">Monday</button>
            <button class="day-tab" data-day="Tuesday">Tuesday</button>
            <button class="day-tab" data-day="Wednesday">Wednesday</button>
            <button class="day-tab" data-day="Thursday">Thursday</button>
        </div>
        <div class="schedule-content">
            <div id="Sunday" class="day-content active">
                <div class="course-list"></div>
            </div>
            <div id="Monday" class="day-content">
                <div class="course-list"></div>
            </div>
            <div id="Tuesday" class="day-content">
                <div class="course-list"></div>
            </div>
            <div id="Wednesday" class="day-content">
                <div class="course-list"></div>
            </div>
            <div id="Thursday" class="day-content">
                <div class="course-list"></div>
            </div>
        </div>
    `;

    setupDayTabs();
    populateSchedule();
}

function setupDayTabs() {
    const tabs = document.querySelectorAll('.day-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.day-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(tab.dataset.day).classList.add('active');
        });
    });
}

async function populateSchedule() {
    try {
        const response = await fetch('/api/courses');
        const courses = await response.json();
        const activeCourses = courses.filter(course => course.hasStarted);
        
        // Create a map for each day's courses
        const dayMaps = {
            'Sunday': [],
            'Monday': [],
            'Tuesday': [],
            'Wednesday': [],
            'Thursday': []
        };

        // Sort courses by start time
        activeCourses.forEach(course => {
            if (course.schedule && course.schedule.days) {
                course.schedule.days.forEach(day => {
                    dayMaps[day].push({
                        ...course,
                        startTime: course.schedule.startTime,
                        endTime: course.schedule.endTime
                    });
                });
            }
        });

        // Sort and populate each day
        Object.entries(dayMaps).forEach(([day, courses]) => {
            courses.sort((a, b) => a.startTime.localeCompare(b.startTime));
            const courseList = document.querySelector(`#${day} .course-list`);
            courseList.innerHTML = courses.length ? courses.map(course => `
                <div class="course-item ${course.category.toLowerCase()}">
                    <div class="course-time">${course.startTime} - ${course.endTime}</div>
                    <div class="course-info">
                        <div class="course-name">${course.id} - ${course.name}</div>
                        <div class="course-instructor">Instructor: ${course.instructor || 'TBA'}</div>
                    </div>
                </div>
            `).join('') : '<p>No courses scheduled for this day.</p>';
        });
    } catch (error) {
        console.error('Error loading schedule:', error);
        showNotification('Failed to load schedule', 'error');
    }
}

function logOut(){
    // Clear all local storage
    localStorage.clear();

    // redirect to login page
    window.location.href = 'landing.html';
}

function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function setupModalClosers() {
    document.querySelectorAll('.close-modal').forEach(closer => {
        closer.addEventListener('click', () => {
            const modal = closer.closest('.modal');
            if (modal) hideModal(modal.id);
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) hideModal(modal.id);
        });
    });
}

async function showCourseDetails(crn) {
    try {
        const response = await fetch(`/api/courses/${crn}`);
        const course = await response.json();
        
        const modalContent = document.getElementById('modal-course-details');
        modalContent.innerHTML = `
            <div class="course-detail-grid">
                <div class="detail-row">
                    <strong>Course ID:</strong>
                    <span>${course.id}</span>
                </div>
                <div class="detail-row">
                    <strong>CRN:</strong>
                    <span>${course.crn}</span>
                </div>
                <div class="detail-row">
                    <strong>Name:</strong>
                    <span>${course.name}</span>
                </div>
                <div class="detail-row">
                    <strong>Category:</strong>
                    <span>${course.category}</span>
                </div>
                <div class="detail-row">
                    <strong>Credit Hours:</strong>
                    <span>${course.creditHours}</span>
                </div>
                <div class="detail-row">
                    <strong>Instructor:</strong>
                    <span>${course.instructor || 'Not Assigned'}</span>
                </div>
                <div class="detail-row">
                    <strong>Available Seats:</strong>
                    <span>${course.availableSeats}/${course.totalSeats}</span>
                </div>
                <div class="detail-row">
                    <strong>Schedule:</strong>
                    <span>${course.schedule ? `${course.schedule.days.join(', ')} ${course.schedule.startTime}-${course.schedule.endTime}` : 'Not Scheduled'}</span>
                </div>
                <div class="detail-row">
                    <strong>Prerequisites:</strong>
                    <span>${course.prerequisites?.length ? course.prerequisites.join(', ') : 'None'}</span>
                </div>
                <div class="detail-row full-width">
                    <strong>Description:</strong>
                    <p>${course.description || 'No description available'}</p>
                </div>
            </div>
        `;
        
        showModal('course-details-modal');
    } catch (error) {
        console.error('Error loading course details:', error);
        showNotification('Failed to load course details', 'error');
    }
}

async function editCourse(crn) {
    try {
        const response = await fetch(`/api/courses/${crn}`);
        const course = await response.json();
        
        const form = document.getElementById('edit-course-form');
        form.innerHTML = `
            <input type="hidden" id="edit-crn" value="${course.crn}">
            <div class="form-group">
                <label for="edit-name">Course Name:</label>
                <input type="text" id="edit-name" value="${course.name}" required>
            </div>
            <div class="form-group">
                <label for="edit-category">Category:</label>
                <input type="text" id="edit-category" value="${course.category}" required>
            </div>
            <div class="form-group">
                <label for="edit-credits">Credit Hours:</label>
                <input type="number" id="edit-credits" value="${course.creditHours}" required>
            </div>
            <div class="form-group">
                <label for="edit-seats">Total Seats:</label>
                <input type="number" id="edit-seats" value="${course.totalSeats}" required>
            </div>
            <div class="form-group">
                <label for="edit-description">Description:</label>
                <textarea id="edit-description" rows="4">${course.description || ''}</textarea>
            </div>
        `;
        
        showModal('edit-course-modal');
        
        // Add save handler
        document.getElementById('save-course-changes').onclick = async () => {
            const updatedCourse = {
                ...course,
                name: document.getElementById('edit-name').value,
                category: document.getElementById('edit-category').value,
                creditHours: Number(document.getElementById('edit-credits').value),
                totalSeats: Number(document.getElementById('edit-seats').value),
                description: document.getElementById('edit-description').value
            };
            
            try {
                const updateResponse = await fetch(`/api/courses/${crn}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedCourse)
                });
                
                if (updateResponse.ok) {
                    showNotification('Course updated successfully', 'success');
                    hideModal('edit-course-modal');
                    loadCourses(); // Refresh the course list
                } else {
                    showNotification('Failed to update course', 'error');
                }
            } catch (error) {
                console.error('Error updating course:', error);
                showNotification('Error updating course', 'error');
            }
        };
    } catch (error) {
        console.error('Error loading course for editing:', error);
        showNotification('Failed to load course for editing', 'error');
    }
}

async function assignInstructor(crn) {
    try {
        const [courseResponse, instructorsResponse] = await Promise.all([
            fetch(`/api/courses/${crn}`),
            fetch('/api/users?role=instructor')
        ]);
        
        const course = await courseResponse.json();
        const instructors = await instructorsResponse.json();
        
        const modalContent = document.getElementById('modal-instructor-assignment');
        modalContent.innerHTML = `
            <div class="course-info">
                <h3>${course.id} - ${course.name}</h3>
                <p>Current Instructor: ${course.instructor || 'None'}</p>
            </div>
            <div class="form-group">
                <label for="instructor-select">Select Instructor:</label>
                <select id="instructor-select" required>
                    <option value="">Choose an instructor</option>
                    ${instructors.map(instructor => 
                        `<option value="${instructor.id}">${instructor.name}</option>`
                    ).join('')}
                </select>
            </div>
        `;
        
        showModal('assign-instructor-modal');
        
        // Add confirm handler
        document.getElementById('confirm-instructor-assignment').onclick = async () => {
            const instructorId = document.getElementById('instructor-select').value;
            if (!instructorId) {
                showNotification('Please select an instructor', 'error');
                return;
            }
            
            try {
                const updateResponse = await fetch(`/api/courses/${crn}/assign-instructor`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ instructorId })
                });
                
                if (updateResponse.ok) {
                    showNotification('Instructor assigned successfully', 'success');
                    hideModal('assign-instructor-modal');
                    loadCourses(); // Refresh the course list
                } else {
                    showNotification('Failed to assign instructor', 'error');
                }
            } catch (error) {
                console.error('Error assigning instructor:', error);
                showNotification('Error assigning instructor', 'error');
            }
        };
    } catch (error) {
        console.error('Error loading instructor assignment:', error);
        showNotification('Failed to load instructor assignment', 'error');
    }
}

async function loadInstructorAssignments() {
    try {
        const response = await fetch('/api/courses');
        const courses = await response.json();
        
        const courseList = document.getElementById('course-instructor-list');
        courseList.innerHTML = ''; // Clear existing content
        courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'course-item';
            
            courseElement.innerHTML = `
                <div class="course-header" onclick="toggleInstructorList('${course.crn}')">
                    <div>
                        <strong>${course.id} - ${course.name}</strong>
                        <span>(Current Instructor: ${course.instructor || 'None'})</span>
                    </div>
                    <div>
                        ${course.interestedInstructors?.length || 0} interested instructors
                    </div>
                </div>
                <div id="instructors-${course.crn}" class="interested-instructors">
                    ${renderInstructorList(course)}
                </div>
            `;
            
            courseList.appendChild(courseElement);
        });
    } catch (error) {
        console.error('Error loading instructor assignments:', error);
        showNotification('Failed to load instructor assignments', 'error');
    }
}

function renderInstructorList(course) {
    if (!course.interestedInstructors?.length) {
        return '<div class="no-instructors">No interested instructors</div>';
    }
    
    console.log(course.interestedInstructors);  
    return `
        <div class="instructor-list">
            ${course.interestedInstructors.map(instructor => `
                <div class="instructor-item">
                    <span>${instructor.instructorName}</span>
                    <button class="btn-action btn-assign"
                            onclick="assignInstructorToCourse('${course.crn}', '${instructor.instructorName}')">
                        Assign
                    </button>
                </div>
                
            `).join('')}
        </div>
    `;
}

function toggleInstructorList(crn) {
    const instructorList = document.getElementById(`instructors-${crn}`);
    instructorList.classList.toggle('active');
}

async function assignInstructorToCourse(crn, instructorName) {
    try {
        const response = await fetch(`/api/courses/${crn}/assign-instructor`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                instructor: instructorName,
                clearInterested: true 
            })
        });
        
        if (response.ok) {
            showNotification('Instructor assigned successfully', 'success');
            loadInstructorAssignments(); // Refresh the list
        } else {
            showNotification('Failed to assign instructor', 'error');
        }
    } catch (error) {
        console.error('Error assigning instructor:', error);
        showNotification('Error assigning instructor', 'error');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...
    setupModalClosers();
    const instructorTab = document.querySelector('[data-tab="instructor-tab"]');
    instructorTab.addEventListener('click', loadInstructorAssignments);
});
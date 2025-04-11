let currentUser = null;
let availableCourses = [];

document.addEventListener('DOMContentLoaded', async () => {
    

    const userId = localStorage.getItem('uid');
    if (!userId) {
        alert("You are not logged in. Please log in to access the dashboard.");
        window.location.href = '/login.html';
        return;
    }
    
    

        // Initialize user and load courses
        await initializeUser(userId);
        await loadAvailableCourses();
        setupEventListeners();
        updateUI();
   


});

async function initializeUser(userId) {


    const response = await fetch(`/api/users/${userId}`);
    const userData = await response.json();
    
    
    
    // check if user is an instructor
    if (userData.role !== 'instructor') {
        alert("You do not have instructor permissions.");
        window.location.href = '/login.html';
        return;
    }
    
    currentUser = userData;
    updateUserInfo();
}

async function loadAvailableCourses() {

    
    // get the courses

        const response = await fetch('/api/courses');
        const courses = await response.json();
        availableCourses = courses;
        displayAvailableCourses();
        populateDepartmentFilter();
   


}



// this function is about the switching tabs

function setupEventListeners() {
    

    // get all elements with tab-btn
    document.querySelectorAll('.tab-btn').forEach(button => {

        button.addEventListener('click', () => {
            
            // showing and not showing the tab

            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');



        });

    });
    
    // same as the above

    document.querySelectorAll('.sub-tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.sub-tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.sub-content').forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(button.dataset.content).classList.add('active');
        });
    });
    

    
    // add the listeners

    document.getElementById('apply-filters').addEventListener('click', filterCourses);
    document.getElementById('course-name-search').addEventListener('input', filterCourses);
    document.getElementById('department-filter').addEventListener('change', filterCourses);


}


// calling the functions 

function updateUI() {
    displayAvailableCourses();
    displayInterestedCourses();
    displayAssignedCourses();
}



// show the dr information 

function updateUserInfo() {
    const userInfoElement = document.getElementById("instructor-email");
    const profileInfoElement = document.getElementById("instructor-info");
    
    if (userInfoElement) {
        userInfoElement.textContent = currentUser.email;
    }
    
    if (profileInfoElement) {
        profileInfoElement.innerHTML = `
            <h3>${currentUser.name}</h3>
            <p><strong>Email:</strong> ${currentUser.email}</p>
            <p><strong>Role:</strong> ${currentUser.role}</p>
            <div class="expertise">
                <h4>Areas of Expertise:</h4>
                <ul>
                    ${currentUser.areasOfExpertise?.map(area => `<li>${area}</li>`).join('')}
                </ul>
            </div>
        `;
    }


}


// to show the courses 

function displayAvailableCourses() {
    const coursesList = document.getElementById('available-courses-list');
    if (!coursesList) return;
    
    coursesList.innerHTML = '';
    
    if (!availableCourses || availableCourses.length === 0) {
        coursesList.innerHTML = '<tr><td colspan="6">No courses available for interest at this time.</td></tr>';
        return;
    }
    
    availableCourses.forEach(course => {
        const isInterested = currentUser.interestedCourses?.includes(course.id);
        const deadlineDate = course.interestDeadline ? new Date(course.interestDeadline) : null;
        const deadlinePassed = deadlineDate && deadlineDate < new Date();
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.id}</td>
            <td>${course.name}</td>
            <td>${course.category || 'N/A'}</td>
            <td>${course.creditHours || 'N/A'}</td>
            <td>${deadlineDate ? deadlineDate.toLocaleString() : 'No deadline'}</td>
            <td>
                ${!deadlinePassed ? 
                    `<button class="btn-action ${isInterested ? 'btn-reject' : 'btn-approve'}" 
                             onclick="toggleInterest('${course.id}', ${!isInterested})">
                        ${isInterested ? 'Remove Interest' : 'Express Interest'}
                     </button>` :
                    '<span class="deadline-passed">Deadline passed</span>'
                }
            </td>
        `;
        coursesList.appendChild(row);
    });
}





function displayInterestedCourses() {
    const interestedList = document.getElementById('interested-courses-list');
    if (!interestedList) return;
    
    interestedList.innerHTML = '';
    

    // no intersted courses 
    if (!currentUser.interestedCourses || currentUser.interestedCourses.length === 0) {
        interestedList.innerHTML = '<tr><td colspan="5">You haven\'t expressed interest in any courses yet.</td></tr>';
        return;
    }
    
    // Filter courses to only the instructor is interested in
    const interestedCourses = availableCourses.filter(course => 
        currentUser.interestedCourses.find(id => id === course.id)
    );
    



    if (interestedCourses.length === 0) {
        interestedList.innerHTML = '<tr><td colspan="5">No interested courses found.</td></tr>';
        return;
    }
    
    interestedCourses.forEach(course => {
        const deadlineDate = course.interestDeadline ? new Date(course.interestDeadline) : null;
        const deadlinePassed = deadlineDate && deadlineDate < new Date();
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.id}</td>
            <td>${course.name}</td>
            <td>${course.category}</td>
            <td>${deadlineDate ? deadlineDate.toLocaleString() : 'No deadline'}</td>
            <td>
                ${!deadlinePassed ? 
                    `<button class="btn-action btn-reject" onclick="toggleInterest('${course.id}', false)">
                        Remove Interest
                     </button>` :
                    '<span class="deadline-passed">Deadline passed</span>'
                }
            </td>
        `;
        interestedList.appendChild(row);
    });
}



async function displayAssignedCourses() {
    const assignedList = document.getElementById('assigned-courses-list');

    

    assignedList.innerHTML = '';

    
    if (!currentUser.assignedCourses || currentUser.assignedCourses.length === 0) {
        assignedList.innerHTML = '<tr><td colspan="5">You don\'t have any assigned courses.</td></tr>';
        return;
    }

    
    
     // Array to hold the course data
     let courses = [];

     // Loop through all assigned courses and fetch their details
     for (let i = 0; i < currentUser.assignedCourses.length; i++) {
         const courseId = currentUser.assignedCourses[i];
         
         
             // Fetch course data and wait for the result
             const response = await fetch(`/api/courses/${courseId}`);
             const course = await response.json();
             courses.push(course); // Add the course to the courses array
         
     }
 
     // Check if any courses were fetched
     if (courses.length === 0) {
         assignedList.innerHTML = '<tr><td colspan="5">No assigned courses found.</td></tr>';
         return;
     }
 
     // Display the courses in the table
     courses.forEach(course => {
         const row = document.createElement('tr');
         row.innerHTML = `
             <td>${course.id}</td>
             <td>${course.name}</td>
             <td>${course.category || 'N/A'}</td>
             <td>${course.registeredStudents?.length || 0}/${course.totalSeats}</td>
             <td>
                 <button class="btn-action" onclick="viewStudents('${course.id}')">
                     View Students
                 </button>
             </td>
         `;
         assignedList.appendChild(row);
     });

    
    
}


function showNotification(message, type) {
    const notificationBox = document.getElementById('notification-area');
    notificationBox.textContent = message;
    notificationBox.className = `notification ${type}`;
    notificationBox.classList.remove('hidden');
    
    setTimeout(() => {
        notificationBox.classList.add('hidden');
    }, 5000);
}

function logOut() {
    localStorage.removeItem('uid');
    localStorage.removeItem('userRole');
    window.location.href = '/login.html';
}
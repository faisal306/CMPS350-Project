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

        const response = await fetch('/api/courses/published');
        const courses = await response.json();
        availableCourses = courses;
        displayAvailableCourses();
        populateDepartmentFilter();
   


}



function setupEventListeners() {
    


    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });
    
    

    document.querySelectorAll('.sub-tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.sub-tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.sub-content').forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(button.dataset.content).classList.add('active');
        });
    });
    

    

    document.getElementById('apply-filters').addEventListener('click', filterCourses);
    document.getElementById('course-name-search').addEventListener('input', filterCourses);
    document.getElementById('department-filter').addEventListener('change', filterCourses);


}

function updateUI() {
    displayAvailableCourses();
    displayInterestedCourses();
    displayAssignedCourses();
}

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

async function toggleInterest(courseId, interested) {
    try {
        const response = await fetch(`/api/courses/${courseId}/interest`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                instructorId: currentUser.id,
                interested
            })
        });
        
        const result = await response.json();
        if (result.success) {
            showNotification(`Interest ${interested ? 'expressed' : 'removed'} successfully`, 'success');
            
            // Update the user's interested courses
            if (interested) {
                if (!currentUser.interestedCourses) {
                    currentUser.interestedCourses = [];
                }
                if (!currentUser.interestedCourses.includes(courseId)) {
                    currentUser.interestedCourses.push(courseId);
                }
            } else {
                currentUser.interestedCourses = currentUser.interestedCourses.filter(id => id !== courseId);
            }
            
            updateUI();
        } else {
            showNotification(result.message, 'error');
        }
    } catch (error) {
        console.error('Error toggling interest:', error);
        showNotification('Failed to update interest', 'error');
    }
}

function displayInterestedCourses() {
    const interestedList = document.getElementById('interested-courses-list');
    if (!interestedList) return;
    
    interestedList.innerHTML = '';
    
    if (!currentUser.interestedCourses || currentUser.interestedCourses.length === 0) {
        interestedList.innerHTML = '<tr><td colspan="5">You haven\'t expressed interest in any courses yet.</td></tr>';
        return;
    }
    
    // Filter available courses to only those the instructor is interested in
    const interestedCourses = availableCourses.filter(course => 
        currentUser.interestedCourses.includes(course.id)
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
            <td>${course.category || 'N/A'}</td>
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

function displayAssignedCourses() {
    const assignedList = document.getElementById('assigned-courses-list');
    if (!assignedList) return;
    
    assignedList.innerHTML = '';
    
    if (!currentUser.assignedCourses || currentUser.assignedCourses.length === 0) {
        assignedList.innerHTML = '<tr><td colspan="5">You don\'t have any assigned courses.</td></tr>';
        return;
    }
    
    // Get courses assigned to this instructor
    Promise.all(currentUser.assignedCourses.map(courseId => 
        fetch(`/api/courses/${courseId}`).then(res => res.json())
    ))
    .then(courses => {
        if (courses.length === 0) {
            assignedList.innerHTML = '<tr><td colspan="5">No assigned courses found.</td></tr>';
            return;
        }
        
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
    })
    .catch(error => {
        console.error("Error fetching assigned courses:", error);
        assignedList.innerHTML = '<tr><td colspan="5">Failed to load assigned courses.</td></tr>';
    });
}

function populateDepartmentFilter() {
    const departments = [...new Set(availableCourses.map(c => c.category).filter(Boolean))];
    const filter = document.getElementById('department-filter');
    
    if (!filter) return;
    
    filter.innerHTML = '<option value="">All Departments</option>';
    departments.sort().forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        filter.appendChild(option);
    });
}

function filterCourses() {
    const searchTerm = document.getElementById('course-name-search')?.value.toLowerCase() || '';
    const departmentValue = document.getElementById('department-filter')?.value || '';
    
    const filteredCourses = availableCourses.filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchTerm);
        const matchesDepartment = !departmentValue || course.category === departmentValue;
        return matchesSearch && matchesDepartment;
    });
    
    const coursesList = document.getElementById('available-courses-list');
    coursesList.innerHTML = '';
    
    if (filteredCourses.length === 0) {
        coursesList.innerHTML = '<tr><td colspan="6">No courses match your search criteria.</td></tr>';
        return;
    }
    
    filteredCourses.forEach(course => {
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
// Global variables
let currentUser = null;
let availableCourses = null;
let userCourses = {
    completedCourses: [],
    registeredCourses: []
};
let selectedCourse = null;

document.addEventListener('DOMContentLoaded', async () => {
    const userId = localStorage.getItem('uid');
    if (!userId) {
        alert("You are not logged in. Please log in to access the dashboard.");
        window.location.href = '/login.html';
        return;
    }
    
    try {
        // Initialize user and courses
        await initializeUser(userId);
        await initializeCourses();
        setupEventListeners();
        updateUI();
    } catch (error) {
        console.error("Initialization error:", error);
        showNotification("Failed to load dashboard. Please try again.");
    }
});

async function initializeUser(userId) {
    const response = await fetch(`/api/users/${userId}`);
    const userData = await response.json();
    
    if (userData.errorMessage) {
        throw new Error(userData.errorMessage);
    }
    
    currentUser = userData;
    const userCoursesResponse = await fetch(`/api/users/${userId}/courses`);
    if (!userCoursesResponse.ok) {
        throw new Error('Failed to fetch user courses');
    }
    userCourses =  (await userCoursesResponse.json()).data || userCourses;
}

async function initializeCourses() {
    const response = await fetch('/api/courses');
    if (!response.ok) throw new Error('Failed to fetch courses');
    const courses = await response.json();
    availableCourses = courses;
}

function setupEventListeners() {

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => switchTab(button));
    });


    // Registration modal
    document.getElementById('cancel-registration').addEventListener('click', closeModal);
    document.querySelector('.close-modal')?.addEventListener('click', closeModal);



    // Filters
    document.getElementById('course-name-search')?.addEventListener('input', filterAvailableCourses);
    document.getElementById('department-filter')?.addEventListener('change', filterAvailableCourses);

    // Learning tabs
    document.querySelectorAll('.learning-tab-btn').forEach(button => {
        button.addEventListener('click', () => switchLearningTab(button));
    });    

    // Logout
    document.getElementById('logout-btn')?.addEventListener('click', logOut);

}

function updateUI() {
    displayAvailableCourses(availableCourses);
    displayCompletedCourses();
    displayInProgressCourses();
    displayPendingCourses();
    updateUserInfo();
}

function switchTab(button) {
    const targetId = button.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(targetId)?.classList.add('active');
}

function switchLearningTab(button) {
    const status = button.dataset.status;
    document.querySelectorAll('.learning-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.learning-courses').forEach(section => section.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(`${status}-courses`)?.classList.add('active');
}

function displayAvailableCourses(availableCourses) {
    const coursesList = document.getElementById('available-courses-grid');
    if (!availableCourses || availableCourses.length === 0) {
        coursesList.innerHTML = '<p>No courses available.</p>';
        return;
    }
    coursesList.innerHTML = '';
    availableCourses.forEach(course => {
        const isCompleted = userCourses?.completedCourses?.some(c => c.crn == course.crn);
        const isRegistered = userCourses?.registeredCourses?.some(c => c.crn == course.crn);

        const hasPrerequisites = !course.prerequisites || course.prerequisites.every(pr =>
            userCourses?.completedCourses?.some(c => c.crn == pr));

        const buttonClass = !hasPrerequisites ? 'register-button-disabled' : 'register-button-active';
        let buttonText = 'Register';
        let isClickable = true;

        if (isCompleted) {
            buttonText = 'Already Completed';
            isClickable = false;
        } else if (isRegistered) {
            buttonText = 'Withdraw';
            isClickable = true;
        } else if (!hasPrerequisites) {
            buttonText = 'Prerequisites Not Met';
            isClickable = false;
        } 

        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <h3>${course.name} (${course.crn})</h3>
            <div class="course-info">
                <p><strong>Category:</strong> ${course.category}</p>
                <p><strong>Credits:</strong> ${course.creditHours}</p>
                <p><strong>Available Seats:</strong> ${course.availableSeats}</p>
                ${course.description ? `<p>${course.description}</p>` : ''}
            </div>
            <button class="${buttonClass}" data-crn="${course.crn}" ${!isClickable ? 'disabled' : ''}>
                ${buttonText}
            </button>
        `;

        if (isClickable) {
            const button = courseCard.querySelector('button');
            button.addEventListener('click', () => {
                if (isRegistered) {
                    if(confirm("Are you sure you want to unregister from this course?")) {
                        withdrawfromCourse(course);
                    }
                } else {
                    openRegistrationModal(course, 'register');
                }
            });
        }
        coursesList.appendChild(courseCard);
    });
}

function displayCompletedCourses() {
    const completedCoursesList = document.getElementById('completed-courses-list');
    const completedCourses = userCourses.completedCourses || [];
    completedCoursesList.innerHTML = completedCourses.length
        ? completedCourses.map(course => `
            <tr>
                <td>${course.name}</td>
                <td>${course.category || 'N/A'}</td>
                <td>${course.creditHours || 'N/A'}</td>
                <td>${course.grade || 'N/A'}</td>
            </tr>
        `).join('')
        : '<tr><td colspan="4">No completed courses.</td></tr>';
}

async function displayInProgressCourses() {
    const inProgressCoursesList = document.getElementById('in-progress-courses-list');
    let inProgressCourses = userCourses.registeredCourses || [];
    const response = await fetch('/api/courses');
    const courses = await response.json();
    inProgressCourses = inProgressCourses.filter(course => courses.some(c => c.crn == course.crn && c.adminApprove));
    inProgressCoursesList.innerHTML = inProgressCourses.length
        ? inProgressCourses.map(course => `
            <tr>
                <td>${course.name}</td>
                <td>${course.category || 'N/A'}</td>
                <td>${course.creditHours || 'N/A'}</td>
                <td>${course.instructor || 'N/A'}</td>
            </tr>
        `).join('')
        : '<tr><td colspan="4">No in-progress courses.</td></tr>';
}

async function displayPendingCourses() {
    // Courses that are in the registeredCourses list but is not approved by admin
    // Need to fetch the course information
    const pendingCoursesList = document.getElementById('pending-courses-list');
    const inProgressCourses = userCourses.registeredCourses || []; 
    const response = await fetch('/api/courses');
    const courses = await response.json();
    const pendingCourses = inProgressCourses.filter(course => !courses.some(c => c.crn == course.crn && c.adminApprove));
    pendingCoursesList.innerHTML = pendingCourses.length
        ? pendingCourses.map(course => `
            <tr>
                <td>${course.name}</td>
                <td>${course.category || 'N/A'}</td>
                <td>${course.creditHours || 'N/A'}</td>
                <td>${course.instructor || 'N/A'}</td>
            </tr>
        `).join('')
        : '<tr><td colspan="4">No pending courses.</td></tr>';
}


function openRegistrationModal(course, action) {
    selectedCourse = course;
    const modal = document.getElementById('registration-modal');
    const details = document.getElementById('modal-course-details');
    const confirmBtn = document.getElementById('confirm-registration');
    
    details.innerHTML = `
        <h3>${course.name} (${course.crn})</h3>
        <p><strong>Department:</strong> ${course.department}</p>
        <p><strong>Credits:</strong> ${course.creditHours}</p>
        <p><strong>Available Seats:</strong> ${course.availableSeats}</p>
        <p>Are you sure you want to ${action} this course?</p>
    `;
    
    confirmBtn.textContent = action === 'register' ? 'Register' : 'Unregister';
    confirmBtn.onclick = registerForCourse;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('registration-modal').style.display = 'none';
    selectedCourse = null;
}

async function registerForCourse() {
    if (!selectedCourse) return;
    
    try {
        const response = await fetch(`/api/users/${currentUser.id}/courses?type=register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ course: selectedCourse })
        });
        
        const result = await response.json();
        if (result.success) {
            await Promise.all([initializeCourses(), initializeUser(currentUser.id)]);
            alert("Successfully registered for the course!");
            location.reload();
        } else {
            throw new Error(result.message || 'Registration failed');
        }
    } catch (error) {
        console.error('Registration error:', error);
        alert("Failed to register for the course. Please try again.\n" + error.message);
        location.reload();
    } finally {
        closeModal();
    }
}

async function withdrawfromCourse(course) {
    try {  
        const response = await fetch(`/api/users/${currentUser.id}/courses?type=withdraw`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ course })
        });
        
        const result = await response.json();
        if (result.success) {
            await Promise.all([initializeCourses(), initializeUser(currentUser.id)]);
            alert("Successfully withdrawn from the course!");
            location.reload();
        } else {
            throw new Error(result.message || 'Withdrawal failed');
        }
    }
    catch (error) {
        console.error('Withdrawal error:', error);
        alert("Failed to withdraw from the course. Please try again.\n" + error.message);
        location.reload();
    }
}


function filterAvailableCourses() {
    const searchTerm = document.getElementById('course-name-search')?.value.toLowerCase() || '';
    
    const filteredCourses = availableCourses.filter(course => {
        let matchesSearch = course.name.toLowerCase().includes(searchTerm);
        matchesSearch = matchesSearch = course.category.toLowerCase().includes(searchTerm) || matchesSearch; // Include the course name
        return matchesSearch ;
    });

    displayAvailableCourses(filteredCourses);
}

function updateUserInfo() {
    const userInfo = document.getElementById("student-email");
    if (userInfo) {
        userInfo.innerHTML = `${currentUser.email}`;
    }


    console.log(currentUser);
    // Write info into student-info
    const studentInfo = document.getElementById("student-info");
    if (studentInfo) {
        studentInfo.innerHTML = `
            <p><strong>Name:</strong> ${currentUser.name}</p>
            <p><strong>Email:</strong> ${currentUser.email}</p>
            <p><strong>Role:</strong> ${currentUser.role}</p>
        `;
    }

    // Write info academic-details
    const academicDetails = document.getElementById("academic-details");
    if (academicDetails) {
        academicDetails.innerHTML = `
            <p><strong>Major:</strong> ${currentUser.major || 'N/A'}</p>
            <p><strong>GPA:</strong> ${currentUser.gpa || 'N/A'}</p>
            <p><strong>Credits Completed:</strong> ${currentUser.creditsCompleted || 'N/A'}</p>
        `;
    }
    
}

function showNotification(message) {
    const notification = document.getElementById('notification-area');
    if (notification) {
        notification.textContent = message;
        notification.classList.remove('hidden');
        setTimeout(() => notification.classList.add('hidden'), 3000);
    }
}

function logOut() {
    localStorage.clear();
    window.location.href = '/login.html';
}
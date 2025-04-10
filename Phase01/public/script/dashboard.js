// Global variables
let currentUser = null;
let availableCourses = null;
let userCourses = {
    completedCourses: [],
    inProgressCourses: [],
    pendingCourses: []
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
    const userDataResponse = await fetch(`/api/users/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    const coursesData = await userDataResponse.json();
    userCourses = coursesData || userCourses;
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
    document.getElementById('confirm-registration').addEventListener('click', registerForCourse);
    document.getElementById('cancel-registration').addEventListener('click', closeModal);
    document.querySelector('.close-modal')?.addEventListener('click', closeModal);

    // Filters
    document.getElementById('course-name-search')?.addEventListener('input', filterAvailableCourses);
    document.getElementById('department-filter')?.addEventListener('change', filterAvailableCourses);
}

function updateUI() {
    displayAvailableCourses(availableCourses);
    displayCompletedCourses();
    displayInProgressCourses();
    displayPendingCourses();
    populateDepartmentFilter();
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
        const isRegistered = userCourses?.pendingCourses?.some(c => c.crn === course.crn) ||
                            userCourses?.inProgressCourses?.some(c => c.crn === course.crn) || 
                            userCourses?.completedCourses?.some(c => c.crn === course.crn);
        console.log(userCourses);
        console.log(isRegistered);
        const hasPrerequisites = !course.prerequisites || course.prerequisites.every(pr =>
            userCourses?.completedCourses?.some(c => c.id === pr));

        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <h3>${course.name} (${course.crn})</h3>
            <div class="course-info">
                <p><strong>Department:</strong> ${course.department}</p>
                <p><strong>Credits:</strong> ${course.creditHours}</p>
                <p><strong>Available Seats:</strong> ${course.availableSeats}</p>
                ${course.description ? `<p>${course.description}</p>` : ''}
            </div>
            <button class="register-button" data-crn="${course.crn}" ${isRegistered || !hasPrerequisites ? 'disabled' : ''}>
                ${isRegistered ? 'Already Registered' : !hasPrerequisites ? 'Prerequisites Not Met' : 'Register'}
            </button>
        `;

        if (!isRegistered && hasPrerequisites) {
            courseCard.querySelector('.register-button').addEventListener('click', () => openRegistrationModal(course));
        }
        coursesList.appendChild(courseCard);
    });
}

function displayCompletedCourses() {
    const completedCoursesList = document.getElementById('completed-courses-list');
    const completedCourses = userCourses?.completedCourses || [];
    completedCoursesList.innerHTML = completedCourses.length
        ? completedCourses.map(course => `
            <tr>
                <td>${course.name}</td>
                <td>${course.department || 'N/A'}</td>
                <td>${course.creditHours || 'N/A'}</td>
                <td>${course.grade || 'N/A'}</td>
            </tr>
        `).join('')
        : '<tr><td colspan="4">No completed courses.</td></tr>';
}

function displayInProgressCourses() {
    const inProgressCoursesList = document.getElementById('in-progress-courses-list');
    const inProgressCourses = userCourses?.inProgressCourses || [];
    inProgressCoursesList.innerHTML = inProgressCourses.length
        ? inProgressCourses.map(course => `
            <tr>
                <td>${course.name}</td>
                <td>${course.department || 'N/A'}</td>
                <td>${course.creditHours || 'N/A'}</td>
                <td>${course.instructor || 'N/A'}</td>
            </tr>
        `).join('')
        : '<tr><td colspan="4">No in-progress courses.</td></tr>';
}

function displayPendingCourses() {
    const pendingCoursesList = document.getElementById('pending-courses-list');
    const pendingCourses = userCourses?.pendingCourses || [];
    pendingCoursesList.innerHTML = pendingCourses.length
        ? pendingCourses.map(course => `
            <tr>
                <td>${course.name}</td>
                <td>${course.department || 'N/A'}</td>
                <td>${course.creditHours || 'N/A'}</td>
                <td>${new Date(course.registrationDate).toLocaleDateString()}</td>
            </tr>
        `).join('')
        : '<tr><td colspan="4">No pending registrations.</td></tr>';
}

function openRegistrationModal(course) {
    selectedCourse = course;
    const modal = document.getElementById('registration-modal');
    const details = document.getElementById('modal-course-details');
    details.innerHTML = `
        <h3>${course.name} (${course.crn})</h3>
        <p><strong>Department:</strong> ${course.department}</p>
        <p><strong>Credits:</strong> ${course.creditHours}</p>
        <p><strong>Available Seats:</strong> ${course.availableSeats}</p>
        <p>Are you sure you want to register?</p>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('registration-modal').style.display = 'none';
    selectedCourse = null;
}

async function registerForCourse() {
    if (!selectedCourse) return;
    
    try {
        const response = await fetch(`/api/courses/${selectedCourse.crn}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentId: currentUser.id, crn: selectedCourse.crn })
        });
        
        const result = await response.json();
        if (result.success) {
            await Promise.all([initializeCourses(), initializeUser(currentUser.id)]);
            showNotification('Successfully registered for the course!');
        } else {
            alert("Failed to register class. Please contact the admnistration.\nError Message: " + result.message);
            throw new Error(result.message || 'Registration failed');
        }
    } catch (error) {
        console.error('Registration error:', error);
        showNotification(error.message || 'Failed to register for the course. Please try again.');
    } finally {
        closeModal();
    }
}

function populateDepartmentFilter() {
    const departments = [...new Set(availableCourses.map(c => c.department))].sort();
    const filter = document.getElementById('department-filter');
    filter.innerHTML = '<option value="">All Departments</option>';
    departments.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        filter.appendChild(option);
    });
}

function filterAvailableCourses() {
    const searchTerm = document.getElementById('course-name-search')?.value.toLowerCase() || '';
    const departmentValue = document.getElementById('department-filter')?.value || '';
    
    const filteredCourses = availableCourses.filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchTerm);
        const matchesDepartment = !departmentValue || course.department === departmentValue;
        return matchesSearch && matchesDepartment;
    });

    displayAvailableCourses(filteredCourses);
}

function updateUserInfo() {
    const userInfo = document.getElementById("student-email");
    if (userInfo) {
        userInfo.innerHTML = `${currentUser.email}`;
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
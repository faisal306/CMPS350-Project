// Global variables
let currentUser = null;
let availableCourses = [];
let userCourses = {
    pendingCourses: [],
    inProgressCourses: [],
    completedCourses: []
};
let selectedCourse = null;

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', async () => {
    // Check for user ID in localStorage
    const userId = localStorage.getItem('uid');
    
    if (!userId) {
        // If no user ID
        window.location.href = '/login.html';
        return;
    }
    
    try {
        // Fetch user data from API using the stored user ID
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        
        if (userData.errorMessage) {
            // If user not found or error
            console.error("Error fetching user data:", userData.errorMessage);
            localStorage.removeItem('uid');
            window.location.href = '/login.html';
            return;
        }
        
        // Set the current user
        currentUser = userData;
        

        displayUserInfo();
        await Promise.all([loadAvailableCourses(), loadUserCourses()]);
        populateDepartmentFilter();

        document.getElementById('logout-button').addEventListener('click', logout);
        document.getElementById('course-search').addEventListener('input', filterAvailableCourses);
        document.getElementById('department-filter').addEventListener('change', filterAvailableCourses);

        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                button.classList.add('active');
                document.getElementById(button.dataset.tab).classList.add('active');
            });
        });

        document.querySelectorAll('.course-status-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.course-status-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                displayUserCourses(tab.dataset.status);
            });
        });

        document.querySelector('.close').addEventListener('click', closeModal);
        document.getElementById('confirm-registration').addEventListener('click', registerForCourse);
        document.getElementById('cancel-registration').addEventListener('click', closeModal);

    } catch (error) {
        
        console.error("An error occurred:", error);
        window.location.href = '/login.html'; 
    }
});


function displayUserInfo() {
    const userInfoElement = document.getElementById('user-welcome');
    userInfoElement.innerHTML = `
        <div>
            <h3>Welcome, ${currentUser.firstName} ${currentUser.lastName}</h3>
            <p>${currentUser.email}</p>
        </div>
    `;
}

async function loadAvailableCourses() {
    try {
        const response = await fetch('/api/courses');
        if (!response.ok) throw new Error();
        const courses = await response.json();
        availableCourses = courses.filter(c => c.adminApprove && c.openForRegistration && c.availableSeats > 0);
        displayAvailableCourses();
    } catch {
        document.getElementById('available-courses-list').innerHTML = '<p class="error">Failed to load courses.</p>';
    }
}

function displayAvailableCourses() {
    const coursesList = document.getElementById('available-courses-list');
    if (availableCourses.length === 0) {
        coursesList.innerHTML = '<p>No courses available.</p>';
        return;
    }
    coursesList.innerHTML = '';
    availableCourses.forEach(course => {
        const isRegistered = userCourses.pendingCourses.some(c => c.id === course.crn) ||
                             userCourses.inProgressCourses.some(c => c.id === course.crn);
        const hasPrerequisites = !course.prerequisites || course.prerequisites.every(pr =>
            userCourses.completedCourses.some(c => c.id === pr));

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
                ${isRegistered ? 'Registered' : !hasPrerequisites ? 'Prerequisites Not Met' : 'Register'}
            </button>
        `;

        if (!isRegistered && hasPrerequisites) {
            courseCard.querySelector('.register-button').addEventListener('click', () => openRegistrationModal(course));
        }
        coursesList.appendChild(courseCard);
    });
}

async function loadUserCourses() {
    try {
        const response = await fetch(`/api/users/${currentUser.id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'getCourses' })
        });
        const data = await response.json();
        if (data.success && data.data) {
            userCourses = data.data;
            displayUserCourses('pending');
        } else throw new Error();
    } catch {
        document.getElementById('my-courses-list').innerHTML = '<p class="error">Failed to load your courses.</p>';
    }
}

function displayUserCourses(status) {
    const coursesList = document.getElementById('my-courses-list');
    const courses = userCourses[status + 'Courses'] || [];

    if (courses.length === 0) {
        coursesList.innerHTML = `<p>No ${status} courses.</p>`;
        return;
    }
    coursesList.innerHTML = '';
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <h3>${course.name} (${course.id})</h3>
            <div class="course-info">
                <p><strong>Department:</strong> ${course.department || 'N/A'}</p>
                <p><strong>Credits:</strong> ${course.creditHours || 'N/A'}</p>
                ${status === 'completed' ? `<p><strong>Grade:</strong> ${course.grade || 'N/A'}</p>` : ''}
                ${status === 'pending' ? `<p><strong>Registered:</strong> ${new Date(course.registrationDate).toLocaleDateString()}</p>` : ''}
            </div>
        `;
        coursesList.appendChild(courseCard);
    });
}

function openRegistrationModal(course) {
    selectedCourse = course;
    const modal = document.getElementById('registration-modal');
    const details = document.getElementById('course-details');
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
        const response = await fetch('/api/courses/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: currentUser.id, crn: selectedCourse.crn })
        });
        const result = await response.json();
        if (result.success) {
            await Promise.all([loadAvailableCourses(), loadUserCourses()]);
            document.querySelector('[data-tab="my-courses"]').click();
            document.querySelector('[data-status="pending"]').click();
        }
    } catch {}
    closeModal();
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
    const searchTerm = document.getElementById('course-search').value.toLowerCase();
    const departmentValue = document.getElementById('department-filter').value;
    const filteredCourses = availableCourses.filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchTerm) ||
            course.crn.toLowerCase().includes(searchTerm) ||
            (course.description && course.description.toLowerCase().includes(searchTerm));
        const matchesDepartment = !departmentValue || course.department === departmentValue;
        return matchesSearch && matchesDepartment;
    });

    const coursesList = document.getElementById('available-courses-list');
    coursesList.innerHTML = filteredCourses.length ? '' : '<p>No matching courses.</p>';
    filteredCourses.forEach(course => {
        const isRegistered = userCourses.pendingCourses.some(c => c.id === course.crn) ||
                             userCourses.inProgressCourses.some(c => c.id === course.crn);
        const hasPrerequisites = !course.prerequisites || course.prerequisites.every(pr =>
            userCourses.completedCourses.some(c => c.id === pr));
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
                ${isRegistered ? 'Registered' : !hasPrerequisites ? 'Prerequisites Not Met' : 'Register'}
            </button>
        `;
        if (!isRegistered && hasPrerequisites) {
            courseCard.querySelector('.register-button').addEventListener('click', () => openRegistrationModal(course));
        }
        coursesList.appendChild(courseCard);
    });
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '/login.html';
}

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
        populateCategoryFilter();
   


}


function populateCategoryFilter() {
    const categoryFilter = document.getElementById('category-filter');
    if (!categoryFilter) return;
    
    const categories = new Set();
    
    availableCourses.forEach(course => {
        if (course.category) {
            categories.add(course.category);
        }
    });
    
    // Clear existing options except the first one
    while (categoryFilter.options.length > 1) {
        categoryFilter.remove(1);
    }
    
    // Add sorted categories
    [...categories].sort().forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
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

    document.getElementById('category-filter').addEventListener('change', filterCourses);

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
        const isInterested = currentUser.interestedCourses?.some(id => 
            Number(id) === course.crn || id === String(course.crn)
        );
        console.log(isInterested);
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
                             onclick="toggleInterest('${course.crn}', ${!isInterested})">
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
      course.interestedInstructors?.includes(currentUser.id)
    )
    



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
                    `<button class="btn-action btn-reject" onclick="toggleInterest('${course.crn}', false)">
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
  
  assignedList.innerHTML = '<div class="loading">Loading your assigned courses...</div>';

  

  // Get all courses first
  const response = await fetch('/api/courses');
  const allCourses = await response.json();

  // Check if current user has any assigned courses
  if (!currentUser.assignedCourses || currentUser.assignedCourses.length === 0) {
    assignedList.innerHTML = '<div class="no-courses">You don\'t have any assigned courses. The administrator will assign courses based on your interests.</div>';
    return; 
  }

  
  
  // Filter to only courses assigned to this instructor
  const teachingCourses = allCourses.filter(course => 
    currentUser.assignedCourses.includes(course.crn)
  );


    // the dr does not have courses 
    if (teachingCourses.length === 0) {
      assignedList.innerHTML = '<div class="no-courses">You don\'t have any assigned courses.</div>';
      return;
  }
  
  
  
  // Continue with displaying these courses
  assignedList.innerHTML = '';
  teachingCourses.forEach(course => {
      // Rest of your existing display code
      const courseCard = document.createElement('div');
      courseCard.className = 'course-card';
      
      // Create the course header with toggle button
      const courseHeader = document.createElement('div');
      courseHeader.className = 'course-header';
      courseHeader.innerHTML = `
          <div class="course-info">
              <h3>${course.name} (${course.id})</h3>
              <p>Category: ${course.category || 'N/A'}</p>
              <p>Students: ${(course.registeredUsers?.length || course.registeredStudents?.length || 0)}/${course.totalSeats}</p>
          </div>
          <button class="toggle-students-btn" data-course-id="${course.id}">
              Show Students
          </button>
      `;
      
      // Rest of your existing code for student lists
      // ...
  });


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
      const courseCard = document.createElement('div');
      courseCard.className = 'course-card';

      // Create the course header with toggle button
      const courseHeader = document.createElement('div');
      courseHeader.className = 'course-header';
      courseHeader.innerHTML = `
          <div class="course-info">
              <h3>${course.name} (${course.id})</h3>
              <p>Category: ${course.category || 'N/A'}</p>
              <p>Students: ${course.registeredStudents?.length || 0}/${course.totalSeats}</p>
          </div>
          <button class="toggle-students-btn" data-course-id="${course.id}">
              Show Students
          </button>
      `;
      
      // Create the student list container at first at will be hidden
      const studentList = document.createElement('div');
      studentList.className = 'student-list hidden';
      studentList.id = `students-${course.id}`;

      studentList.innerHTML = '<div class="loading">Loading students...</div>';

      // Add elements to the course card
      courseCard.appendChild(courseHeader);
      courseCard.appendChild(studentList);

      // Add the course card to the list
      assignedList.appendChild(courseCard);

      // Add click event for the toggle button
      const toggleBtn = courseHeader.querySelector('.toggle-students-btn');
      toggleBtn.addEventListener('click', () => {
          const isHidden = studentList.classList.contains('hidden');
          
          if (isHidden) {
              // Show the student list
              studentList.classList.remove('hidden');
              toggleBtn.textContent = 'Hide Students';
              
              // Load the students if not already loaded
              if (studentList.innerHTML === '<div class="loading">Loading students...</div>') {
                  loadStudentsForCourse(course.id, studentList);
              }
          } else {
              // Hide the student list
              studentList.classList.add('hidden');
              toggleBtn.textContent = 'Show Students';
          }
      });
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


// Open the modal to view students and allow grade submission
async function viewStudents(courseId) {
    try {
      // Show the modal dialog
      document.getElementById('students-modal').style.display = 'block';
  
      // Get the course details
      const courseRes = await fetch(`/api/courses/${courseId}`);
      const course = await courseRes.json();
  
      // Display the course title in the modal header
      document.getElementById('course-title').textContent = `${course.name} (${course.id}) - Students`;
  
      // Fetch the list of students for the course
      const studentsRes = await fetch(`/api/courses/${courseId}/students`);
      const students = await studentsRes.json();
  
      // Get the table element where student information will be shown
      const studentTable = document.getElementById('student-grades-list');
      studentTable.innerHTML = '';
  
      // Check if the course has any students
      if (!students || students.length === 0) {
        studentTable.innerHTML = '<tr><td colspan="4">No students registered for this course.</td></tr>';
        return;
      }
  
      // Loop through the students and add each one as a table row with a grade selector
      students.forEach(student => {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name || student.email}</td>
            <td>${student.currentGrade || 'Not graded'}</td>
            <td>
                <select name="grade-${student.id}" class="grade-select">
                    <option value="">Select Grade</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>
            </td>
        `;
        studentTable.appendChild(tableRow);
      });
  
      // Attach event handler to the grade submission form
      const form = document.getElementById('grade-submission-form');
      form.onsubmit = (event) => {
        // Stop the form from reloading the page
        event.preventDefault();
        submitGrades(courseId);
      };
  
    } catch (error) {
      console.error('Error viewing students:', error);
      showNotification('Failed to load students', 'error');
    }
  }
  
  // Function to submit all selected grades to the server
  async function submitGrades(courseId) {
    
      // Find all grade select elements and prepare the grade data array
      const gradeSelects = document.querySelectorAll('.grade-select');
      const grades = [];
  
      gradeSelects.forEach(select => {
        // Only add the grade if a value was selected
        if (select.value !== '') {
          // Extract the student ID from the select element's name attribute
          const studentId = select.name.split('-')[1];
          grades.push({
            studentId: studentId,
            grade: select.value
          });
        }
      });
  
      // If no grades are selected, show an error message
      if (grades.length === 0) {
        showNotification('Please assign at least one grade', 'error');
        return;
      }
  
      // Send the grades data to the API
      const response = await fetch(`/api/courses/${courseId}/grades`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ grades: grades })
      });
  
      const result = await response.json();
  
      // Check if the API confirms a successful submission
      if (result.success) {
        showNotification('Grades submitted successfully', 'success');
        closeStudentsModal();
        displayAssignedCourses(); // Assume this function refreshes the courses view
      } else {
      showNotification(result.message || 'Failed to submit grades', 'error');
    }
  }
  
  // Function to close the students modal dialog
function closeStudentsModal() {

    document.getElementById('students-modal').style.display = 'none';
  }
  


  // Function to filter and display courses based on search input
function filterCourses() {
    
    const searchText = document.getElementById('course-name-search').value.toLowerCase();
    const categoryValue = document.getElementById('category-filter').value; // Updated ID
    
    const filteredCourses = availableCourses.filter(course => {
        const nameMatches = course.name.toLowerCase().includes(searchText);
        const categoryMatches = !categoryValue || course.category === categoryValue;
        return nameMatches && categoryMatches;
    });
    
    // Get the table element for displaying courses
    const coursesTable = document.getElementById('available-courses-list');
    coursesTable.innerHTML = '';
  
    // If there are no courses matching the search, display a message
    if (filteredCourses.length === 0) {
      coursesTable.innerHTML = '<tr><td colspan="6">No courses match your search criteria.</td></tr>';
      return;
    }
  
    // Add the rest of your existing course rendering code
    filteredCourses.forEach(course => {
      const isInterested = currentUser.interestedCourses?.includes(course.crn);
      const deadline = course.interestDeadline ? new Date(course.interestDeadline) : null;
      const deadlinePassed = deadline ? deadline < new Date() : false;
      
      // Create row element (keep your existing rendering code)
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${course.id}</td>
        <td>${course.name}</td>
        <td>${course.category || 'N/A'}</td>
        <td>${course.creditHours || 'N/A'}</td>
        <td>${deadline ? deadline.toLocaleString() : 'No deadline'}</td>
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
      coursesTable.appendChild(row);
    });

}


// Function to load students for a specific course
async function loadStudentsForCourse(courseId, container) {

      // Fetch students for this course
      const response = await fetch(`/api/courses/${courseId}/students`);
      const students = await response.json();
      
      // Clear loading message
      container.innerHTML = '';
      
      if (!students || students.length === 0) {
          container.innerHTML = '<div class="no-students">No students registered for this course.</div>';
          return;
      }
      
      // Create table to display students
      const table = document.createElement('table');
      table.className = 'students-table';
      
      // Table header
      table.innerHTML = `
          <thead>
              <tr>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Current Grade</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              ${students.map(student => `
                  <tr>
                      <td>${student.id}</td>
                      <td>${student.name || student.email}</td>
                      <td>${student.currentGrade || 'Not graded'}</td>
                      <td>
                          <button class="btn-primary btn-small" 
                                  onclick="viewStudents('${courseId}')">
                              Assign Grade
                          </button>
                      </td>
                  </tr>
              `).join('')}
          </tbody>
      `;
      
      container.appendChild(table);
      

}



// Toggle interest in a course for the instructor
async function toggleInterest(courseId, isInterested) {
    try {
        const response = await fetch(`/api/courses/${courseId}/interest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                instructorId: currentUser.id,
                interested: isInterested
            })
        });

        const result = await response.json();

        if (result.success) {
            if (!currentUser.interestedCourses) {
                currentUser.interestedCourses = [];
            }

            if (isInterested) {
                if (!currentUser.interestedCourses.includes(courseId)) {
                    currentUser.interestedCourses.push(courseId);
                }
            } else {
                // Fix: Changed crn !== crn to c !== courseId
                currentUser.interestedCourses = currentUser.interestedCourses.filter(c => c !== courseId);
            }

            showNotification(
                isInterested ? 'Interest expressed successfully' : 'Interest removed successfully',
                'success'
            );


            displayAvailableCourses();
            displayInterestedCourses();
        } else {
            showNotification(result.message || 'Failed to update interest', 'error');
        }
    } catch (error) {
        console.error('Error updating interest:', error);
        showNotification('Failed to update interest', 'error');
    }
}
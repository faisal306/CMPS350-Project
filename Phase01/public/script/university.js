

// To get the courses from the file
// async used here because I am fetching the data from external source
async function loadCourses() {
    console.log("loadCourses() is running");

    // get the courses data
    const data = await fetch("data/courses.json");
    const courses = await data.json();




    // Store courses in a global variable for filtering
    window.allCourses = courses;

    // Display courses on page load
    displayCourses(courses);

}

function displayCourses(courses) {

    // courseList will work as a container for the courses
    let courseList = document.getElementById("course-list");

    // To show only the latest version
    courseList.innerHTML = '';

    courses.forEach(course => {
        let courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        courseItem.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <p><strong>Category:</strong> ${course.category}</p>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p><strong>Schedule:</strong> ${course.schedule}</p>
            <p><strong>Available Seats:</strong> ${course.availableSeats}</p>
            <button onclick="registerSucc('${course.id}')">Register Course</button>
        `;

        // add this course to the container after you are done with adding the info of the course
        courseList.appendChild(courseItem);
    });

}

// it will get the course based on the name or catgeory
function searchCourses() {

                                                              // In case the user used upper case
    let getFilter = document.getElementById("search-bar").value.toLowerCase();

    if(!getFilter) {
        loadCourses(window.allCourses);
        return;
    }

    const filterCourses = window.allCourses.filter(course => {
                                        // check if the word is in string when searching for input or category
        return course.name.toLowerCase().includes(getFilter) || course.category.toLowerCase().includes(getFilter);
    });

    displayCourses(filterCourses);
}

function registerSucc(courseId) {
    alert(`You have registered for Course ID: ${courseId}`);
}


window.onload = loadCourses;
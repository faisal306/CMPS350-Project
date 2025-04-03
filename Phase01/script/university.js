

// To get the courses from the file
// async used here because I am fetching the data from external source
async function loadCourses() {


    // get the courses data
    const data = await fetch("../data/courses.json");
    const courses = await data.json();

    // courseList will work as a container for the courses
    let courseList = document.getElementById("course-list");
    courseList.innerHTML = '';

    courses.forEach(course => {
        let courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        courseItem.innerHTML = `

            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p><strong>Schedule:</strong> ${course.schedule}</p>
            <button onclick="registerCourse('${course.id}')">Register Course</button>
        `;

        // add this course to the container after you are done with adding the info of the course
        courseList.appendChild(courseItem);
    });

}

function searchCourses() {

                                                              // In case the user used upper case
    let getFilter = document.getElementById("search-bar").value.toLowerCase();
                                                        // To get the courses from the container
    // Because it will return an HTMLCollection it is just a special type of object
    let getCourses = document.getElementById("course-list").children;

    Array.from(getCourses).forEach(course => {
        // Because every course has an h3 inside it that have the course name
        // I used here 0 index because I do not need the whole collection
        let courseName = course.getElementsByTagName("h3")[0].innerText.toLowerCase();
        // Here I will get the input and then check if the course name contains the search term.
        // if yes course remains, if no the course is hidden 
        course.style.display = courseName.includes(getFilter) ? "block" : "none";
    })

}

function registerSucc(courseId) {
    alert(`You have registered for Course ID: ${courseId}`);
}

window.onload = loadCourses;
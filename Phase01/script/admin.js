// This file will handle the admin approval

async function approveCourse(courseId) {

    // get the courses
    const data = await fetch("data/courses.json");
    const courses = await data.json();

    

}
import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'

class CoursesRepo {
    constructor() {
        this.filePath = path.join(process.cwd(), 'app/data/courses.json');
    }

    async getCourses() {
        const courses = await fs.readJSON(this.filePath);
        return courses;
    }

    async approveCourse(params) {
        let courses = await fs.readJson(this.filePath);
        const index = courses.findIndex(course => course.crn == params.crn);
        if (index >= 0) {
            if(params.approved == "true"){
                courses[index].adminApprove = true;
            }
            else{
                courses[index].adminApprove = false;
            }
            await fs.writeJson(this.filePath, courses);
            return "Course approval updated successfully";
        }
        return "Unable to update course because it does not exist";
    }

    async disApproveCourse(params) {
        const courses = await fs.readJson(this.filePath);
        const index = courses.findIndex(course => course.crn == params.crn);
        if (index >= 0) {
            courses[index].adminApprove = false;
            await fs.writeJson(this.filePath, courses);
            return "Course approved successfully";
        }
        return "Unable to update course because it does not exist";
    }

    async getCourse(crn) {
        const courses = await fs.readJson(this.filePath);
        const course = courses.find(course => course.crn == crn);
        if (course)
            return course;
        else
            return { errorMessage: 'Course does not exit' };
    }


}

export default new CoursesRepo()
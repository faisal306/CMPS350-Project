import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'

class UsersRepo {
    constructor() {
        this.filePath = path.join(process.cwd(), 'app/data/users.json');
    }

    async getUsers() {
        const users = await fs.readJSON(this.filePath);
        return users;
    }

    async loginUser(email, pass){
        console.log(email);
        console.log(pass);
        const users = await this.getUsers();
        const index = users.findIndex(user => user.email == email && user.password == pass);
        if (index >= 0) {
            return users[index];
        }
        return false;
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

export default new UsersRepo()
'use server'

const usersRepo = require('@/app/repo/users-repo');
const coursesRepo = require('@/app/repo/courses-repo');

export async function login(email, password) {
    return await usersRepo.loginUser(email, password);
}

export async function getCourseByCrn(crn) {
    return await coursesRepo.getCourseByID(crn);
}

export async function updateCourse(data) {
    return await coursesRepo.updateCourse(data);
}

export async function createClass(data) {
    return await coursesRepo.createClass(data);
}

export async function approveCourse(params) {
    return await coursesRepo.approveCourse(params);
}

export async function disapproveCourse(params) {
    return await coursesRepo.disApproveCourse(params);
}

export async function publishCourse(crn, publish) {
    return await coursesRepo.publishCourseForInstructors(crn, publish);
}

export async function setDeadline(courseCrns, deadline) {
    return await coursesRepo.setInterestDeadline(courseCrns, deadline);
}

export async function toggleInterest(courseCrn, instructorId, interested) {
    return await coursesRepo.updateInterestedInstructors(courseCrn, instructorId, interested);
}

export async function registerStudent(userId, courseId) {
    return await usersRepo.registerCourse(userId, courseId);
}

export async function withdrawStudent(userId, courseId) {
    return await usersRepo.withdrawCourse(userId, courseId);
}

export async function updateGrades(courseCrn, gradeList) {
    return await usersRepo.updateStudentGrades(courseCrn, gradeList);
}

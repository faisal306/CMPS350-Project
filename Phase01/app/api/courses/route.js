import CoursesRepo from "@/app/repo/courses-repo";

export async function GET(request, { params }) {

    const { searchParams } = new URL(request.url);
    const approved = searchParams.get('approved');

    const courses = await CoursesRepo.getCourses({approved});
    return Response.json(courses);
    
}


export async function POST(request) { 

    const courseData = await request.json();
    const result = await CoursesRepo.createClass(courseData);
    return Response.json(result);

}


export async function POST(request, { params }) {
    
    // get the data of the course
    

        const { crn } = params;
        const { publish } = await request.json();
        const result = await CoursesRepo.publishCourseForInstructors(crn, publish);
        return Response.json(result);
    
}


export async function POST(request) {


    
        const { courses, deadline } = await request.json();
        const result = await CoursesRepo.setInterestDeadline(courses, deadline);
        return Response.json(result);
   

}
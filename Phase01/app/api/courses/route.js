import CoursesRepo from "@/app/repo/courses-repo";

export async function GET(request, { params }) {
    const { searchParams } = new URL(request.url);
    const approved = searchParams.get('approved');

    const courses = await CoursesRepo.getCourses({approved});
    return Response.json(courses);
}

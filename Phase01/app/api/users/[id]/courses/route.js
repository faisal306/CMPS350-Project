import UsersRepo from "@/app/repo/users-repo";

export async function GET(request, { params }) {
    const { id } = await params;
    const courses = await UsersRepo.getUserCourses(id);
    return Response.json(courses);
}

export async function POST(request, { params }) {
    const { id } = await params;
    const { course } = await request.json();
    //If ?type=register call regsiterCourse else call withdrawCourse
    const url = new URL(request.url);
    const type = url.searchParams.get('type');
    let result;
    if (type === 'withdraw') {
        result = await UsersRepo.withdrawCourse(id, course);
    } else if(type === 'register') {
        result = await UsersRepo.registerCourse(id, course);
    }
    if (result.errorMessage) {
        return Response.json(result, { status: 400 });
    }
    return Response.json(result);
}
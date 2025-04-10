import UsersRepo from "@/app/repo/users-repo";

export async function GET(request, { params }) {
    const { id } = await params;
    const user = await UsersRepo.getUser(id);
    return Response.json(user);
}

export async function POST(request, { params }) {
    const { id } = await params;
    const courses = await UsersRepo.getUserCourses(id);
    return Response.json(courses);
}


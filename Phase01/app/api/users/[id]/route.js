import UsersRepo from "@/app/repo/users-repo";

export async function GET(request, { params }) {
    const { id } = await params;
    const user = await UsersRepo.getUser(id);
    return Response.json(user);
}


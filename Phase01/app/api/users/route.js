import UsersRepo from "@/app/repo/users-repo";

export async function POST(request) {
    const { email, password } = await request.json();

    const success = await UsersRepo.loginUser(email, password);
    return Response.json(success);
}

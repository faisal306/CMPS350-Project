import CoursesRepo from "@/app/repo/courses-repo";

export async function GET(request, { params }) {
    const { crn } = await params;
    const { searchParams } = new URL(request.url);
    const approved = await searchParams.get("approved");
    const approval = await CoursesRepo.approveCourse({crn, approved});
    return Response.json(approval);
}
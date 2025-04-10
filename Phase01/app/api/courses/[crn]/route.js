import CoursesRepo from "@/app/repo/courses-repo";

export async function GET(request, { params }) {
    const { crn } = await params;
    const { searchParams } = new URL(request.url);
    const approved = await searchParams.get("approved");
    const approval = await CoursesRepo.approveCourse({crn, approved});
    return Response.json(approval);
}

export async function POST(request, { params }) { //api/courses/[crn]
    try {
        const { studentId, crn } = await request.json();
        console.log(studentId, crn);
        const registration = await CoursesRepo.registerClass(studentId, crn);
        return Response.json(registration);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { studentId } = await request.json();
        const { crn } = params;
        const result = await CoursesRepo.unregisterClass(studentId, crn);
        return Response.json(result);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }
}
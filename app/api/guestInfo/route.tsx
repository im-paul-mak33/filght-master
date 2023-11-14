import { authOptions } from "@/services/Auth/authOption";
import prisma from "@/services/Prisma/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    if (session?.user.role !== "admin" && session?.user.role !== "sales") {
        return new NextResponse("user not authorized", { status: 404 });
    }

    try {
        const guest = await prisma.guestInfo.findMany()
        return NextResponse.json(guest);

    } catch (error) {
        console.log(error);
        return new NextResponse(`error  ${error}`, { status: 404 })

    }
}


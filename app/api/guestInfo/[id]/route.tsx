import prisma from "@/services/Prisma/prismadb"
import { NextResponse } from "next/server";

export async function GET(request: Request,{ params }: { params: {id:string} }) {
    try {
       const guest = await prisma.guestInfo.findUnique({
        where:{
            guestId:params.id
        }
       })
        return NextResponse.json(guest, { status: 200 });
    } catch (error) {
        console.log(error, "Register error");
        return new NextResponse("internal error", { status: 400 });
    }
}
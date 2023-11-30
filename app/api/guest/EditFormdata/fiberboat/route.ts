import prisma from "@/services/Prisma/prismadb"
import { NextResponse } from "next/server";

export async function PUT(request: Request,{ params }: { params: {id:string} }) {
    try {
        const requestBody = await request.json(); 
        const {
            time    ,
            arrival  ,
            stay     ,
            service  ,
            boattype ,
        } =requestBody;
       const guest = await prisma.fiberboat.update({
        where:{
            guestId:params.id
        },
        data:{
            time    ,
            arrival  ,
            stay     ,
            service  ,
            boattype ,
        }
       })
       if (!guest) {
        return new NextResponse("Itinerary not found", { status: 404 });
    }
    return NextResponse.json(guest, { status: 200 });
    } catch (error) {
        console.log(error, "Register error");
        return new NextResponse("internal error", { status: 400 });
    }
}
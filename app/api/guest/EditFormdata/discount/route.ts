import prisma from "@/services/Prisma/prismadb"
import { NextResponse } from "next/server";

export async function PUT(request: Request,{ params }: { params: {id:string} }) {
    try {
        const requestBody = await request.json(); 
        const {
            Activies     ,
            time          ,
            date          ,
            complimentary ,
            remark        ,
            vehical_type  ,
            service       ,
            amount        ,
            pax           ,
        } =requestBody;
       const guest = await prisma.discount.update({
        where:{
            guestId:params.id
        },
        data:{
            Activies     ,
            time          ,
            date          ,
            complimentary ,
            remark        ,
            vehical_type  ,
            service       ,
            amount        ,
            pax           ,
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
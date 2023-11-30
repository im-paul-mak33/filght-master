import prisma from "@/services/Prisma/prismadb"
import { NextResponse } from "next/server";

export async function PUT(request: Request,{ params }: { params: {id:string} }) {
    try {
        const requestBody = await request.json(); 
        const {
            place       ,
            hotel        ,
            choosedhotel ,
            roomType     ,
            plan         ,
            rooms        ,
            Ex_ADL       ,
            CWB          ,
            CWOB         ,
            comp_Child   ,
            checkIn      ,
            checkOut     ,
            guestChoice  ,
        } =requestBody;
       const guest = await prisma.roomBooking.update({
        where:{
            guestId:params.id
        },
        data:{
            place       ,
            hotel        ,
            choosedhotel ,
            roomType     ,
            plan         ,
            rooms        ,
            Ex_ADL       ,
            CWB          ,
            CWOB         ,
            comp_Child   ,
            checkIn      ,
            checkOut     ,
            guestChoice  ,
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
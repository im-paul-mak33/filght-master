
import { authOptions } from "@/services/Auth/authOption";
import prisma from "@/services/Prisma/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
interface IParams {
    id?: string
}

export async function DELETE(request: Request, { params }: { params: IParams }) {
    try {
        const session = await getServerSession(authOptions);
        if (session?.user.role !== "admin" && session?.user.role !== "sales") {
            return new NextResponse("user is not authorized", { status: 404 })
        }

        await prisma.guestInfo.deleteMany({ where: { guestId: params.id } });
        await prisma.itinerary.deleteMany({ where: { guestId: params.id } });
        await prisma.roomBooking.deleteMany({ where: { guestId: params.id } });
        await prisma.cruise.deleteMany({ where: { guestId: params.id } });
        await prisma.vehical.deleteMany({ where: { guestId: params.id } });
        await prisma.flight.deleteMany({ where: { guestId: params.id } });
        await prisma.fiberboat.deleteMany({ where: { guestId: params.id } });
        await prisma.discount.deleteMany({ where: { guestId: params.id } });

        const deleteUser = await prisma.guest.deleteMany({
            where: {
                id: params.id
            }
        })


        return NextResponse.json(deleteUser, { status: 200 })

    } catch (error: any) {
        console.log(error);
        return new NextResponse("internal error", { status: 500 })

    }
}



export async function GET(request: Request, { params }: { params: IParams }) {
    const session = await getServerSession(authOptions);
    // if (session?.user.role !== "admin" && session?.user.role !== "sales") {
    //     return new NextResponse("user not authorized", { status: 404 });
    // }

    try {
        const guest = await prisma.guest.findUnique({
            where: {
                id: params.id
            },
            include: {
                guestInfo: true,
                itinerary: true,
                roomBooking: true,
                cruise: true,
                discount: true,
                vehical: true,
                flight: true,
                fiberboat: true,
              },
        })

        return NextResponse.json(guest);

    } catch (error) {
        console.log(error);
        return new NextResponse(`error  ${error}`, { status: 404 })

    }
}


export async function PUT(request: Request, { params }: { params: IParams }) {
    const session = await getServerSession(authOptions);
    // if (session?.user.role !== "admin" && session?.user.role !== "sales") {
    //     return new NextResponse("user not authorized", { status: 404 });
    // }

    try {
        const requestBody = await request.json(); // Parse the request body as JSON

        // Ensure the required fields 'name' and 'points' exist in the request body
        const { name, points , filledDate , bookedDate } = requestBody;
        if (!name || !points) {
          return new NextResponse('Invalid request body', { status: 400 });
        }

        // Update the Guest record
        // const updatedGuest = await prisma.guest.update({
        //   where: {
        //     id: params.id,
        //   },
        //   data: {
        //     name,
        //     points: parseFloat(points),
        //   },
        //   include: {
        //     guestInfo: true, // Include associated GuestInfo records
        //     itinerary: true, // Include
        //   },
        // });

        const updatedGuest = await prisma.guest.update({
            where: {
              id: params.id,
            },
            data: {
              name,
              points: parseFloat(points),
              filledDate: new Date(filledDate),
              bookedDate: new Date(bookedDate),
              guestInfo: {
                deleteMany: {}, // Delete associated GuestInfo records
              },
              itinerary: {
                deleteMany: {}, // Delete associated Itinerary records
              },
              roomBooking:{
                deleteMany:{}
              },
              cruise:{
                deleteMany:{}
              },
              discount:{
              deleteMany:{}  
              },
              vehical:{
                deleteMany:{}
              },
              flight:{
                deleteMany:{}
              },
              fiberboat:{
                deleteMany:{}
              }
            },
            include: {
              guestInfo: true, // Include associated GuestInfo records in the response
              itinerary: true, // Include associated Itinerary records in the response
            },
          });
        return NextResponse.json({
            updatedGuest,
          });
    } catch (error) {
        console.log(error);
        return new NextResponse(`Error: ${error}`, { status: 404 });
    }

}


  

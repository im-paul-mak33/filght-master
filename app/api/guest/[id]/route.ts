
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
    if (session?.user.role !== "admin" && session?.user.role !== "sales") {
        return new NextResponse("user not authorized", { status: 404 });
    }

    try {
        const guest = await prisma.guest.findUnique({
            where: {
                id: params.id
            }
        })

        return NextResponse.json(guest);

    } catch (error) {
        console.log(error);
        return new NextResponse(`error  ${error}`, { status: 404 })

    }
}


// export  async function GET(
//     req: NextApiRequest,
//     res: NextApiResponse
//   ) {
//     if (req.method !== 'GET') {
//       return res.status(405).json({ message: 'Method Not Allowed' });
//     }
  
//     const { id } = req.query;
  
//     try {
//       const guestInfo = await prisma.guestInfo.findUnique({
//         where: {
//           id: id as string,
//         },
//       });
  
//       if (!guestInfo) {
//         return res.status(404).json({ message: 'Guest not found' });
//       }
  
//       res.status(200).json(guestInfo);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     } finally {
//       await prisma.$disconnect();
//     }
//   }  
"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React, { FC, useEffect, useState } from 'react'
import { IParams } from "../../page";
import DeskNav from '@/components/Custom/Navbar/DeskNav';
type ItenaryInputProps = {
    paramsid: string;
  };

  interface Guest {
    id: string;
    name: string;
    points: number;
    filledDate: string;
    bookedDate: string;
    createdAt: string;
    updatedAt: string;
  }
  
  interface Booking {
    id: string;
    place: string;
    hotel: string[];
    choosedhotel: string;
    roomType: string;
    plan: string;
    rooms: string;
    Ex_ADL: string;
    CWB: string;
    CWOB: string;
    comp_Child: string;
    checkIn: string;
    checkOut: string;
    guestChoice: string;
    guestId: string;
    guest: Guest;
  }
 const RoomBooking= ( { params }: { params: IParams }) => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
      const fetchGuestInfo = async () => {
        try {
          // Fetch data from your Next.js API endpoint based on the provided reservationid
          const response = await fetch(`/api/Forms/RoomBooking/${params.salesid}`);
          if (response.ok) {
            const data = await response.json();
            // Set the fetched data to the state
        
              setApiData(data);
          
          } else {
            throw new Error('Failed to fetch data');
          }
        } catch (error) {
          // Handle errors if any
          console.error('Error fetching data:', error);
        }
      };
  
      fetchGuestInfo();
    }, [params.salesid]); // Re-run effect when reservationid changes
    console.log(apiData);
    
  return (
    <div className='mb-6'>
      <DeskNav/>
    <div className='flex items-center justify-center mt-8 mb-2'>
      Reviewed You'r Room Booking Data
    </div>
  <div className="rounded-md border">
  <Table>
    <TableHeader>
        <TableRow>
      <TableHead>
      place
      </TableHead>
      <TableHead>
      hotel
      </TableHead>
      <TableHead>
      choosedhotel
      </TableHead>
      <TableHead>
      roomType
      </TableHead>
      <TableHead>
      plan
      </TableHead>
      <TableHead>
      rooms
      </TableHead>
      <TableHead>
      Ex_ADL
      </TableHead>
      <TableHead>
      CWB
      </TableHead>
      <TableHead>
      CWOB
      </TableHead>
      <TableHead>
      comp_Child
      </TableHead>
      <TableHead>
      checkIn
      </TableHead>
      <TableHead>
      checkOut
      </TableHead>
      <TableHead>
      guestChoice
      </TableHead>
        </TableRow>
    </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
            {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.place}</div>
                      }</div>
                  ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.hotel} */}
              {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.hotel}</div>
                      }</div>
                  ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.choosedhotel} */}
              {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.choosedhotel}</div>
                      }</div>
                  ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.roomType} */}
              {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.roomType}</div>
                      }</div>
                  ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.plan} */}
              {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.plan}</div>
                      }</div>
                  ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.rooms} */}
              {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.rooms}</div>
                      }</div>
                  ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.Ex_ADL} */}
              {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.Ex_ADL}</div>
                      }</div>
                  ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.CWB} */}
              {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.CWB}</div>
                      }</div>
                  ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.CWOB} */}
              {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.CWOB}</div>
                      }</div>
                  ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.comp_Child} */}
              {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.comp_Child}</div>
                      }</div>
                  ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.checkIn} */}
              {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.checkIn}</div>
                      }</div>
                  ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.checkOut} */}
              {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.checkOut}</div>
                      }</div>
                  ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.guestChoice} */}
              {apiData.map((el:any,i)=>(
                    <div>{
                      el.guestId===params.salesid && <div>{el.guestChoice}</div>
                      }</div>
                  ))}
            </TableCell>
          </TableRow>
        </TableBody>
  </Table>
</div>
  </div>
  )
}

export default RoomBooking
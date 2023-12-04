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
  
  interface CruiseBooking {
    id: string;
    time: string;
    route: string;
    cruise: string;
    journeyDate: string;
    seat_class: string;
    PNR: string;
    guestId: string;
    guest: Guest;
  }
  
const Cruise  = ( { params }: { params: IParams }) => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
      const fetchGuestInfo = async () => {
        try {
          // Fetch data from your Next.js API endpoint based on the provided reservationid
          const response = await fetch(`/api/Forms/Cruise/${params.salesid}`);
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
      Reviewed You'r Cruise Data
    </div>
  <div className="rounded-md border">
  <Table>
    <TableHeader>
        <TableRow>
      <TableHead>
      time
      </TableHead>
      <TableHead>
      route
      </TableHead>
      <TableHead>
      cruise
      </TableHead>
      <TableHead>
      journeyDate
      </TableHead>
      <TableHead>
      seat_class
      </TableHead>
      <TableHead>
      PNR
      </TableHead>
        </TableRow>
    </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              {apiData.map((el:any,i)=>(
                <div>
                 <TableCell>
                  {el.time}
                 </TableCell>
                  </div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.route} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>

                  {el.route}
                  </TableCell>
                  </div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.cruise} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>

                  {el.cruise}
                  </TableCell>
                  </div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.journeyDate} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>

                  {el.journeyDate}
                  </TableCell>
                  </div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.seat_class} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.seat_class}
                  </TableCell>
                  </div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.PNR} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>

                  {el.PNR}
                  </TableCell>
                  </div>
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
  </Table>
</div>
  </div>
  )
}

export default Cruise
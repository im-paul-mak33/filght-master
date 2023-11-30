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
  
  interface BoatBooking {
    id: string;
    time: string;
    arrival: string;
    stay: string;
    service: string;
    boattype: string;
    guestId: string;
    guest: Guest;
  }
  
const FiberBoat  = ( { params }: { params: IParams })=> {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
      const fetchGuestInfo = async () => {
        try {
          // Fetch data from your Next.js API endpoint based on the provided reservationid
          const response = await fetch(`/api/Forms/FiberBoat/${params.salesid}`);
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
      Reviewed You're Fiber Boat Data
    </div>
  <div className="rounded-md border">
  <Table>
    <TableHeader>
        <TableRow>
      <TableHead>
      time
      </TableHead>
      <TableHead>
      arrival
      </TableHead>
      <TableHead>
        Stay
      </TableHead>
      <TableHead>
      service
      </TableHead>
      <TableHead>
      boattype
      </TableHead>
        </TableRow>
    </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              {/* {apiData?.time} */}
              {apiData.map((el:any,i)=>(
                <div>{el.time}</div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.arrival}/ */}
              {apiData.map((el:any,i)=>(
                <div>{el.arrival}</div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.stay} */}
              {apiData.map((el:any,i)=>(
                <div>{el.stay}</div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.service} */}
              {apiData.map((el:any,i)=>(
                <div>{el.service}</div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.boattype} */}
              {apiData.map((el:any,i)=>(
                <div>{el.boattype}</div>
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
  </Table>
</div>
  </div>
  )
}

export default FiberBoat
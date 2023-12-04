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
  
  interface FlightBooking {
    id: string;
    time: string;
    arrival: string;
    flightno: string;
    deptcity: string;
    arrivalcity: string;
    PNR: string;
    guestId: string;
    guest: Guest;
  }
  

const Flight= ( { params }: { params: IParams }) => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
      const fetchGuestInfo = async () => {
        try {
          // Fetch data from your Next.js API endpoint based on the provided reservationid
          const response = await fetch(`/api/Forms/Flight/${params.salesid}`);
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
  return (
    <div className='mb-6'>
      <DeskNav/>
    <div className='flex items-center justify-center mt-8 mb-2'>
      Reviewed You'r Flight Data
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
      flightno
      </TableHead>
      <TableHead>
      deptcity
      </TableHead>
      <TableHead>
      arrivalcity
      </TableHead>
      <TableHead>
      PNR
      </TableHead>
        </TableRow>
    </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              {/* {apiData?.time} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>

                  {el.time}
                  </TableCell>
                  </div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.arrival} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.arrival}
                  </TableCell>
                  </div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.flightno} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.flightno}
                  </TableCell>
                  </div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.deptcity} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.deptcity}
                  </TableCell>
                  </div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.arrivalcity} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.arrivalcity}
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

export default Flight
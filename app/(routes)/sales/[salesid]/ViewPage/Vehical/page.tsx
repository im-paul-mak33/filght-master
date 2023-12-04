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
  
  interface Transportation {
    id: string;
    place: string;
    service: string;
    ac_nonac: string;
    vehical_type: string;
    guestId: string;
    guest: Guest;
  }
  
const Vehicle= ( { params }: { params: IParams }) => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
      const fetchGuestInfo = async () => {
        try {
          // Fetch data from your Next.js API endpoint based on the provided reservationid
          const response = await fetch(`/api/Forms/Vehicle/${params.salesid}`);
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
      Reviewed You'r Vehicle Data
    </div>
  <div className="rounded-md border">
  <Table>
    <TableHeader>
        <TableRow>
      <TableHead>
        Place
      </TableHead>
      <TableHead>
      service
      </TableHead>
      <TableHead>
      ac_nonac
      </TableHead>
      <TableHead>
      vehical_type
      </TableHead>
        </TableRow>
    </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              {/* {apiData?.place} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.place}
                  </TableCell>
                  </div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.service} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.service}
                  </TableCell>
                  </div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.ac_nonac} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>

                  {el.ac_nonac}
                  </TableCell>
                  </div>
              ))}
            </TableCell>
            <TableCell>
              {/* {apiData?.vehical_type} */}
              {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>

                  {el.vehical_type}
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

export default Vehicle
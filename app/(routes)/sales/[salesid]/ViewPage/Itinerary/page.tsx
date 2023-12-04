"use client"
import { TableHeader, Table, TableHead, TableRow, TableBody, TableCell } from '@/components/ui/table';
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
  
  interface Stay {
    id: string;
    date: string;
    day: string;
    stay: string;
    activity: any[]; // You might want to replace 'any[]' with a more specific type if possible
    guestId: string;
    guest: Guest;
  }
  
 const Itinerary = ( { params }: { params: IParams }) => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
      const fetchGuestInfo = async () => {
        try {
          // Fetch data from your Next.js API endpoint based on the provided reservationid
          const response = await fetch(`/api/Forms/Itinerary/${params.salesid}`);
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
    <div className='mb-6 '>
      <DeskNav/>
        <div className='flex items-center justify-center mt-8 mb-2'>
          Reviewed You'r Itinerary Data
        </div>
      <div className="rounded-md border">
      <Table>
        <TableHeader>
            <TableRow>
          <TableHead>
            Date
          </TableHead>
          <TableHead>
            Day
          </TableHead>
          <TableHead>
            Stay
          </TableHead>
          <TableHead>
            Activity
          </TableHead>
            </TableRow>
        </TableHeader>

            <TableBody >
              
              <TableRow >
                <TableCell >
                  {apiData.map((el:any,i)=>(
                    <div>
                      <TableCell >
                      {
                        el.guestId===params.salesid && <div>{el.date}</div>
                      }
                      </TableCell>
                      </div>
                  ))}
                </TableCell>
                <TableCell>
                  {/* {apiData?.day} */}
                  {apiData.map((el:any,i)=>(
                    <div>
                      <TableCell >

                      {
                        el.guestId===params.salesid && <div>{el.day}</div>
                      }
                      </TableCell>
                      </div>
                  ))}
                </TableCell>
                <TableCell>
                  {/* {apiData?.stay} */}
                  {apiData.map((el:any,i)=>(
                    <div>
                      <TableCell >
                      {
                        el.guestId===params.salesid && <div>{el.stay}</div>
                      }
                      </TableCell>
                      
                      </div>
                  ))}
                </TableCell>
                <TableCell>
                  {/* {apiData?.activity} */}
                  {apiData.map((el:any,i)=>(
                    <div>
                      <TableCell >
                      {
                        el.guestId===params.salesid && <div>{el.activity}</div>
                      }
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

export default Itinerary;

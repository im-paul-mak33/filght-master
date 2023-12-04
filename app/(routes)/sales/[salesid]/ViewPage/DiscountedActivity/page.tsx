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
  
  interface ActivityBooking {
    id: string;
    Activies: string;
    time: string;
    date: string;
    complimentary: boolean;
    remark: string;
    vehical_type: string;
    service: boolean;
    amount: string;
    pax: string;
    guestId: string;
    guest: Guest;
  }
  
const Discount = ( { params }: { params: IParams })  => {
    const [apiData, setApiData] = useState<ActivityBooking[]>([]);

    useEffect(() => {
      const fetchGuestInfo = async () => {
        try {
          // Fetch data from your Next.js API endpoint based on the provided reservationid
          const response = await fetch(`/api/Forms/Complimentary/${params.salesid}`);
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
          Reviewed You'r Discount Data
        </div>
      <div className="rounded-md border">
      <Table>
        <TableHeader>
            <TableRow>
          <TableHead>
          Activies
          </TableHead>
          <TableHead>
          time
          </TableHead>
          <TableHead>
          date
          </TableHead>
          <TableHead>
          complimentary
          </TableHead>
          <TableHead>
          remark
          </TableHead>
          <TableHead>
          vehical_type
          </TableHead>
          <TableHead>
          service
          </TableHead>
          <TableHead>
          amount
          </TableHead>
          <TableHead>
          pax
          </TableHead>
            </TableRow>
        </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>
                  {/* {apiData?.Activies} */}
                  {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.Activies}
                  </TableCell>
                  </div>
              ))}
                </TableCell>
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
                  {/* {apiData?.date} */}
                  {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.date}
                  </TableCell>
                  </div>
              ))}
                </TableCell>
                <TableCell>
                  {/* {apiData?.complimentary} */}
                  {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.complimentary.toString()}
                  </TableCell>
                  </div>
              ))}
                </TableCell>
                <TableCell>
                  {/* {apiData?.remark} */}
                  {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.remark}
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
                <TableCell>
                  {/* {apiData?.service} */}
                  {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.service.toString()}
                  </TableCell>
                  </div>
              ))}
                </TableCell>
                <TableCell>
                  {/* {apiData?.amount} */}
                  {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.amount}
                  </TableCell>
                  </div>
              ))}
                </TableCell>
                <TableCell>
                  {/* {apiData?.pax} */}
                  {apiData.map((el:any,i)=>(
                <div>
                  <TableCell>
                  {el.pax}
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

export default Discount
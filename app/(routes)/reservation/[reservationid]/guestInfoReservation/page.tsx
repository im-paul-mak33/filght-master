"use client"
import DeskNav from "@/components/Custom/Navbar/DeskNav";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SalesForm from "../components/Form1/SalesForm";
import { IParams } from "../page";
import GuestInfo from "../components/previewData/GuestInfo";

interface ReservationData {
  Channel: string;
  adult: number;
  adult12: number;
  assignedTo: string;
  category: string;
  ch35: number;
  ch512: number;
  contact: string;
  dateOfArrival: string;
  dateOfDeparture: string;
  email: string;
  guestId: string;
  guestType: string;
  id: string;
  infant: number;
  service: string;
  timeOfArrival: string;
  timeOfDeparture: string;
  total: number;
  vip: string;
  // Add any other fields that exist in your object
}

const page = ({ params }: { params: IParams }) => {

  const [apiData, setApiData] = useState<ReservationData | null>(null);

  useEffect(() => {
    const fetchGuestInfo = async () => {
      try {
        // Fetch data from your Next.js API endpoint based on the provided reservationid
        const response = await fetch(`/api/guestInfo/${params.reservationid}`);
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
  }, [params.reservationid]); // Re-run effect when reservationid changes

  
  return (
    <>
      <DeskNav />
      <div className=" bg-sky-100 py-4">
        <div className="flex gap-4 px-8 items-center">
          <Link href={`/reservation/${params.reservationid}`}>
            <ArrowLeftCircle className="h-5 cursor-pointer hover:translate-x-[-5px] hover:text-sky-400 transition-all" />
          </Link>
          <h1 className="text-lg  font-semibold"> Basic Guest Info</h1>
        </div>
      </div>
      <div className="px-8 py-2 bg-gray-50">
        <SalesForm id={params.reservationid} />
        <div>
          {apiData?.Channel}
        </div>
      </div>
    </>
  );
};

export default page;

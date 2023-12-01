"use client"
import React, { FC,useEffect,useState } from 'react'

type ItenaryInputProps = {
  id: string;
}

interface DataItem {
  id: number;
  time:string,
  flightno:string;
  deptcity:string;
  arrival:string;
  arrivalcity:string;
  PNR:string;
}
const FlightForm:FC<ItenaryInputProps> = ({id}) => {
  const [recordInput, setRecordInput] = useState([])
//   console.log(paramsid);

  const [apiData, setApiData] = useState<DataItem[]>([]);
  console.log(apiData);

  console.log(id);
  

  useEffect(() => {
    const fetchGuestInfo = async () => {
      try {
        // Fetch data from your Next.js API endpoint based on the provided reservationid
        const response = await fetch(`/api/Forms/Flight/${id}`);
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
  }, [id]); // Re-run effect when reservationid changes



  const updateData = async () => {
    try {
      const response = await fetch(`/api/guest/EditFormdata/flight/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
  
      const result = await response.json();
      console.log('Data updated successfully:', result);
      // Handle success
    } catch (error) {
      console.error('Error while updating data:', error);
      // Handle error
    }
  }

  const handleInputVehicleTimeChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, time: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputArrivalChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, arrival: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputFlightnoChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, flightno: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputdeptcityChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, deptcity: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputarrivalcityChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, arrivalcity: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputPNRChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, PNR: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };


  
  return (
    <div>
     {
      apiData?.map((el:any,i)=>(
        <>
        <div>{el.date}</div>
        <input type='text' value={el.time} onChange={(event)=>handleInputVehicleTimeChange(el.id,event)}/>
        <input type='text' value={el.arrival} onChange={(event)=>handleInputArrivalChange(el.id,event)} />
        <input type='text' value={el.flightno}  onChange={(event)=>handleInputFlightnoChange(el.id,event)}/>
        <input type='text' value={el.deptcity}  onChange={(event)=>handleInputdeptcityChange(el.id,event)} />
        <input type='text' value={el.arrivalcity}  onChange={(event)=>handleInputarrivalcityChange(el.id,event)} />
        <input type='text' value={el.PNR}  onChange={(event)=>handleInputPNRChange(el.id,event)} />
        </>
      ))
     }
     <button onClick={updateData}>click To update</button>
    </div>
  )
}

export default FlightForm
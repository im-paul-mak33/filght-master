"use client"
import React, { FC,useEffect,useState } from 'react'
type ItenaryInputProps = {
  id: string;
}

interface DataItem {
  id: number;
  time:string,
  arrival:string;
  stay:string;
  service:string;
  boattype:string;
}
const FiberBoatForm:FC<ItenaryInputProps> = ({id}) => {
  const [recordInput, setRecordInput] = useState([])
//   console.log(paramsid);

  const [apiData, setApiData] = useState<DataItem[]>([]);
  console.log(apiData);
  

  useEffect(() => {
    const fetchGuestInfo = async () => {
      try {
        // Fetch data from your Next.js API endpoint based on the provided reservationid
        const response = await fetch(`/api/Forms/FiberBoat/${id}`);
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
      const response = await fetch(`/api/guest/EditFormdata/fiberboat/${id}`, {
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

  const handleInputPNRChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, PNR: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };



  const handleInputTimeChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
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

  const handleInputStayChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, stay: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputServiceChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, service: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputBoattypeChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, boattype: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };


  
  return (
    <div className='space-y-4 p-3'>
         <div className='flex items-center justify-center'>Edit the FiberBoat Data</div>
     {
      apiData?.map((el:any,i)=>(
        <div className='flex flex-wrap space-x-6 space-y-2 border border-black p-4 rounded-xl'>
        <hr />
        {/* <div>{el.date}</div> */}
        <label className='w-48'>Enter time</label> <br />
        <input type='text' className='border w-48 border-black px-1 py-2 rounded-xl' value={el.time}  onChange={(event)=>handleInputTimeChange(el.id,event)}/>
        <label className='w-48'>Enter arrival</label> <br />
        <input type='text' className='border w-48 border-black px-1 py-2 rounded-xl' value={el.arrival} onChange={(event)=>handleInputArrivalChange(el.id,event)} />
        <label className='w-48'>Enter stay</label> <br />
        <input type='text'className='border w-48 border-black px-1 py-2 rounded-xl' value={el.stay} onChange={(event)=>handleInputStayChange(el.id,event)}/>
        <label className='w-48'>Enter service</label> <br />
        <input type='text' className='border w-48 border-black px-1 py-2 rounded-xl' value={el.service} onChange={(event)=>handleInputServiceChange(el.id,event)} />
        <label className='w-48'>Enter boattype</label> <br />
        <input type='text' className='border w-48 border-black px-1 py-2 rounded-xl' value={el.boattype} onChange={(event)=>handleInputBoattypeChange(el.id,event)} />
        {/* <input type='text' value={el.PNR}  onChange={(event)=>handleInputPNRChange(el.id,event)} /> */}
        </div>
      ))
     }
     <button  className='bg-blue-400 px-1 py-2 rounded-xl' onClick={updateData}>click To update</button>
    </div>
  )
}

export default FiberBoatForm
"use client"
import React, { FC,useEffect,useState } from 'react'

type ItenaryInputProps = {
  id: string;
}

interface DataItem {
  id: number;
  place:string,
  service:string;
  ac_nonac:string;
  vehical_type:string;
}
const VehicalForm:FC<ItenaryInputProps> = ({id}) => {
  const [recordInput, setRecordInput] = useState([])
//   console.log(paramsid);

  const [apiData, setApiData] = useState<DataItem[]>([]);
  console.log(apiData);

  console.log(id);
  

  useEffect(() => {
    const fetchGuestInfo = async () => {
      try {
        // Fetch data from your Next.js API endpoint based on the provided reservationid
        const response = await fetch(`/api/Forms/Vehicle/${id}`);
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
      const response = await fetch(`/api/guest/EditFormdata/vehical/${id}`, {
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

  const handleInputVehicleTypeChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, vehical_type: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputPlaceChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, place: event.target.value };
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

  const handleInputAcNoACChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, ac_nonac: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };


  
  return (
    <div className='space-y-4 p-3'>
       <div className='flex items-center justify-center'>Edit the Vehicle Data</div>
     {
      apiData?.map((el:any,i)=>(
        <div className='flex flex-wrap space-x-10 space-y-2 border border-black p-4 rounded-xl'>
        <hr />
        <label className='w-48'>Enter place</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.place} onChange={(event)=>handleInputPlaceChange(el.id,event)}/>
        <label className='w-48'>Enter Service</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.service} onChange={(event)=>handleInputServiceChange(el.id,event)} />
        <label className='w-48'>Enter ac_nonac</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.ac_nonac}  onChange={(event)=>handleInputAcNoACChange(el.id,event)}/>
        <label className='w-48'>Enter vehical_type</label> <br />
        <input  className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.vehical_type}  onChange={(event)=>handleInputVehicleTypeChange(el.id,event)} />
        </div>
      ))
     }
     <button  className='bg-blue-400 px-1 py-2 rounded-xl' onClick={updateData}>click To update</button>
    </div>
  )
}

export default VehicalForm
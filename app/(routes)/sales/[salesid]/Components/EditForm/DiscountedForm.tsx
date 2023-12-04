"use client"
import React, { FC,useEffect,useState } from 'react'
type ItenaryInputProps = {
  id: string;
}

interface DataItem {
  id: number;
  Activies:string,
  time:string;
  date:string;
  complimentary:boolean;
  remark:string;
  vehical_type:string;
  service:boolean;
  amount:string;
  pax:string
}
const DiscountedForm:FC<ItenaryInputProps> = ({id}) => {
  const [recordInput, setRecordInput] = useState([])
//   console.log(paramsid);

  const [apiData, setApiData] = useState<DataItem[]>([]);
  console.log(apiData);
  

  useEffect(() => {
    const fetchGuestInfo = async () => {
      try {
        // Fetch data from your Next.js API endpoint based on the provided reservationid
        const response = await fetch(`/api/Forms/Complimentary/${id}`);
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
      const response = await fetch(`/api/guest/EditFormdata/discount/${id}`, {
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

  const handleInputActivitiesChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, Activies: event.target.value };
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

  const handleInputDateChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, date: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputComplimentaryChange = (id:number, event:React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const parsedValue = value === 'true';
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, complimentary: parsedValue};
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputRemarkChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, remark: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputVehicleTypeChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, vehical_type: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputServiceChange = (id:number, event:React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const parsedValue = value === 'true';
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, service: parsedValue};
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputAmountChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, amount: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputPaxChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, pax: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };


  
  return (
    <div className='space-y-4 p-3'>
         <div className='flex items-center justify-center'>Edit the DiscountedForm Data</div>
     {
      apiData?.map((el:any,i)=>(
        <div className='flex flex-wrap space-x-8 space-y-2 border border-black p-4 rounded-xl'>
        <hr />
        <label className='w-48'> Date</label> <br />
        <div className='w-48'>{el.date}</div>
        <label className='w-48'>Enter Activity</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.Activies}  onChange={(event)=>handleInputActivitiesChange(el.id,event)}/>
        <label className='w-48'>Enter time</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.time} onChange={(event)=>handleInputTimeChange(el.id,event)} />
        <label className='w-48'>Enter date</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.date} onChange={(event)=>handleInputDateChange(el.id,event)}/>
   
        {/* <input type='text' value={el.complimentary} onChange={(event)=>handleInputComplimentaryChange(el.id,event)} /> */}
        <label className='w-48'>Enter Complimentary</label> <br />
        <select  className='border w-48 border-black px-1 py-2 rounded-xl' value={el.complimentary.toString()} onChange={(event)=>handleInputComplimentaryChange(el.id,event)} >
        <option value="true">True</option>
              <option value="false">False</option>
        </select>
        <label className='w-48'>Enter remark</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.remark} onChange={(event)=>handleInputRemarkChange(el.id,event)} />
        <label className='w-48'>Enter Vehical Type</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.vehical_type} onChange={(event)=>handleInputVehicleTypeChange(el.id,event)} />
        <label className='w-48'>Enter Service</label> <br />
        <select className='border w-48 border-black px-1 py-2 rounded-xl'  value={el.service.toString()} onChange={(event)=>handleInputServiceChange(el.id,event)} >
        <option value="true">True</option>
              <option value="false">False</option>
        </select>
        <label className='w-48'>Enter amount</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.amount} onChange={(event)=>handleInputAmountChange(el.id,event)} />
        <label className='w-48'>Enter Pax</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.pax} onChange={(event)=>handleInputPaxChange(el.id,event)} />
        {/* <input type='text' value={el.PNR}  onChange={(event)=>handleInputPNRChange(el.id,event)} /> */}
        </div>
      ))
     }
     <button  className='bg-blue-400 px-1 py-2 rounded-xl' onClick={updateData}>click To update</button>
    </div>
  )
}

export default DiscountedForm
"use client"
import React, { FC,useEffect,useState, ChangeEvent } from 'react'
type ItenaryInputProps = {
  id: string;
}

interface DataItem {
  id:number;
  place      :  String;
  hotel        :String[];
  choosedhotel :String;
  roomType   :  String;
  plan     :    String;
  rooms     :  String;
  Ex_ADL    :  String;
  CWB       :  String;
  CWOB      :  String;
  comp_Child:  String;
  checkIn   :  String;
  checkOut  :  String;
  guestChoice: String ;
}
const RoomBookingForm:FC<ItenaryInputProps> = ({id}) => {
  const [recordInput, setRecordInput] = useState([])
//   console.log(paramsid);

  const [apiData, setApiData] = useState<DataItem[]>([]);
  console.log(apiData);
  

  useEffect(() => {
    const fetchGuestInfo = async () => {
      try {
        // Fetch data from your Next.js API endpoint based on the provided reservationid
        const response = await fetch(`/api/Forms/RoomBooking/${id}`);
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
      const response = await fetch(`/api/guest/EditFormdata/roombooking/${id}`, {
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

  const handleInputPlaceChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, place: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputChoosedhotelChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, choosedhotel: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputRoomTypeChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, roomType: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputPlanChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, plan: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputRoomsChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, rooms: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputExADLChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, Ex_ADL: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputCWBChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, CWB: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputCWOBChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, CWOB: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputCompChildChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, comp_Child: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };

  const handleInputCheckInChange = (id:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = apiData.map(el => {
      if (el.id === id) {
        return { ...el, comp_Child: event.target.value };
      }
      return el;
    });
    setApiData(updatedData);
  };


  const handleChange = (id: number, event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setApiData(prevData => {
      const updatedData = prevData.map(item => {
        if (item.id === id) {
          return { ...item, activity: [newValue] }; // Update the entire 'activity' array with a single value
        }
        return item;
      });

      return updatedData;
    });
  };

  
  return (
    <div className='space-y-4 p-3' >
      <div className='flex items-center justify-center'>Edit the RoomBooking Data</div>
     {
      apiData?.map((el:any,i)=>(
        <div className='flex flex-wrap space-x-10 space-y-2 border border-black p-4 rounded-xl'>
        <hr />
        <label className='w-48'>Enter place</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.place}  onChange={(event)=>handleInputPlaceChange(el.id,event)}/>
        <label  className='w-48'>Enter hotel</label> <br />
      <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.hotel} onChange={(event)=>handleChange(el.id,event)}/>
      <label  className='w-48'>Enter choosedhotel</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.choosedhotel} onChange={(event)=>handleInputChoosedhotelChange(el.id,event)}/>
        <label  className='w-48'>Enter roomType</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.roomType}  onChange={(event)=>handleInputRoomTypeChange(el.id,event)}/>
        <label  className='w-48'>Enter plan</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.plan} onChange={(event)=>handleInputPlanChange(el.id,event)} />
        <label  className='w-48'>Enter rooms</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.rooms}  onChange={(event)=>handleInputRoomsChange(el.id,event)} />
        <label  className='w-48'>Enter Ex_ADL</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.Ex_ADL}  onChange={(event)=>handleInputExADLChange(el.id,event)} />
        <label  className='w-48'>Enter CWB</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.CWB}  onChange={(event)=>handleInputCWBChange(el.id,event)} />
        <label  className='w-48'>Enter CWOB</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.CWOB}  onChange={(event)=>handleInputCWOBChange(el.id,event)} />
        <label  className='w-48'>Enter compChild</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.comp_Child}  onChange={(event)=>handleInputCompChildChange(el.id,event)} />
        <label  className='w-48'>Enter CheckIn</label> <br />
        <input className='border w-48 border-black px-1 py-2 rounded-xl' type='text' value={el.checkIn}  onChange={(event)=>handleInputCheckInChange(el.id,event)} />
        </div>
      ))
     }
     <button  className='bg-blue-400 px-1 py-2 rounded-xl ml-' onClick={updateData}>click To update</button>
    </div>
  )
}

export default RoomBookingForm
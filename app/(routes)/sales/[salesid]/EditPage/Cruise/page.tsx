import React from 'react'
import Cruise from '../../ViewPage/Cruise/page'
import { IParams } from "../../page";
import CruiseForm from '../../Components/Form4/CruiseForm';
const page = ( { params }: { params: IParams }) => {
  return (
    <div>
      <Cruise params={params}/>
      <div className='flex items-center justify-center'>User Form</div>
      <CruiseForm id={params.salesid}/>
    </div>
  )
}

export default page
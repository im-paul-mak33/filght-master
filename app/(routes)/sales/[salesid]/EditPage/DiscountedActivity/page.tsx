import React from 'react'
import { IParams } from "../../page";
import Discount from '../../ViewPage/DiscountedActivity/page';
import DiscountedForm from '../../Components/Form6/DiscountForm';
const page = ( { params }: { params: IParams }) => {
  return (
    <div>
      <Discount params={params}/>
      <DiscountedForm id={params.salesid}/>
    </div>
  )
}

export default page
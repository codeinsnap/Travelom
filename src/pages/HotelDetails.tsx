import React from 'react'
import BreadCrumb from '../component/breadcrumb/BreadCrumb';


const HotelDetails = () => {

  return (
    <>
        <BreadCrumb data={[{title:"Home",  link: "/"}, {title:"Hotels"}]} />
    </>
  )
}

export default HotelDetails

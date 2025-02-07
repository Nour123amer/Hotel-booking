import React from 'react'
import { Link } from 'react-router-dom';

export default function RoomCard({roomInfo}) {
    let {title, id,description,type,price_per_day,images} = roomInfo;
   
  return (
   <>
 <Link to={`/rooms/${roomInfo.id}`} className='sm:col-span-12 md:col-span-6 lg:col-span-3' >
    <img className='rounded-md h-[200px] mb-2 w-full' src={images.length >0 ? images[0].url :''} alt="" />
    <h3 className='text-cyan-500 text-lg mb-2'>{title}</h3>
    <p className='line-clamp-2'>{description} </p>
    <p className='text-cyan-500'>{type}</p>
    <p>{price_per_day}$ /day</p>

 </Link>
   
   </>
  )
}

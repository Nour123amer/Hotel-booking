import React from 'react'
import RoomCard from '../../Components/RoomCard/RoomCard';

export default function FilteredRooms({searchedRooms}) {
    // let {title ,description,type,price_per_day,images} = searchedRooms;
    console.log(searchedRooms);
    
  return (
    <> 
     <div className='border border-gray-100 px-3 py-2 shadow-2xl rounded-md p-4 grid grid-cols-12 gap-4' >

    { searchedRooms?
    searchedRooms.map((room)=>(
    <div className='col-span-3 border border-gray-300 rounded-xl px-2 py-1' >
       {/* <img className='rounded-md h-[200px] mb-2' src={images.length >0 ? images[0].url :''} alt="" />
    <h3 className='text-cyan-500 text-lg mb-2'>{title}</h3>
    <p className='line-clamp-2'>{description} </p>
    <p className='text-cyan-500'>{type}</p>
    <p>{price_per_day}$ /day</p> */}

    <RoomCard key={room.id} roomInfo={room} />
    
    </div>
    ) ):'not found'
    }
      </div>
    </>
  )
}

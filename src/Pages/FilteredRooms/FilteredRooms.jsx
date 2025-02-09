import React from 'react'
import RoomCard from '../../Components/RoomCard/RoomCard';

export default function FilteredRooms({searchedRooms}) {
    // let {title ,description,type,price_per_day,images} = searchedRooms;
    console.log(searchedRooms);
    
  return (
    <> 
     <div className='border border-gray-100 px-3 py-2 shadow-2xl rounded-md p-4 grid grid-cols-12 gap-4 sm:mt-16 sm:mb-14' >

    { searchedRooms?
    searchedRooms.map((room)=>(
    <div className='sm:col-span-12 sm:mt-16 smx:col-span-6 lg:col-span-3 border border-gray-300 rounded-xl px-2 py-1 '>
    <RoomCard key={room.id} roomInfo={room} />
    </div>
    ) ):'not found'
    }
      </div>
    </>
  )
}

import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import React, { useEffect, useState } from 'react'

export default function Suggestion() {
let [rooms ,setRooms] = useState([]);
    async function getRooms() {
        let options ={
            url:'https://backend.smartvision4p.com/hotel/public/api/rooms?in_suggest=1',
            method :'GET'
        }
        let {data} = await axios.request(options);
        setRooms(data.data.data);
    }

    useEffect(()=>{
        getRooms()
    },[])
  return (
   <> 

   <h2 className='text-2xl font-semibold mb-4'>Suggested for you:</h2>

   <Swiper 
   loop={true} 
   spaceBetween={10}
   slidesPerView={1} 
   breakpoints={{
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
  }}
   >
      {rooms.map((room)=><SwiperSlide key={room.id}>
      
       <img src={room.images[0].url} 
        className="w-full h-72 object-cover rounded-lg"
        alt="" />
        <p className='text-gray-400 pl-2 '>{room.type} | {room.no_beds} Bed</p>
        <p className='text-gray-400 pl-2 '> {room.price_per_day} /day</p>
      
        
      </SwiperSlide>)}
    </Swiper>

   
   </>
  )
}

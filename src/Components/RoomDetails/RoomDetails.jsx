import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { RoomInfoContext } from '../../App';
import Loader from '../Loader/Loader';

export default function RoomDetails() {
    const {id} = useParams();
    const [roomInfo ,setRoomInfo] = useState(null);
    const [similarRooms,setSimilarRooms] = useState();
    const navigate = useNavigate();
    const { selectedRoom, setSelectedRoom } = useContext(RoomInfoContext );

  
console.log(roomInfo);
console.log(selectedRoom);


      //   if (!selectedRoom) {
      //   const room = roomInfo.find((room) => room.id === Number.parseInt(id))
      //   if (room) {
      //     setSelectedRoom(room)
      //   }
      // }

     useEffect(()=>{

        async function getRoomDetails() {
        try{
             const options ={
            url :`https://backend.smartvision4p.com/hotel/public/api/rooms/${id}`,
            method :'GET',
            }

        let data = await axios.request(options);
        console.log(data);
        console.log(data.data.data.single);
        setRoomInfo(data.data.data.single);
        setSelectedRoom(data.data.data.single);
        console.log(roomInfo);
        console.log(selectedRoom);
        
        setSimilarRooms(data.data.data.same);
        console.log(data.data.data.same);
        
        
        }catch(error){
        console.log(error);
        
    }

        }
        getRoomDetails()
    },[id])  
    
    if(!selectedRoom) console.log('No room information is available')
    console.log(roomInfo);

      console.log(similarRooms);
   
  return (
<>  
  <div className='grid grid-cols-12 gap-4 mb-6 ' >
    {roomInfo ? (
        <>
    <img className='rounded-md h-[200px] mb-2 sm:col-span-12 lg:col-span-4 w-full' src={roomInfo.images.length > 0 ? roomInfo.images[0].url :''} alt="" />
    <div className='sm:col-span-12 lg:col-span-8' >
     <h3 className='text-cyan-500 text-lg mb-2'>{roomInfo.title}</h3>
    <p className='line-clamp-2'>{roomInfo.description} </p>
    <p className='text-cyan-500'>{roomInfo.type}</p>
    <p>{roomInfo.price_per_day}$ /day</p>
    <button className='bg-cyan-500 text-white px-2 py-1 rounded-md ' onClick={()=>navigate('/reservation')}>Reserve</button>
    </div>
        </>
   
    ):(<Loader />)}
  
  
   </div>
   
   <div className=' border border-gray-400 rounded-md p-4 shadow-xl' >
  {similarRooms? similarRooms.map((room)=> 
  <div key={room.id} className='grid grid-cols-12 gap-4 mb-4'>
    <img className='rounded-md h-[200px] mb-2 sm:col-span-12 lg:col-span-4 w-full ' src={room.images ? room.images[0].url :''} alt="" />
    <div className='col-span-8' >
     <h3 className='text-cyan-500 text-lg mb-2'>{room.title}</h3>
    <p className='line-clamp-2'>{room.description} </p>
    <p className='text-cyan-500'>{room.type}</p>
    <p>{room.price_per_day}$ /day</p>
    <button className='bg-cyan-500 text-white px-2 py-1 rounded-md' onClick={()=>navigate('/reservation')}>Reserve</button>
    </div> 
      </div>)
  : <h2></h2>
 }  
  
</div>
</>
)
}



import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RoomInfoContext } from '../../App'
import RoomDetails from '../../Components/RoomDetails/RoomDetails';
import { useNavigate, useParams } from 'react-router-dom';

export default function Reservation() {
    const notify = () => toast.info("You have signed up !");

  const {selectedRoom } = useContext(RoomInfoContext);
  const navigate = useNavigate();
  console.log(selectedRoom);

  
  
  if(!selectedRoom){
    return <div> No room is selected ,please select room first.</div>
  }

  return (
   <>
   <h2 className='text-gray-500 font-bold text-lg drop-shadow-2xl mb-2 '>Reservation info</h2>
   <p className='mb-6 text-gray-500 text-lg'>All information about the room you want to reserve.</p>
   <div className='grid grid-cols-12 gap-8 sm:mb-16 '>
   {/* <RoomDetails roomInfo={selectedRoom} /> */}
   <img className='rounded-md h-[200px] mb-2 sm:col-span-12 lg:col-span-4 w-full' src={selectedRoom.images.length > 0 ? selectedRoom.images[0].url :''} alt="" />
    <div className='sm:col-span-12 lg:col-span-8' >
     <h3 className='text-cyan-500 text-lg mb-2'>{selectedRoom.title}</h3>
    <p className='line-clamp-2'>{selectedRoom.description} </p>
    <p className='text-cyan-500'>{selectedRoom.type}</p>
    <p>{selectedRoom.price_per_day}$ /day</p>
    </div>
</div>
   <button 
   onClick={()=>{navigate('/payment')}}
   className='bg-cyan-500 text-white rounded-md mt-4 px-2 py-1 font-semibold '> Confirm reservation</button>

   </>
  )
}

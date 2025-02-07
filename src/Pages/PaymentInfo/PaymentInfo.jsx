import React, { useContext } from 'react'
import { RoomInfoContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function PaymentInfo() {
    const navigate = useNavigate ();
      const {selectedRoom } = useContext(RoomInfoContext);
      console.log(selectedRoom);

      if(!selectedRoom){
        return <div>No room is reserved.</div>
      }
      
  return (
    <>
    <h2 className='text-gray-500 font-bold text-xl'>Payment is done!</h2>
    <p className='text-gray-500 font-semibold text-lg'>You have reserved</p>

    <div className='col-span-8' >
     <h3 className='text-cyan-500 text-lg mb-2'>{selectedRoom.title}</h3>
    <p className='line-clamp-4 w-[400px] mb-4 text-gray-500'>Info about the room:{selectedRoom.description} </p>
    <p className='text-cyan-500 font-semibold'>The room type is: {selectedRoom.type}</p>
    <p className='text-gray-500'>You paid : {selectedRoom.price_per_day}$ /day</p>
    </div>

    <button 
   onClick={()=>{navigate('/')}}
   className='bg-cyan-500 text-white rounded-md mt-4 px-2 py-1 font-semibold '> Go To Home</button>

    </>
  )
}

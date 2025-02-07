import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import RoomCard from '../../Components/RoomCard/RoomCard';
import Loader from '../../Components/Loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import RoomDetails from '../../Components/RoomDetails/RoomDetails';
import { RoomInfoContext } from './../../context/RoomInfoContext/RoomInfoContext';

const context = createContext('');
export default function Rooms() {
    const navigate = useNavigate();
    const [id ,setId] = useState();
    const {roomInfo ,selectedRoom ,setSelectedRoom} = useContext(RoomInfoContext);

    const [count,setCount] = useState(0);
    const [rooms , setRooms] = useState([]);

    async function getRooms() {
      try{
          const options = {
            url:'https://backend.smartvision4p.com/hotel/public/api/rooms',
            method:'GET',
        }    
        
        let {data} = await axios.request(options);
        setRooms(data.data.data);
        console.log(data.data.data);
        

        setCount(data.data.meta.total)
      }catch(error){
        console.log(error);
        
      }
      

    }

    useEffect(()=>{
        getRooms()
    },[])



    function getRoomDetails(id){
    const clickedRoom = rooms.filter((room)=> room.id === id ? room :'' );
    setSelectedRoom(clickedRoom)
    console.log(clickedRoom);
    // setId(id);
    navigate(`/rooms/${id}`)
    
    }

  
  return (
    <>
      <Helmet>
        <title>Rooms</title>
        <meta name='description' content='welcome to about page' />
      </Helmet>

    <h2 className='font-bold text-2xl mb-4 sm:mt-16 sm:pt-16 md:mt-2 md:pt-2'> Rooms ({count})</h2>
    <div className='grid grid-cols-12 gap-4'>
     {rooms ? rooms.map((room)=>(
      <> 
        <RoomCard key={room.id} getRoomDetails={getRoomDetails} roomInfo={room} />
    
      </>
    

     )): <Loader />}
    </div>

    </>
  )
}

// export default function RoomDetails(){
//   const {id} = useParams();
//   const navigate = useNavigate();
//   const [selectedRoom ,setSelectedRoom] = useContext(RoomInfoContext);

//   useEffect(()=>{
//     async function getRoomDetails() {
//         try{
//       const options = {
//         url:'https://backend.smartvision4p.com/hotel/public/api/rooms/${id}',
//         method : 'GET',
//       }

//       const {data} = await axios.request(options);
//       setSelectedRoom(data.data.single)

//     }catch(error){
//       console.log(error)
//     }
//     }

//  getRoomDetails();
// },[id ,setSelectedRoom]);
// }

// if(!selectedRoom){
//   return <p>No room is selected ,please select a room</p>
// }

// const {title , description, type, price_per_day, images} = selectedRoom;


// return(
//   <>
  
//   </>
// )
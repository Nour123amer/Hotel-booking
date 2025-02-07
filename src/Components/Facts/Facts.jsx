import React, { useEffect, useState } from 'react'

export default function Facts() {
    const [count ,setCount] = useState(0);
    const [reservations ,setReservation] = useState(0);
    const [rooms ,setRooms] = useState(0);

 setCount(count);
    useEffect(()=>{
          setTimeout(()=>{
       count = count+1;
     
    },3000) ;
   
        Facts();
        // clearTimeout(x)
    },[])
  return (
    <>
    <h2>Fast Facts</h2>
    <p>We’re impartial and independent, and every day we create distinctive, world-class programmes and content</p>
    <div className='flex justify-between'>
        <div>
            <p>{count}</p>
            <p>
            More than 300 reservations through our website in a year</p>
        </div>

        <div>
        <p></p>
        <p>
Many of our valued visitors daily on our platform</p>
        </div>

        <div>
        <p></p>
        <p>
Many rooms, suites and pleasant services</p>
        </div>
    </div>
    </>
  )
}

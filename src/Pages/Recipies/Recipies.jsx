import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CateoryCard from '../../Components/CateoryCard/CateoryCard';
import Loading from '../../Components/Loading/Loading';


export default function Recipies() {
    const [recipies ,setRecipies] = useState([]);

    async function getRecipies() {
        const options = {
            url:'https://backend.smartvision4p.com/hotel/public/api/rooms',
            method:'GET',
        }

        let {data} = await axios.request(options);

  console.log(data.data.data);
        setRecipies(data.data.data);
      
    }

    useEffect(()=>{
        getRecipies()
    },[]);
  return (
   <>
   <div className='container grid grid-cols-12 gap-4 px-8 pt-6'>
   {recipies?(
    recipies.map((category)=>{
        return <CateoryCard categoryInfo={category} />
    })
   )  :(<Loading />)}
   </div>
   </>
  )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BrandCard from '../../Components/BrandCard/BrandCard';
import Loading from '../../Components/Loading/Loading';

export default function Users() {
    const [brands ,setBrands] = useState([]);

    async function getUsers() {
        const options ={
            url:'https://dummyjson.com/users',
            method:'GET',
        }

        let {data} = await axios.request(options);
        console.log(data);
        setBrands(data.users)
        
    }
    useEffect(()=>{
        getUsers()
    },[])
  return (
   <>
   <div className='grid grid-cols-12 gap-4 px-8 pt-6'>

    {brands? (
        brands.map((brand)=>{
            return <BrandCard brandInfo={brand}  />
        })
    ):(<Loading />)}
   </div>
   
   </>
  )
}

import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard';
import Loading from '../../Components/Loading/Loading';


export default function Products() {
    const [products ,setProducts] = useState();

    async function getProducts(){
      const options ={
        url:'https://backend.smartvision4p.com/hotel/public/api/rooms?in_suggest=1',
        method:'GET',
        // Headers:{
        //   'x-rapidapi-key': '461772fce8msh759aa0f398f23ddp1cb7c8jsne29b36701dbb',
		    //   'x-rapidapi-host': 'mashvisor-api.p.rapidapi.com'
        // }

      }

      const {data} = await axios.request(options);
      console.log(data.data.data);
      setProducts(data.data.data);
    }

    useEffect(()=>{getProducts() },[])

  return (
    <>
    <div className='grid grid-cols-12 gap-4 px-8 pt-6'> 
     { products ? (products.map((product)=>(
    
      <ProductCard productInfo={product} key={product.id} />
      ))) :( '...')}
      </div>
    </>
  )
}

import React from 'react'

export default function IngredientsCard({ingredientInfo}) {
  let {id,name,products} =ingredientInfo;
  return (
  <>
 <div className='col-md-4 col-span-3 flex flex-col border border-gray-400 p-4 rounded-md'>
    <h2 className='text-cyan-600'>{name}</h2>
    {/* <p>Price : {products}</p> */}
    <p>{id}</p>
  </div>
  
  </>
  )
}

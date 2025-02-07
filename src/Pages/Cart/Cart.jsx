import React, { useState } from 'react'
import Counter from '../../Components/Counter/Counter';

export default function Cart({id,AddItemToCart,counters ,cartItems,handleDelete,handleIncrement}) {
    const [bg ,setBg] = useState('text-blue-500');
console.log(cartItems);
console.log(counters);

     function addColor(){
        setBg('text-green-700');
     }




  return (
<>
  {/* <button onClick={addColor}>
    <i className={`fa-solid fa-cart-shopping ${bg}`}></i>
   </button> */}

<button onClick={()=>{AddItemToCart(id)}}>
<i className={`fa-solid fa-cart-shopping ${bg}`}></i>
</button>

{/* 
{cartItems?.map((item)=>(
    <>
    <div className='flex justify-between' key={item.id}> */}
    {/* <img src={item.thumbnail} alt="" />
    <p>{item.title}</p>
    <p>{item.brand}</p> */}
    {/* <button><Counter counter={item} /></button> */}

    {/* <button onClick={()=>{handleDelete(item.id)}}>
<i className="fa-solid fa-trash-can text-red-500"></i>

</button> */}



<div className='flex flex-col'>
{ counters.map((counter)=>(
  <>
  {/* console.log(counter); */}
  
<Counter key={counter.id} counter={counter} handleDelete={handleDelete} handleIncrement={handleIncrement}  />
</>
) 
)}
</div>




   {/* </div>
    </>
))} */}




</>
  )
}

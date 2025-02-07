import React from 'react'

export default function Read() {
  return (
    <>
    <div className='grid grid-cols-12 gap-4 mt-8'>
     <div  className='sm:col-span-12 lg:col-span-6 py-12'>
        <h2 className='text-2xl font-bold mb-4'>Join our newsletter</h2>
        <p className='mb-4 text-gray-400 w-3/4'>Read and share new perspectives on just about any topic. Everyone’s welcome.</p>

        <ul>
            <li className='flex gap-2 mb-2'>
                <p className='text-blue-600 bg-slate-200 rounded-full w-fit px-1'>01</p>
                <p className=''>Get more discount</p>
            </li>
            <li className='flex gap-2 mb-6'>
                <p className='text-red-400 bg-slate-200 rounded-full w-fit px-1'>02</p>
                <p>Get premium magazines</p>
            </li>
        </ul>

       <div className='relative'>
         <input type="text" name="" className='border border-gray-400 px-3 py-2 rounded-full w-full' placeholder='enter your email address' id="" />
         <button className='absolute right-4 top-2'>
         <i className="fa-solid fa-arrow-right text-cyan-500"></i>
         </button>
       </div>
       
     </div>

     <div  className='sm:col-span-12 lg:col-span-6'>
        <img className='w-full h-[280px]' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROOVqotDj3AeDHRLof4mQv3hdtPjEFc2phAhfvblOxYr2xYUgP" alt="" />
    </div>
    </div>
    </>
  )
}

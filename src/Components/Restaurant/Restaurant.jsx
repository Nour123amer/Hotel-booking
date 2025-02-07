import React from 'react'
import styles from './Restaurant.module.css'
export default function Restaurant() {
  return (
    <>
    <div className='grid grid-cols-12 gap-18 my-6 justify-between'>
        <div className='sm:col-span-12 lg:col-span-6 align-middle'>
            <h2 className='font-bold text-2xl mb-6'>Eating and drinking</h2>
            <p className='w-5/6  text-gray-500 sm:mb-4'>

            Explore our restaurants for fresh pastry offerings, al fresco bars,
             poolside dining and live DJ nights. We have authentic Asian cuisine prepared in an open kitchen, 
             fresh seafood and casual dining all day long.
            </p>
        </div>

        <div className={`sm:col-span-12 lg:col-span-6 overflow-hidden ${styles.content} rounded-xl`}>
            <img className='rounded-xl h-[350px] w-5/6 ' src="https://backend.smartvision4p.com/hotel/public/storage/abouts/110/hrghi-2599.png" alt="" />
        </div>
    </div>
    
    </>
  )
}

import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

export default function OurFomfort() {
    const {theme} = useContext(ThemeContext)
  return (
  <>
  <h2 className='font-bold text-2xl mb-8'>Our comforts</h2>
  <div className='grid grid-cols-12 gap-8 mb-10 sm:pb-14'>

    <div className='sm:col-span-6 lg:col-span-3 bg-gray-200 hover:bg-slate-400 rounded-2xl text-center px-3 py-4'>
    <i class="fa-solid fa-bowl-food mb-4 text-2xl"></i>
    <h3 className={`text-xl mb-3 ${theme === 'light' ? ' text-gray-300' : 'text-gray-700'}`}>eat the food</h3>
    <p className='text-gray-600'>On-site Restaurant Room Service</p>
    </div>


    <div className='sm:col-span-6 lg:col-span-3  bg-gray-200 hover:bg-slate-400 rounded-2xl text-center px-3 py-4'>
    <i class="fa-solid fa-dumbbell mb-4 text-2xl"></i>
    <h3 className={`text-xl mb-3 ${theme === 'light' ? ' text-gray-300' : 'text-gray-700'}`}>Fitness and Recreation</h3>
    <p className='text-gray-600'>Outdoor Pool Fitness Center Spa Beach Tennis Court</p>
    </div>

  </div>
  </>
  )
}

import React, { useContext } from 'react'
import { ThemeContext } from '../../App';

export default function Features() {
      const {theme } = useContext(ThemeContext );
  return (
    <>
    <h2 className='mb-6 font-bold text-2xl'>Our Features</h2>

    <div className ={`grid grid-cols-12 gap-6 ${
        theme === "dark" ? " text-black" : "bg-white text-black"
      } dark:text-black`} >
        <div className='sm:col-span-12 md:col-span-6 lg:col-span-3 rounded-full bg-slate-200 hover:bg-slate-400 px-3 py-4 text-center'>
            <i className="fa-solid fa-wand-magic-sparkles mb-2 font-bold text-2xl"></i>
            <p className=''>Riviera Owners Discount Price</p>
        </div>
        <div className='sm:col-span-12 md:col-span-6 lg:col-span-3 rounded-full bg-slate-200 hover:bg-slate-400 px-3 py-4 text-center'>
            <i className="fa-solid fa-dollar-sign mb-2 font-bold text-2xl"></i>
            <p className=''>Points to earn free nights and more</p>
        </div>
        <div className='sm:col-span-12 md:col-span-6 lg:col-span-3 rounded-full bg-slate-200 hover:bg-slate-400 px-3 py-4 text-center'>
            <i class="fa-solid fa-house mb-2 font-bold text-2xl"></i>
            <p className=''>Choose your room</p>
        </div>
        <div className='sm:col-span-12 md:col-span-6 lg:col-span-3 rounded-full bg-slate-200 hover:bg-slate-400 px-3 py-4 text-center'>
            <i className="fa-solid fa-tv mb-2 font-bold text-2xl"></i>
            <p className=''>Check in digitally</p>
        </div>

    </div>
    
    </>
  )
}

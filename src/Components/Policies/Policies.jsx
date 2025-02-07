import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

export default function Policies() {
      const {theme} = useContext(ThemeContext)
  return (
    <>
    <h2 className='font-bold text-2xl mb-6'>Our policies</h2>
    <div className='grid grid-cols-12 gap-8 pb-6'>
        <div className='px-3 py-4 bg-gray-200 hover:bg-slate-400 rounded-xl h-[340px] sm:col-span-6 lg:col-span-3 text-center'>
        <i className="fa-solid fa-bolt text-2xl"></i>
        <h3 className={`text-xl mb-3 ${theme === 'light' ? ' text-gray-300' : 'text-gray-700'}`}>resort</h3>
        <p className='text-gray-600'>
        Fees and Charges This hotel offers a family experience for travelers under the age of 12. 
        Children enjoy an age-appropriate welcome and a kids' breakfast experience. Enjoy your family's
         meals by choosing from the kids' menu. The hotel has a range of child-friendly amenities available upon request.
        </p>
        </div>
        <div className='px-3 py-4 bg-gray-200 hover:bg-slate-400 rounded-xl h-[340px] sm:col-span-6 lg:col-span-3 text-center'>
        <i className="fa-solid fa-shield-cat text-2xl"></i>
        <h3 className={`text-xl mb-3 ${theme === 'light' ? ' text-gray-300' : 'text-gray-700'}`}>Pets allowed</h3>
        <p className='text-gray-600'>Pets are allowed</p>
  
        </div>
    </div>
    </>
  )
}

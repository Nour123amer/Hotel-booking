import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Payment() {
  const navigate = useNavigate();
  const notify = () => toast.info("Payment is done !");
  return (
    <>
    <div className='grid grid-cols-12  '> 
  <div className=' flex flex-col col-span-5 justify-self-start'>
  <h2>Pay with card</h2>

  <p className='mb-2'>Card info</p>
   <div className='flex flex-col'>
    <input className='border border-gray-300 px-2 py-1 rounded-t-lg' type="text" placeholder='1234 1234 1234 1234' />
    <div className='flex'>
    <input className='border border-gray-300 px-2 py-1 rounded-b-lg w-1/2 mb-4' type="text" placeholder='MM/YY' />
    <input className='border border-gray-300 px-2 py-1 rounded-b-lg mb-4 w-1/2' type="text" placeholder='CVC' />
    </div>
   </div>
    <label htmlFor=""> Name on card</label>
    <input className='border border-gray-300 px-2 py-1 rounded-lg mb-4' type="text" />

    <label>country or region </label>

    <div className="relative inline-block text-left mt-2">
  <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Options
      <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
       {/* // Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700"  */}
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Egypt</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">USA</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Europe</a>
      <form method="POST" action="#" role="none">
        <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
</div>
    <button className='bg-cyan-500 text-white px-2 py-1 rounded-md mt-4' onClick={ navigate('/paymentinfo')}>Pay</button>
    <ToastContainer />


  
  </div>


  <div className='col-span-5 justify-self-end'>
    <img src="https://static.vecteezy.com/system/resources/previews/022/583/342/non_2x/credit-card-isolated-transparent-background-3d-render-icon-design-free-png.png" alt="" />
  </div>
  </div>
    </>
  )
}

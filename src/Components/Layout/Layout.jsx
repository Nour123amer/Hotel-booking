import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from '../../App'

export default function Layout({noOfCartItems}) {
  const {theme ,toggleTheme} = useContext(ThemeContext);
  
  return (
    <>
      <Navbar noOfCartItems={noOfCartItems}   />
     <div className={`container  pt-14 md:px-16 w-full mx-auto  pb-[200px]  `}>
     <Outlet className ='w-5/6 mx-auto' />
     </div>
    
 <Footer  />
 
     

    </>
  )
}

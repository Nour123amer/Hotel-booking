import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from '../../App'

export default function Layout({noOfCartItems}) {
  const {theme ,toggleTheme} = useContext(ThemeContext);
  
  return (
    <>
      <Navbar noOfCartItems={noOfCartItems}  />
     <div className={`container  pt-14 md:px-16  pb-[200px] ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} `}>
     <Outlet />
     </div>
      <Footer  />

    </>
  )
}

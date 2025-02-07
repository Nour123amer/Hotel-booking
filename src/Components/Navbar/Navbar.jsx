import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import  {ThemeContext}  from '../../App'
export default function Navbar({noOfCartItems}) {
  const {theme ,toggleTheme} = useContext(ThemeContext);
  if( !theme){
    console.log('000000000');
    
  }

  return (
   <>


<nav className={`navbar navbar-expand-lg bg-body-tertiary bg-transparent ${theme === 'dark' ? 'bg-black text-white': 'bg-white text-black'} text-gray-400 fixed top-0 shadow-lg right-0 left-0 px-16 py-2 mb-14 `}>
  <div className="container-fluid sm:flex sm:flex-col sm:items-center md:flex md:flex-row  md:justify-between w-5/6 mx-auto lg:py-4 lg:items-center  ">
    <Link className="navbar-brand font-bold flex gap-1 items-center" to='/home'>
    <i className="fa-solid fa-hotel"></i>
    <p>Hotel</p></Link>

    <button className="navbar-toggler text-black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-black"></span>
    </button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex sm:flex-col sm:items-center md:flex-row items-center md:gap-2 lg:gap-4 justify-between">
      <li className='nav-item'> <NavLink className={ ({isActive})=> isActive ? 'text-cyan-500 font-bold ': 'text-gray-400' } to='/home'>Home</NavLink > </li>
      <li className='nav-item'> <NavLink className={ ({isActive})=> isActive ? 'text-cyan-500 font-bold ': 'text-gray-400' } to='/about us' >About us</NavLink ></li>
      <li className='nav-item'> <NavLink className={ ({isActive})=> isActive ? 'text-cyan-500 font-bold ': 'text-gray-400' } to='/rooms'>Rooms</NavLink ></li>
      <li className='nav-item'> <NavLink className={ ({isActive})=> isActive ? 'text-cyan-500 font-bold ': 'text-gray-400' } to='/places'>Places</NavLink ></li>
      <li className='nav-item'> <NavLink className={ ({isActive})=> isActive ? 'text-cyan-500 font-bold ': 'text-gray-400' } to='/contact us'>Contact us</NavLink ></li>
      {/* <li className='nav-item'> <NavLink className={ ({isActive})=> isActive ? 'text-cyan-500 font-bold ': 'text-gray-400' } to='/menu'>Menu</NavLink ></li>
      <li className='nav-item'> <NavLink className={ ({isActive})=> isActive ? 'text-cyan-500 font-bold ': 'text-gray-400' } to='/cart'>Cart <span>{noOfCartItems}</span></NavLink ></li> */}
      <li className='nav-item'> <NavLink className={ ({isActive})=> isActive ? 'text-cyan-500 font-bold ': 'text-gray-400' } to='/login'>Login</NavLink ></li>
      {/* <li className='nav-item'> <NavLink className={ ({isActive})=> isActive ? 'text-cyan-500 font-bold ': 'text-gray-400' } to='/filteredrooms'>Filteredrooms</NavLink ></li> */}
      </ul>
    </div>

    <button onClick={toggleTheme} className='flex items-center ml-4'>
    {theme === 'light' ? 
        ( <i class="fa-solid fa-sun"></i>) :(<i class="fa-solid fa-moon"></i>)}
    </button>

  </div>
</nav>
   </>
  )
}

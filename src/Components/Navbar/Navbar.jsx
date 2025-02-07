// 
"use client"

import { useContext, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { ThemeContext } from "../../App"

export default function Navbar({ noOfCartItems }) {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-10 shadow-lg py-4 px-4 md:px-6 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link className="navbar-brand font-bold flex gap-1 items-center" to="/home">
          <i className="fa-solid fa-hotel"></i>
          <p>Hotel</p>
        </Link>

        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <i className={`fa-solid ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <div className={`${isMobileMenuOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:items-center`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-cyan-500 font-bold" : "text-gray-400 hover:text-cyan-500"
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-cyan-500 font-bold" : "text-gray-400 hover:text-cyan-500"
                }
                to="/about us"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-cyan-500 font-bold" : "text-gray-400 hover:text-cyan-500"
                }
                to="/rooms"
              >
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-cyan-500 font-bold" : "text-gray-400 hover:text-cyan-500"
                }
                to="/places"
              >
                Places
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-cyan-500 font-bold" : "text-gray-400 hover:text-cyan-500"
                }
                to="/contact us"
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-cyan-500 font-bold" : "text-gray-400 hover:text-cyan-500"
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>

        <button
          onClick={toggleTheme}
          className="flex items-center ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === "light" ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
        </button>
      </div>
    </nav>
  )
}

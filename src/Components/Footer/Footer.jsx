import React, { useContext } from "react";
import styles from './Footer.module.css'
import { ThemeContext } from "../../App";

export default function Footer() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <div className={` ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} bg-white text-gray-600 pt-12  shadow-xl w-full absolute left-0  right-0 bottom-0 py-8 mt-4 font-semibold sm:mt-16 h-[220px] `}>
        <div className="w-3/4 mx-auto sm:flex sm:flex-col smx:flex-row smx:flex-wrap smx:justify-between  lg:flex md:justify-between lg:items-center ">
          <div>
            <h2 className="font-bold text-lg text-black mb-4">Hotel</h2>
            <ul>
              <li className="flex gap-2 items-center mb-2 ">
                <i className=" fa-brands fa-facebook text-cyan-500"></i>
                <p>Facebook</p>
              </li>
              <li className="flex gap-2 items-center mb-2">
                <i className=" fa-brands fa-x-twitter  text-cyan-500"></i>
                <p>Twitter</p>
              </li>
              <li className="flex gap-2 items-center mb-2">
                <i class="fa-brands fa-youtube  text-cyan-500"></i>
                <p>Youtube</p>
              </li>
              <li className="flex gap-2 items-center mb-2">
                <i class="fa-brands fa-instagram  text-cyan-500"></i>
                <p>Instagram</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4 text-black">Pages</h2>
            <ul>
              <li className="mb-2">Home</li>
              <li className="mb-2">About us</li>
              <li className="mb-2">Rooms</li>
              <li className="mb-2">Places</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4 text-black">Helps</h2>
            <ul>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Terms & Conditions</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Login</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4 text-black">Contact</h2>
            <ul>
              <li className="flex items-center gap-2 mb-2">
                <i className=" fa-solid fa-phone  text-cyan-500"></i>
                <p>0109954487</p>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <i className=" fa-solid fa-envelope  text-cyan-500"></i>
                <p>nouramer295@gmail.com</p>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <i class="fa-solid fa-location-dot  text-cyan-500"></i>
                <p>Egypt - Cairo</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

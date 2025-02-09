import React, { useState,useEffect } from "react";
import styles from './Home.module.css';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/5.jpg';
import image3 from '../../assets/images/4.jpg';
import image4 from '../../assets/images/travel.jpg';
import image5 from '../../assets/images/wy.jpg';
import Suggestion from "../Suggestion/Suggestion";
import axios from "axios";
import Review from "../../Components/Review/Review";
import Read from "../../Components/Read/Read";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home({searchRooms ,searchedRooms}) {
const [priceRange ,setPriceRange] = useState(0);
const [topRated ,setTopRated] = useState();
const navigate = useNavigate();

  async function getTopRatedRooms() {
    let options ={
      url:'https://backend.smartvision4p.com/hotel/public/api/rooms?top_rated=1',
      method:'GET'
    }

    let {data} = await axios.request(options);
    console.log(data);
    
    setTopRated(data.data)
  }
 
  useEffect(()=>{
    getTopRatedRooms()
  },[])

  console.log(searchedRooms);

  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name="description"  content='welcome to home page' />
    </Helmet>

      <div className=" grid grid-cols-12 gap-4 mt-6  md:mt-2 md:pt-2 ">
        <div className="sm:col-span-12 lg:col-span-6 sm:mb-6 flex flex-col ">
          <h2 className="sm:text-lg  lg:text-3xl font-bold mb-6 sm:pt-6 ">
            Book your hotel and enjoy the experience And spend more time with us
          </h2>
          <p className="mb-6 text-lg text-gray-500">
            With us, you have a journey full of experiences. With Riviera,
            booking accommodations, resorts and hotels
          </p>

          <h3 className=" mb-8 text-2xl font-semibold">quick search</h3>
          <div className="sm:w-full px-8 bg-white rounded-lg shadow-xl py-6">
           <div className="sm:flex-col  sm:gap-4 smx:flex-row flex justify-between">
           <div>
              <h4>Price:{priceRange}</h4>
              <input
                type="range"
                min={0}
                max="5000"
                value={priceRange}
                onChange={(e)=>setPriceRange(e.target.value)}
                className="range range-accent"
              />
            </div>
            <div>
              <h4>guests number</h4>
              <input type="text" placeholder="guests number" />
            </div>

            <div>
              {/* <h4>type</h4> */}
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1 text-gray-400 sm:mb-2">
                  type
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>Room</a>
                  </li>
                  <li>
                    <a>Suite</a>
                  </li>
                  <li>
                    <a>Pool view</a>
                  </li>
                </ul>
              </div>
            </div>
           </div>

            <button  onClick={()=>{searchRooms(priceRange);
              navigate('/filteredrooms')
            }} className="bg-cyan-500 text-white w-full py-2 rounded-full">Search</button>
          </div>
        </div>

        <div className="sm:col-span-12 grid grid-cols-12 sm:flex-col smx:flex-row lg:col-span-6  gap-4   ">

          <div className="sm:w-full sm:col-span-12 sm:h-full smx:col-span-6 flex flex-col gap-4 lg:h-[470px]">
          <img src={image3} className=" h-1/3 w-full rounded-xl" alt="" />
          <img src={image2} className="sm:h-1/3  lg:h-2/3 w-full rounded-xl" alt="" />
            
          </div>

          <div className="sm:w-full sm:col-span-12  smx:col-span-6 smx:h-[380px]  md:h-[480px]">
            <img src={image1} className="h-full w-full rounded-xl " alt="" />
          </div>

        </div>

      </div>
      <Suggestion />

  {/* Benefits */}
   <div className="grid grid-cols-12 gap-8 h-3/4 mt-12">

    <div className="sm:col-span-12 lg:col-span-6 mt-8">
      <img src={image4} className="h-2/3 w-full rounded-lg" alt="" />
    </div>

    <div className="sm:col-span-12 sm:mb-8 lg:col-span-6  ">
      <h2 className="text-2xl mb-6">Benifits</h2>

      <h3 className="text-2xl mb-6 font-semibold">Happening cities</h3>
      <p className="text-yellow-400 bg-yellow-200 px-2 text-sm py-1 rounded-full w-fit">adventure</p>
      <p className="text-xl mb-6 font-semibold">We have many fun games and adventures that will delight entire families.</p>
      <p className="text-gray-400">Lots of adventures with us</p>
      <p className="text-green-400 bg-green-200 px-2 text-sm py-1 rounded-full w-fit">secure</p>
      <p className="text-xl mb-6 font-semibold">All rooms are fully equipped with safety features, no need to worry with us.</p>
      <p className="text-gray-400">Complete safety for guests</p>
      <p className="text-blue-400 bg-blue-200 px-2 text-sm py-1 rounded-full w-fit">privacy</p>
      <p className="text-xl mb-6 font-semibold">With us you will find complete privacy inside the private swimming pools of each room.</p>
      <p className="text-gray-400">We offer complete privacy</p>
    </div>

   </div>

  {/* why you choose us? */}
   <div className="h-1/2 grid grid-cols-12 gap-4 bg-gray-100 rounded-lg">
    <div className="sm:col-span-12 lg:col-span-6 h-3/4 pl-8  flex flex-col justify-center">
      <h2 className="text-2xl  font-bold mb-4 sm:my-8 sm:pt-4">Why you choose us? </h2>
      <p className="text-gray-500 w-3/4 mb-4 "> our hotels with Wellness centre,
         huge heated pool, scented turkish bath, Finnish sauna,
          nebulized tropical shower, hot tub with blu mosaic and massage centre... </p>

          <Link to='/about us'>
          <button className=" bg-cyan-500 text-white px-3 py-2  rounded-full flex gap-1 justify-center items-center w-fit">
            <p>Know more </p>
            <i className="fa-solid fa-arrow-right-long text-white pt-1"></i>
          </button>
          </Link>
    </div>

    <div className="sm:col-span-12 lg:col-span-6 flex justify-center items-center">
      <img src="https://backend.smartvision4p.com/hotel/public/storage/abouts/111/choose.webp" className="h-3/4 rounded-lg" alt="" />
    </div>

   </div>

   {/* Top rated */}
   <div >
    <h2 className="mb-4 text-2xl font-bold mt-8 ">Top Rated</h2>
    <p className="mb-6">Top rated rooms for you</p>
    <div className={`grid grid-cols-12 gap-4 `} >
      {topRated&& topRated.map((item)=>(
        <div className='sm:col-span-12 smx:col-span-6 lg:col-span-4 relative'   key={item.id} >
          <div className={`col-span-4  ${styles.cover} overflow-hidden  rounded-lg `}>
          <img className="rounded-lg trans h-[270px] w-full" src={item.images[0].url} alt="" />
          </div >
          <div className="text-white absolute left-0 top-2/3 px-4 ">
            <p>{item.title}</p>
            <p>{item.avg_review}</p>
          </div>
        </div>
      ))}

    </div>
   </div>

   {/* How it work */}
   <div className="my-16 ">
    <h2 className="bold text-2xl text-center mb-2">how it work?</h2>
    <p className=" text-lg text-center mb-6">Keep calm & travel on</p>

    <div className="grid sm:grid-cols-12 sm:gap-4 relative mx-auto">

      <div className="sm:col-span-12 smx:col-span-6 lg:col-span-4">
        <img className="sm:w-full lg:w-3/4 mb-4 " src='https://backend.smartvision4p.com/hotel/public/storage/abouts/112/relax.webp' alt="" />
        <h3 className="font-semibold text-lg text-center">Book & relax</h3>
        <p className="w-3/4 text-gray-400 text-center">Let each trip be an inspirational journey, each room a peaceful spac</p>
      </div>

      <div className="sm:col-span-12 smx:col-span-6 lg:col-span-4">
        <img className="sm:w-full lg:w-3/4 mb-4" src="https://backend.smartvision4p.com/hotel/public/storage/abouts/113/smart.webp" alt="" />
        <h3 className="font-semibold text-lg text-center">Smart checklist</h3>
        <p className="w-3/4 text-gray-400 text-center">Let each trip be an inspirational journey, each room a peaceful spac</p>
      </div>

      <div className="sm:col-span-12 smx:col-span-6 lg:col-span-4">
        <img className="sm:w-full lg:w-3/4 mb-4" src="https://backend.smartvision4p.com/hotel/public/storage/abouts/114/save.webp" alt="" />
        <h3 className="font-semibold text-lg text-center">Save more time with us</h3>
        <p className="w-3/4 text-gray-400 text-center">Let each trip be an inspirational journey, each room a peaceful spac</p>
      </div>

      <div className="absolute top-1/4">
  <img src="http://localhost:3001/static/media/dashed.2a56b4d0aa5690494df25bc0b2bb3bf6.svg" alt="" />
</div>
    </div>


   </div>


   {/* reviews */}
 
 <Review />

 {/* <Facts /> */}

 {/* read */}
 <Read />




    </>
  );
}

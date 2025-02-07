import React, {useState, useEffect } from "react";
import image1 from "./../../assets/places imgs/1.jpg";
import image2 from "./../../assets/places imgs/2.jpg";
import image3 from "./../../assets/places imgs/3.jpg";
import image4 from "./../../assets/places imgs/4.jpg";
import image5 from "./../../assets/places imgs/5.jpg";
import image6 from "./../../assets/places imgs/6.jpg";
import image7 from "./../../assets/places imgs/7.jpg";
import image8 from "./../../assets/places imgs/8.jpg";
import image9 from "./../../assets/places imgs/9.jpg";
import image10 from "./../../assets/places imgs/10.jpg";
import image11 from "./../../assets/places imgs/11.jpg";
import image12 from "./../../assets/places imgs/12.jpg";
import image13 from "./../../assets/places imgs/13.jpg";
import image14 from "./../../assets/places imgs/14.jpg";
import ImageCard from "../../Components/ImageCard/ImageCard";
import { Helmet } from "react-helmet-async";

const images =[
   image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
]
const images_1 = [

  image4, 
  image10,
  image12,
  image14,
];

const images_2 = [
   image5,
  image7,
  image9,
]



export default function Places() {
  const [currentType, setCurrentType] = useState("all");
  const [selectedImage ,setSelectedImage] = useState();

function handleImageClick(image){
  setSelectedImage(image)
}

function cancelImageClick(){
  setSelectedImage(null)
}


  console.log(selectedImage);
  

  function setTypeByRoom() {
    setCurrentType("rooms");
  }

  function setTypeService() {
    setCurrentType("services");
  }

  useEffect(() => {
    setTypeByRoom(), setTypeService();
  }, []);

  return (
    <>
      <Helmet>
        <title>Places</title>
        <meta name='description' content='welcome to about page' />
        </Helmet>
      <div className="card text-center relative  md:mt-2 md:pt-2 ">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs flex justify-center gap-4">
            <li className="nav-item bg-cyan-500 rounded-md text-white px-3 py-2 font-semibold ">
              <a
                className={`nav-link ${
                  currentType === "all" ? "active" : ""
                } aria-current="true`}
                href="#all"
                onClick={()=>setCurrentType('all')}
              >
                All
              </a>
            </li>

            <li className="nav-item bg-cyan-500 rounded-md text-white px-3 py-2 font-semibold">
              <a
                className={`nav-link  ${
                  currentType === "rooms" ? "active" : ""
                } `}
                onClick={setTypeByRoom}
                href="#rooms"
              >
                rooms
              </a>
            </li>
            <li className="nav-item bg-cyan-500 rounded-md text-white px-3 py-2 font-semibold">
              <a
                className={`nav-link  ${
                  currentType === "services" ? "active" : ""
                } `}
                onClick={setTypeService}
                href="#services"
              >
                service
              </a>
            </li>
          </ul>
        </div>

        <div className="card-body grid grid-cols-12 gap-4 relative">
       
        {currentType === 'all'?  (
              images.map((image, index) => (
                <div className="sm:col-span-12 md:col-span-6 lg:col-span-3 h-[200px] w-full mb-2 ">
                  <img onClick={()=>handleImageClick(image)} src={image} key={index} className="h-full w-full" alt="" />
                </div>
              )) ) :''
        }

        {currentType === 'rooms'?(
  images_2.map((image, index) => (
    <div className="sm:col-span-12 md:col-span-6 lg:col-span-3 h-[200px] w-full mb-2 ">
      <img onClick={()=>handleImageClick(image)} src={image} className="h-full w-full" key={index} alt="" />
    </div>
  )) ) :''
        }

        
{currentType === 'services'?(
  images_1.map((image, index) => (
    <div className="sm:col-span-12 md:col-span-6 lg:col-span-3 h-[200px] w-full mb-2">
      <img onClick={()=>handleImageClick(image)} src={image} className="h-full w-full" key={index} alt="" />
    </div>
  )) ) :''
        }
          

         
        </div>

        {selectedImage && (
        <div className="grid grid-cols-12">
         {/* {selectedImage} */}
         <i className="fa-regular fa-circle-xmark absolute right-[30%] z-10 top-9 text-2xl text-white " onClick={cancelImageClick}></i>
         <img src={selectedImage} className=" top-5 left-[20%] w-[40vw] h-[50vh] absolute shadow-lg" alt="" />

          </div>
        )
        }
      </div>

    </>
  );
}

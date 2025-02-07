import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Contactus() {
  const notify = () => toast.info("You have signed up !");
  // const emaiRef = useRef();
  const count = useRef(0);
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  useEffect(()=>{
    count.current= count.current +1;
  })

  function handleSubmit(e){
    e.preventDefault();
    console.log('submit form....');
    
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .min(3, "Name must be at least 3 characters")
      .max(8, "Name must be at most 3 characters"),
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
      password:Yup.string().required("password is required").matches(passwordRegex,"password should start with uppercase letter followed by combination of letters and numbers between 8 and 15"),
      repassword:Yup.string().required("repassword is required").oneOf([Yup.ref("password")],"password and repassword should be the same")
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      text: "",
    },
    validationSchema,
    
  });
  //  emaiRef.current.focus();
  // console.log(emaiRef.current);
const navigateToLogin = setTimeout(()=>{
   
  navigate('/login');
  notify();
  
},5000)
 
  
  return (
    <>
     <Helmet>
        <title>Contact us</title>
        <meta name='description' content='welcome to about page' />
        </Helmet>
      <h2 className="mb-6 font-bold text-2xl  md:mt-2 md:pt-2 ">Contact Us</h2>
      <div className="grid grid-cols-12 gap4 mb-6">
        <div className="sm:col-span-12  lg:col-span-6 ">
          <ul className="flex flex-col justify-center py-8">
            <li className="flex items-center gap-2 mb-6">
              <i class="fa-solid fa-location-dot text-cyan-500"></i>
              <p>Egypt - Cairo</p>
            </li>
            <li className="flex items-center gap-2 mb-6">
              <i className="fa-solid fa-phone  text-cyan-500"></i>
              <p>0109954487</p>
            </li>

            <li className="flex items-center gap-2 mb-6">
              <i className="fa-solid fa-envelope  text-cyan-500"></i>
              <p>nouramer295@gmail.com</p>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-12  lg:col-span-6">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
            // ref={emaiRef}

            autoFocus
              className="border border-gray-400 px-3 py-1 rounded-2xl w-5/6 mb-4"
              type="text"
              placeholder="enter your name"
              name="name"
              // onChange ={(e)=> setName(e.target.value)}
              // onChange={(e)=> {setName(errorMsg.target.value)}}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="text-red-600 font-semibold my-1">
                *{formik.errors.name}
              </div>
            ) : (
              ""
            )}
            <input
              className="border border-gray-400 px-3 py-1 rounded-2xl w-5/6 mb-4"
              type="text"
              placeholder="enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-600 font-semibold my-1">
                 {/* {emaiRef.current.focus()} */}
                *{formik.errors.email}
              </div>
            ) : (
              ""
            )}

<input
              className="border border-gray-400 px-3 py-1 rounded-2xl w-5/6 mb-4"
              type="text"
              placeholder="enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="text-red-600 font-semibold my-1">
                 {/* {emaiRef.current.focus()} */}
                *{formik.errors.password}
              </div>
            ) : (
              ""
            )}


<input
              className="border border-gray-400 px-3 py-1 rounded-2xl w-5/6 mb-4"
              type="text"
              placeholder="confirm password"
              name="repassword"
              value={formik.values.repassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.repassword && formik.touched.repassword ? (
              <div className="text-red-600 font-semibold my-1">
                 {/* {emaiRef.current.focus()} */}
                *{formik.errors.repassword}
              </div>
            ) : (
              ""
            )}
            <textarea
              className="border resize-none border-gray-400 px-3 py-1 rounded-2xl w-5/6 mb-4 text-gray-400"
              rows="6"
              name=""
              id=""
            >
              message
            </textarea>

            <button onClick={navigateToLogin} className="bg-cyan-500 rounded-full w-5/6 text-white font-bold px-3 py-2">
              Send
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
}

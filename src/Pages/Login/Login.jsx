import React from 'react'
import { Formik } from 'formik';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from 'react-toastify';

export default function Login() {
    const notify = () => toast.info("You have logged in !");

    const navigate = useNavigate();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    const validationSchema = Yup.object({

      email: Yup.string()
        .required("email is required")
        .email("email is not valid"),
          password:Yup.string().required("password is required").matches(passwordRegex,"password should start with uppercase letter followed by combination of letters and numbers between 8 and 15")
    });
  
    const formik = useFormik({
      initialValues: {
       
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit:( values)=> {
      
         notify();
        setTimeout(()=>{
          navigate('/home')
          
        },2000)
       }
      
    });
  return (
   <>
    <Helmet>
       <title>Login</title>
       <meta name='description' content='welcome to about page' />
       </Helmet>
   <form className='flex flex-col items-center mt-8 w-4/5 mx-auto' onSubmit={formik.handleSubmit}>
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

     <button  className='bg-cyan-500 rounded-full  text-white font-bold px-5 py-2 w-fit'> Login</button>
     <ToastContainer />
   </form>
   </>
  )
}

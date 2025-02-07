import React from 'react'
import Read from '../../Components/Read/Read'
import Restaurant from '../../Components/Restaurant/Restaurant'
import Features from '../../Components/Features/Features'
import OurFomfort from '../../Components/OurFomfort/OurFomfort'
import Policies from '../../Components/Policies/Policies'
import { Helmet } from "react-helmet-async";


export default function Aboutus() {
  return (
    <>
    <Helmet>
    <title>About us</title>
    <meta name='description' content='welcome to about page' />
    </Helmet>

    <Restaurant />
    <Features />
    <Read />
    <OurFomfort />
    <Policies />
    </>
  )
}

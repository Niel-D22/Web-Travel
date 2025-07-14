import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {Outlet} from "react-router-dom"
import Footer from '../../components/footer/Footer'
import Places from '../../components/Places/Places'
import Home from '../../assets/pages/Home'



const Layout = () => {
  return (
    <>
    <Navbar/>

    <Outlet/>

    </>
  )
}

export default Layout
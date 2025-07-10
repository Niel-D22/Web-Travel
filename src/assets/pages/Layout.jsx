import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {Outlet} from "react-router-dom"
import Footer from '../../components/footer/Footer'
import Places from '../../components/Places/Places'

const Layout = () => {
  return (
    <>
    <Navbar/>
<Places/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
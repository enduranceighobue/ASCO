import React from 'react'
import Navbar from '../pages/Navbar'
import { Outlet } from 'react-router'
import Footer from '../pages/Footer'

export default function RootLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
       <Footer/>
    </div>
  )
}
import React from 'react'
import Navbar from '../pages/Navbar'
import { Outlet } from 'react-router'
import Footer from '../pages/Footer'
import ScrollToTop from './ScrollToTop.jsx'

export default function RootLayout() {
  return (
    <div>
      <ScrollToTop/>
        <Navbar/>
        <Outlet/>
       <Footer/>
    </div>
  )
}
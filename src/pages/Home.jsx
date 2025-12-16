import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutUs from './AboutUs'
import WhatWeDoSwipe from '../components/WhatWedoSwipe'




const Home = () => {
  
  
  
    return (
    <div className='home'>
       <Navbar/> 
        <Hero/>
        <AboutUs/>
        <WhatWeDoSwipe/>
      
        
    </div>
  )
}

export default Home
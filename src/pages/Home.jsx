import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Quality from './Quality'
import WhatWeDoSwipe from '../components/WhatWedoSwipe'




const Home = () => {
  
  
  
    return (
    <div className='home'>
       <Navbar/> 
        <Hero/>
        <AboutUs/>
        <WhatWeDoSwipe/>
       <Quality/>
        
    </div>
  )
}

export default Home
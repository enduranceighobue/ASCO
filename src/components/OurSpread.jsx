import React from 'react'
import ourspreadimg from "../assets/spreadimgone.png";
import ourspreadimgtwo from "../assets/spreadimgtwo.png";
import AboutHero from './AboutHero';



const OurSpread = () => {


  return (
    <>
   <AboutHero/>
    
      <div className="w-full  flex flex-col items-center bg-[#F1F5F9] p-4">
        {/* Container for images */}
        <div className="w-full max-w-4xl flex flex-col gap-6">
          {/* Top Image */}
          <div className="w-full">
            <img
              src={ourspreadimg}
              alt="Top"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <section className='bg-[#ffffff] w-full  flex flex-col items-center p-4'>
        <div>
          <div className='container w-[90%] mx-auto py-16 space-y-6'>


            <h1 className='md:text-4xl font-bold text-center '>Nationwide Presence You Can   Rely On.</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              With operations across <span className='text-[#0080bb] font-bold text-l'>36 states</span> and over <span className='text-[#0080bb] font-bold text-l'>47 cities</span>, <span className='text-[#0080bb] font-bold text-l'>ASCO</span> ensures rapid deployment and consistent service delivery nationwide.
            </p>
          </div>



          <div className="w-full bg-[#ffffff]">
            <img
              src={ourspreadimgtwo}
              alt="Bottom"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        <div className='"min-h-screen overflow-hidden w-full  py-16 flex flex-col items-center px-6'>
          <h2 className="text-4xl  text-[#1d2140] font-bold mb-6">
            Ready to secure your organisation
          </h2>

          <p className='text-[20px] text-[#050505]'>
            Partner with ASCO for nationwide protection, rapid deployment, and local teams in key
          </p>

          <p className='text-[20px] text-[#050505]'>cities.</p>
          <button
            type="submit"
            className="w-fit mx-auto bg-[#0080bb] cursor-pointer mt-10 text-white py-2 px-6 rounded-full  hover:bg-[#005f9a] transition"
          >
            Request a Security Assessment
          </button>
        </div>
      </section>

    </>

  )
}

export default OurSpread
import React from 'react'
import mediaone from "../assets/mediaone.png";
import mediatwo from "../assets/mediatwo.png";
import mediathree from "../assets/mediathree.png";
import AboutHero from './AboutHero';



const Media = () => {


  return (
    <>
     <AboutHero/>
    
    <section className='mt-40'>
      <div className="w-full  flex flex-col items-center bg-[#ffffff] p-4 ">
        {/* Container for images */}
        <div className="w-full max-w-4xl flex flex-col gap-6 ">
          {/* Top Image */}

          <div className='container w-[90%] mx-auto py-16 space-y-4'>


            <h1 className='md:text-4xl font-bold text-center '>Training & Operations Room.</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto ">
              Our officers undergo continuous training.
            </p>
          </div>
          <div className="w-full ">
            <img
              src={mediaone}
              alt="Top"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <section className='bg-[#ffffff] w-full  flex flex-col items-center p-4'>
        <div>
          <div className='container w-[90%] mx-auto py-16 space-y-6'>


            <h1 className='md:text-4xl font-bold text-center '>AWARDS, CERTIFICATES, TROPHIES.</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Awards that reflect our pursuit of quality.
            </p>
          </div>



          <div className="w-full bg-[#ffffff]">
            <img
              src={mediatwo}
              alt="Bottom"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        <div className='"min-h-screen overflow-hidden w-full  py-16 flex flex-col items-center px-6'>
          <h2 className="md:text-5xl  text-[#1d2140] font-bold mb-3">
            Electronic Device Installations
          </h2>

          <p className='text-[20px] text-[#050505]'>
            Modern systems installed by trained specialists
          </p>

        </div>
      </section>

      <section className='bg-[#ffffff] w-full  flex flex-col items-center p-4'>
        <div>
      
          <div className="w-full bg-[#ffffff]">
            <img
              src={mediathree}
              alt="Bottom"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        <div className='"min-h-screen overflow-hidden w-full  py-16 flex flex-col items-center px-6'>
          <h2 className="text-4xl  text-[#1d2140] font-bold ">
            Ready to secure your organisation
          </h2>

          <button
            type="submit"
            className="w-fit mx-auto bg-[#0080bb] cursor-pointer mt-10 text-white py-2 px-6 rounded-full  hover:bg-[#005f9a] transition"
          >
            Request a Security Assessment
          </button>
        </div>
      </section>

      </section>
    </>

  )
}

export default Media
import React from "react";
import Security from "../assets/securityfile.png"; // use transparent PNG / properly cropped guard
import Mediabg from "../assets/mediabg.png";
import { div } from "framer-motion/client";
import aboutbg from "../assets/aboutbg.svg";





export default function MediaHero() {
  return (
    <div className="  bg-[#1D2140] ">
    <section className="relative w-full md:h-[300px] overflow-hidden mx-auto container ">
      {/* BACKGROUND IMAGE + OVERLAY */}
      <div className="absolute   h-full  " />
            <img
              src={aboutbg}
              alt=""
              className="absolute -right-10   object-cover w-100 h-100 md:block hidden"
            />
            <div />

      {/* HERO CONTENT */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 text-center pt-16 md:pt-24 pb-6">
       <h1 className=" md:text-4xl font-bold text-white mb-4">
        Media & Gallery
       </h1>
        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto opacity-60">
          A visual look at our training, achievements, and technology.
        </p>
      </div>

     

      {/* ANGLED WHITE SECTION (clip-path) */}
      <div/>

      {/* CCTV ICON */}
      

      {/* small spacer so section doesn't overlap next content too much */}
      {/* <div className="relative z-0 h-[160px] bg-black" /> */}
    </section>
    </div>
  );
}

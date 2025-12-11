import React from "react";
import aboutherobg from "../assets/aboutherobg.png";
import aboutbg from "../assets/aboutbg.svg";

export default function AboutHero() {
  return (
    <div className="  bg-[#1D2140] ">

      <section className="relative mx-auto container w-full md:h-[650px] overflow-hidden">
      {/* BACKGROUND IMAGE + OVERLAY */}
      <div className="absolute   h-full  " />
     <img
              src={aboutbg}
              alt=""
              className="absolute -right-10 top-65   object-cover  w-120 h-100"
            />
      <div />

      {/* HERO CONTENT */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 text-center pt-16 md:pt-24 pb-6">
        <h1 className=" md:text-4xl font-bold text-white mb-4">
          About Ashaka Security Company 
        </h1>
        <h1 className=" md:text-4xl font-bold text-white mb-4">
          (ASCO)
        </h1>
        <p className="text-white  md:text-xl max-w-3xl mx-auto opacity-60">
         Reliable, professional, and technology-driven security solutions built on over five decades of excellence.
        </p>

      </div>

     <div className=" mx-auto container">
      

             <img
        src={aboutherobg}
        alt=""
        className="absolute   object-cover bottom-10 right-50 "
      />
     </div>
    </section>
    </div>
  );
}

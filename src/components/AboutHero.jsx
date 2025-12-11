import React from "react";
import Security from "../assets/securityfile.png"; // use transparent PNG / properly cropped guard

export default function AboutHero() {
  return (
    <section className="relative w-full md:h-[250px] overflow-hidden bg-[#1D2140]">
      {/* BACKGROUND IMAGE + OVERLAY */}
      <div
        className="absolute inset-0 -z-20 bg-white h-full"    
      />
      
      <div/>

      {/* HERO CONTENT */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 text-center pt-16 md:pt-24 pb-6">
       
        
      </div>

     

      {/* ANGLED WHITE SECTION (clip-path) */}
      <div/>

      {/* CCTV ICON */}
      

      {/* small spacer so section doesn't overlap next content too much */}
      {/* <div className="relative z-0 h-[160px] bg-black" /> */}
    </section>
  );
}

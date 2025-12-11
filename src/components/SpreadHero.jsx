import React from "react";
import Security from "../assets/securityfile.png"; // use transparent PNG / properly cropped guard
import aboutbg from "../assets/aboutbg.svg";

export default function ServiceHero() {
  return (
    <section className="relative w-full md:h-[270px] overflow-hidden bg-[#1D2140]">
      {/* BACKGROUND IMAGE + OVERLAY */}
      <div className="absolute   h-full  " />
      <img
        src={aboutbg}
        alt=""
        className="absolute -right-10   object-cover  w-100 h-100"
      />
      <div />

      {/* HERO CONTENT */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 text-center pt-16 md:pt-24 pb-6">
        <h1 className="md:text-4xl font-bold text-white mb-4">
          Our Spread
        </h1>
        <p className="text-white  md:text-xl max-w-3xl mx-auto opacity-60">
         Protecting organizations across Nigeria for over 56 years.
        </p>

       
      </div>

      {/* ANGLED WHITE SECTION (clip-path) */}
      <div />

      {/* CCTV ICON */}

      {/* small spacer so section doesn't overlap next content too much */}
      {/* <div className="relative z-0 h-[160px] bg-black" /> */}
    </section>
  );
}

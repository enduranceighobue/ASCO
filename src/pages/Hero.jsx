import React from "react";
import Cctv from "../assets/bxs_cctv.png";
import Herobg from "../assets/ascohero.png";
import Security from "../assets/securityfile.png"; // use transparent PNG / properly cropped guard

export default function Hero() {
  return (
    <section className="relative w-full md:h-[670px] overflow-hidden">
      {/* BACKGROUND IMAGE + OVERLAY */}
      <div
        className="absolute inset-0 -z-20 bg-center bg-cover h-full"
        style={{
          backgroundImage: `url(${Herobg})`,
          // optionally tweak background-position to match your screenshot
          //   backgroundPosition: "center top",
        }}
      />
      {/* darkening overlay so text pops */}
      <div className="absolute inset-0 -z-10 bg-[#1D2140BF]" />

      {/* HERO CONTENT */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 text-center pt-16 md:pt-24 pb-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl animate__animated animate__fadeInDown font-semibold mt-4 text-white">
          Security Built on Trust. <br />
          Protection Backed by Expertise.
        </h1>

        <div className="mt-4">
          <p className=" max-w-2xl mx-auto text-white/90 animate__animated animate__fadeInUp text-sm md:text-lg ">
            Professional security officers, advanced surveillance systems,
          </p>

          <p className="max-w-2xl mx-auto text-white/90 text-sm animate__animated animate__fadeInUp md:text-lg">
            and 24/7 emergency response protecting organizations nationwide.
          </p>
        </div>

        <button className="mt-7 inline-block bg-[#0ea5e9] text-white px-6 py-2 rounded-full hover:bg-blue-500 transition">
          Request Assessment
        </button>
      </div>

      {/* FOREGROUND GUARD - absolute so it overlaps the diagonal white shape */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-40 -bottom-20 md:-bottom-28 lg:-bottom-2 hidden md:block">
        <img
          src={Security}
          alt="Security Guard"
          className="w-[220px] md:w-[320px] lg:w-[250px] object-contain"
          style={{ display: "block" }}
        />
      </div>

      {/* ANGLED WHITE SECTION (clip-path) */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 hidden md:block"
        style={{
          height: "350px",
          // polygon creates the diagonal triangular cut like screenshot
          clipPath: "polygon(0 25%, 50% 100%, 100% 25%, 100% 100%, 0% 100%)",
          background: "white",
        }}
      />

      {/* CCTV ICON */}
      <div className="absolute bottom-7 left-6 z-50 md:block hidden ">
        <img src={Cctv} alt="cctv" className="" />
      </div>

      {/* small spacer so section doesn't overlap next content too much */}
      {/* <div className="relative z-0 h-[160px] bg-black" /> */}
    </section>
  );
}

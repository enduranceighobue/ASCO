import React from "react";
import aboutImg from "../assets/image.png"; // Replace with your own image
import WhoWeAre from "./WhoWeAre";
import Mission from "./Mission";
import { Wheat } from "lucide-react";
import WhatWeDoSwiper from "./WhatWeDoSwiper";
// import HeroSection from "./HeroSection";
import AboutHero from "./AboutHero";

const About = () => {
  return (
    <>
      <div className="">
        {/* <HeroSection/> */}
        <AboutHero/>
        <WhoWeAre />
        <Mission />
        <WhatWeDoSwiper />
      </div>
      
    </>
  );
};

export default About;

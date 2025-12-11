import React from "react";
import aboutImg from "../assets/image.png"; // Replace with your own image
import WhoWeAre from "./WhoWeAre";
import Mission from "./Mission";
import { Wheat } from "lucide-react";
import WhatWeDoSwiper from "./WhatWeDoSwiper";
// import HeroSection from "./HeroSection";

const About = () => {
  return (
    <>
      <div className="">
        {/* <HeroSection/> */}
        <WhoWeAre />
        <Mission />
        <WhatWeDoSwiper />
      </div>
      
    </>
  );
};

export default About;

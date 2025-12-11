import React from "react";
import aboutImg from "../assets/image.png"; // Replace with your own image
import WhoWeAre from "./WhoWeAre";
import Mission from "./Mission";
import { Wheat } from "lucide-react";
import WhatWeDoSwiper from "./WhatWeDoSwiper";
import AboutHero from "./AboutHero";

const About = () => {
  return (
    <>
      <div className="">
        <AboutHero/>
        <WhoWeAre />
        <Mission />
        <WhatWeDoSwiper />
      </div>
      {/* <section className="container mx-auto px-4 py-20 overflow-hidden mt-20"> */}
      {/* Header */}
      {/* <div className="text-center mb-14">
        <h2 className="text-4xl lg:text-5xl font-bold animate__animated  animate__backInDown text-[#0c2b63] tracking-tight">
           Ashaka Security Company
        </h2>
        <h2 className="text-4xl lg:text-5xl animate__animated  animate__backInDown font-bold text-[#0c2b63] tracking-tight">
          (ASCO) Limited
        </h2>
        <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
          ...Your Total Security Company!
        </p>
      </div> */}

      {/* <div className="flex flex-col md:flex-row items-center gap-12"> */}
      {/* Left Side – Image */}
      {/* <div className="md:w-1/2">
          <img
            src={aboutImg}
            alt="About ASCO LTD"
            className="rounded-xl shadow-xl object-cover w-full max-h-[450px]"
          />
        </div> */}

      {/* Right Side – Content */}
      {/* <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold text-[#0c2b63]">
            Who We Are
          </h3> */}

      {/* <p className="text-gray-700 leading-relaxed">
            ASCO LTD is a trusted provider of professional security,
            industrial manpower, and specialized facility services. With years
            of excellence, we are committed to delivering high-quality solutions
            tailored to the unique needs of our clients across multiple sectors.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our operations are built on strong values — integrity, discipline,
            accountability, and continuous improvement. We combine trained
            personnel, modern technologies, and industry-standard procedures to
            ensure maximum efficiency and safety.
          </p> */}

      {/* <h3 className="text-2xl font-bold text-[#0c2b63] mt-6">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To provide exceptional security and industrial services that
            guarantee safety, reliability, and peace of mind for all our
            clients.
          </p> */}

      {/* <h3 className="text-2xl font-bold text-[#0c2b63] mt-6">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To be a leading and trusted solutions provider recognized for
            professionalism, excellence, and innovation.
          </p>
        </div>
      </div>
    </section>
      */}
    </>
  );
};

export default About;

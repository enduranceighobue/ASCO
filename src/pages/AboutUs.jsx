import React from "react";
import { CheckCircle, Shield, Clock, MapPin } from "lucide-react";
import aboutimg from "../assets/asco.jpeg";
import Vision from './Vision.jsx';


const features = [
  { icon: Shield, title: "Licensed & Certified", description: "Fully licensed security company" },
  { icon: CheckCircle, title: "Trained Personnel", description: "Highly skilled security guards" },
  { icon: Clock, title: "24/7 Service", description: "Round-the-clock protection" },
  { icon: MapPin, title: "Lagos Based", description: "Serving all of Nigeria" },
];

const customBlue = "#0C2B63";

const AboutUs = () => {
  return (
    <>
    
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-20 ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0c2b63] tracking-tight">
            About Us
          </h2>

          {/* Divider */}
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-20 h-1 bg-[#0C2B63] rounded-full"></div>
            <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={aboutimg}
                alt="Security personnel at ASCO"
                className="w-full h-[450px] object-cover transform group-hover:scale-105 duration-700"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/800x600/D3D3D3/0C2B63?text=Image+Not+Found";
                }}
              />
            </div>

            {/* Overlay Badge */}
            <div
              style={{ backgroundColor: customBlue }}
              className="absolute bottom-[-25px] right-0 px-8 py-6 rounded-tl-3xl rounded-br-3xl text-white shadow-xl"
            >
              <p className="text-5xl font-extrabold leading-none">58+</p>
              <p className="text-lg font-light">Years of Excellence</p>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-8">
            <p className="text-gray-700 text-lg">
              <strong className="text-[#0C2B63]">Ashaka Security Company (ASCO) Limited</strong> is a Federal Goverment registered and licensed security company in full compliance with all relevant laws for private security operations in Nigeria, with registration number <strong className="text-[#0C2B63]">92709</strong>
            
            </p>

            <p className="text-gray-700 text-lg">
             We are more than a regular security company. For us at <strong className="text-[#0C2B63]"> ASCO,</strong>Security Services is professionalism at its core and metric value adding. This is why the Brand and Business has transcended five decades and boast of over 90% customer retention. We have become a viable dependable Security Services partner and a proud part of our client's growth over the years.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-3 hover:bg-blue-100 cursor-pointer rounded-xl transition-all duration-300"
                >
                  <div
                    style={{ color: customBlue }}
                    className="p-3 rounded-full border-2 border-current"
                  >
                    <feature.icon className="w-6 h-6 font-bold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Vision/>
    </>
  );
};

export default AboutUs;

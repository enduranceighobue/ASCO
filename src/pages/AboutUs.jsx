import React from "react";
import { UserCheck, ShieldCheck, Clock, Zap, ArrowRight } from "lucide-react";
import aboutimg from "../assets/About.png";
import CountUpOnView from "../components/CountUpOnView";
import rectangle from "../assets/Rectangle.png";
import cctvtwo from "../assets/cctvtwo.png";
import { NavLink, Link } from "react-router-dom";




const features = [
  { icon: ShieldCheck, title: "Licensed & Certified", description: "Fully licensed security company" },
  { icon: UserCheck, title: "Trained Personnel", description: "Highly skilled security guards" },
  { icon: Clock, title: "24/7 Service", description: "Round-the-clock protection" },
  { icon: Zap, title: "Rapid Deployment Teams", description: "Serving all of Nigeria" },
];

const customBlue = "#0C2B63";

const AboutUs = () => {
  return (
    <>

      <section className="container mx-auto px-4 relative overflow-hidden sm:px-6 lg:px-10 py-20 ">
        {/* Header */}
        <div>
          <img src={cctvtwo} className="absolute bottom-0 right-0 md:block hidden" alt="" />
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
              <p className="text-5xl font-extrabold leading-none">
                <CountUpOnView end={58} />
              </p>
              <p className="text-lg font-light">Years of Excellence</p>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-8 container">
            <div className="flex gap-2 font-semibold">
              <img src={rectangle} className="w-2 h-2 mt-2 " alt="" />
              <p> About ASCO</p>
            </div>
            <p className="text-black  font-[400]">
              For over five decades, Ashaka Security Company (ASCO) Limited has delivered reliable, technology-driven security solutions across Nigeria.

            </p>

            <p className="text-black ">
              As a Federal Government–licensed security company, we combine trained personnel, advanced surveillance systems, and a customer-first mindset to protect people, property, and critical infrastructure.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2  ">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-2 p-2   hover:bg-blue-100 cursor-pointer rounded-xl transition-all duration-300"
                >
                  <div
                    style={{ color: customBlue }}
                    className=" rounded-full "
                  >
                    <feature.icon className="w-7 h-7 mb-2 font-[700] text-[#0080bb]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>

                  </div>
                  <div>

                  </div>
                </div>
              ))}
            </div>
            <Link to="/about"><button

              className="bg-[#0080bb] text-white px-6 text-sm py-2 md:mx-0 mx-5 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:bg-blue-100 hover:text-blue-800 hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More About ASCO
              <ArrowRight className="h-3 w-3" />
            </button></Link>
          </div>
        </div>

      </section>

    </>
  );
};

export default AboutUs;

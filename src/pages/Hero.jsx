import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroimg from "../assets/hero.png";

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById("demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <section
      id="home"
      className="min-h-screen bg-cover bg-center bg-no-repeat shadow-2xl rounded-xl pt-20"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="container mx-auto px-6 py-20">

        {/* Wrapper to keep text on the left with good width */}
        <div className="max-w-3xl text-left">

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-white animate__animated animate__backInDown mb-6">
            <span className="text-white block animate__animated  animate__backInDown">
              Ashaka Security Company (ASCO) Limited
            </span>
          </h1>

          {/* Sub Text */}
          <p className="text-xl md:text-[27px] text-white mb-12 leading-relaxed">
            Providing competent and efficient guard services since 1965. Trusted
            by leading corporations across Nigeria for over 58 years of
            excellence in security solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-16">
       <Link to=""><button
              onClick={scrollToDemo}
              className="bg-[#0C2B63] text-white cursor-pointer px-8 py-4 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get A Quote
              <ArrowRight className="h-5 w-5" />
            </button></Link> 

         <Link to="/service"><button
              className="text-white hover:text-blue-800 cursor-pointer font-semibold text-lg border-2 border-white px-8 py-4 hover:bg-white transition-all duration-300"
            >
              Our Services
            </button></Link>
          </div>

        </div>
      </div>
    </section>
  
    </>
  );
};

export default Hero;

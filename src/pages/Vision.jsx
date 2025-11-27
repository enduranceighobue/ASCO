import React from "react";
import eyeImage from "../assets/eyeimage.jpg"; 

const Vision = () => {
  return (
    <section className="overflow-hidden container mx-auto px-4 sm:px-6 lg:px-10 py-10 ">
      <div className="relative w-full flex flex-col md:flex-row items-start gap-10 p-10">

        {/* Left Border & Note */}
        <div className="md:w-2/3 pl-6 border-l-6 border-[#0a2342]">
          <h2 className="font-bold text-2xl text-gray-800">
            Secure your most prized assets...
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            With <span className="font-semibold text-gray-900">ASCO</span>, you enjoy
            the freedom to go about your life & business knowing you’ve got a
            partner taking care of all your security needs. We have envolved and have a place, a dynamic security application to keep up with an ever changing security environment. We are adopting the latest technology, training methodology and security processes to optimize customer value and satisfaction
          </p>
        </div>

        {/* Cards Section */}
        <div className="relative md:w-2/5 h-[330px]">

          {/* MISSION Card (Bottom) */}
          {/* MISSION Card */}
<div className="absolute bg-[#0a2342] text-white p-8 overflow-hidden rounded-2xl shadow-2xl 
     w-[380px] md:w-[420px] left-10 top-16 relative">

  {/* Vertical Side Title */}
  {/* MISSION Card */}
{/* <div className="absolute bg-[#0a2342] text-white p-8 rounded-2xl shadow-2xl 
     w-[380px] md:w-[420px] left-10 top-16 relative"> */}

  {/* Vertical Side Title on the RIGHT */}
  <h3 className="
      absolute 
      -right-6 
      top-1/2 
      -translate-y-1/2 
      rotate-90 
      text-white 
      font-bold 
      text-2xl 
      tracking-widest
    ">
    MISSION
  </h3>

  {/* Main Text */}
  <p className="text-base leading-relaxed mr-6">
    To be the leading security services company utilizing cutting-edge
    security technology, processes, and systems to meet the ever-changing
    dynamics of the security environment.
  </p>

{/* </div> */}


</div>


          {/* VISION Card (Top) */}
          <div className="absolute bg-yellow-400 overflow-hidden text-gray-900 p-8 rounded-2xl shadow-2xl w-[450px] md:w-[420px] -left-8 -top-22 flex items-start gap-3">
            
            {/* Eye Icon */}
            <img 
              src={eyeImage}
              alt="Vision Eye"
              className="w-20 h-20 object-cover rounded-full shadow"
            />

            {/* Text */}
            <div>
              <h3 className="font-bold text-2xl mb-3 tracking-wide">VISION</h3>
              <p className="text-base leading-relaxed">
                To provide measurable value-adding security services to clients that
                will increase their efficiency, growth, and profitability.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Vision;

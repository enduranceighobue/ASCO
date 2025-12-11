import React from "react";
import escort from "../assets/escort.png";
import EscortHero from "./EscortHero";
const Escort = () => {
  return (
    <>
     <EscortHero/>
    
      <section>
        <div className="w-full  flex flex-col items-center bg-[#ffffff] p-4 ">
          {/* Container for images */}
          <div className="w-full mx-auto container flex flex-col gap-6 ">
            {/* Top Image */}

            <div className="container w-[90%] mx-auto py-16 space-y-4">
              <h1 className="md:text-4xl font-bold text-center ">
                Training & Operations Room.
              </h1>
              <p className="text-center text-gray-600 max-w-2xl mx-auto ">
                Our officers undergo continuous training.
              </p>
            </div>
            <div className="w-full ">
              <img
                src={escort}
                alt="Top"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="min-h-screen w-full bg-[#eef2f6] flex justify-center items-start py-16 px-4">
          <div className="w-full max-w-6xl bg-white/0">
            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-[#1A1F36]">
                Request an Escort Service
              </h1>
              <p className="text-gray-600 mt-2">
                Please enter your correct details
              </p>
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left Section */}
              <div>
                <h2 className="text-xl font-semibold text-[#1A1F36] mb-4">
                  Your Details
                </h2>

                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Organization (Optional)"
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
              </div>

              {/* Right Section */}
              <div>
                <h2 className="text-xl font-semibold text-[#1A1F36] mb-4">
                  Service Details
                </h2>

                <div className="space-y-6">
                  <select className="w-full p-4 rounded-xl bg-white border border-gray-300 text-gray-500 focus:ring-2 focus:ring-blue-400 outline-none">
                    <option value="">Escort Type</option>
                    <option value="armed">Armed Escort</option>
                    <option value="unarmed">Unarmed Escort</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Preferred Date(s)"
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Destination / Route"
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                  />

                  <textarea
                    rows="4"
                    placeholder="Additional Details"
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                  />
                </div>
              </div>
            </form>

            {/* Submit Button */}
            <div className="flex justify-center mt-12">
              <button
                type="submit"
                className="bg-[#0080bb] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-medium"
              >
                Submit Enquiry
              </button>
            </div>
          </div>
        </div>

        <div className='"min-h-screen overflow-hidden w-full  py-16 flex flex-col items-center px-6'>
          <h2 className="text-4xl  text-[#1d2140] font-bold mb-6">
            Still have urgent needs?
          </h2>

          <p className="text-[20px] text-[#050505]">
            For immediate escort requests, call: +234 (809) 236-6841
          </p>
          <button
            type="submit"
            className="w-fit mx-auto bg-[#0080bb] cursor-pointer mt-10 text-white py-2 px-6 rounded-full  hover:bg-[#005f9a] transition"
          >
            Request Escort Service
          </button>
        </div>
      </section>
    </>
  );
};

export default Escort;

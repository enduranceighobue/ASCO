import React from "react";
import googlemap from "../assets/google.png";
import AboutHero from './AboutHero';

const ContactUs = () => {
  return (
    <>
    <AboutHero/>
    
      <div className="min-h-screen w-full bg-white flex justify-center items-center py-16 px-6">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT CARD */}
          <div className="bg-[#eef2f6] rounded-3xl p-10 relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F36] mb-6">
              Contact Information
            </h2>

            {/* Address */}
            <div className="mb-6">
              <p className="font-semibold text-[#1A1F36] flex items-center gap-2">
                📍 Head Office Address
              </p>
              <p className="text-gray-700 mt-1 leading-relaxed">
                ASCO Headquarters,
                <br />
                Amuwo-Odofin, Lagos, Nigeria.
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="mb-6">
              <p className="font-semibold text-[#1A1F36] flex items-center gap-2">
                🏢 Phone Numbers
              </p>
              <p className="text-gray-700 mt-1 leading-relaxed">
                +234 (000) 000-0000
                <br />
                +234 (000) 000-0000
              </p>
            </div>

            {/* Email */}
            <div className="mb-6">
              <p className="font-semibold text-[#1A1F36] flex items-center gap-2">
                📧 Email
              </p>
              <p className="text-gray-700 mt-1 leading-relaxed">
                info@asco.com.ng
                <br />
                support@asco.com.ng
              </p>
            </div>

            {/* Circle Decorations */}
            <div className="absolute bottom-0 right-0 flex md:block hidden">
              <div className="w-40 h-40 bg-[#6bb6d9] opacity-50  rounded-full -translate-x-3 translate-y-40 "></div>
              <div className="w-48 h-48 bg-[#0f1536] opacity-80 rounded-full translate-x-10 translate-y-10 "></div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="space-y-6">
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-[#f4f5f7]  outline-none"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-xl bg-[#f4f5f7]  outline-none"
              />

              {/* Service Type */}
              <select className="w-full p-4 rounded-xl bg-[#f4f5f7]  text-gray-600 outline-none">
                <option>Choose Service Type</option>
                <option>Escort Service</option>
                <option>Private Security</option>
                <option>Consultation</option>
              </select>

              {/* Message */}
              <textarea
                placeholder="Enter Message"
                rows="6"
                className="w-full p-4 rounded-xl bg-[#f4f5f7]  outline-none resize-none"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center mt-8">
              <button className="bg-[#0080bb] text-white px-10 py-3 rounded-full hover:bg-[#005f8a] transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='"min-h-screen overflow-hidden w-full  py-16 flex flex-col items-center px-6'>
        <h2 className="text-4xl  text-[#1d2140] font-bold mb-6">
          Our Location
        </h2>
      </div>

      <div className="w-full h-[400px] md:h-[500px] mx-auto container relative rounded-xl overflow-hidden shadow">
        {/* LIVE GOOGLE MAP */}
        <iframe
          title="Live Location Map"
          src={googlemap}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className='"min-h-screen overflow-hidden w-full  py-16 flex flex-col items-center px-6'>
        <h2 className="text-4xl  text-[#1d2140] font-bold mb-6">
          Need Immediate Assistance?
        </h2>

        <p className="text-[20px] text-[#050505]">
          Our 24/7 Control Room is available around the clock.
        </p>
        <p>☎️ +234 (809) 236-6841</p>
      </div>
    </>
  );
};

export default ContactUs;

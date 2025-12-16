import React from "react";
import Navbar from "../pages/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="container mx-auto px-4 py-20 overflow-hidden mt-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl animate__animated  animate__backInDown font-extrabold text-[#0c2b63] tracking-tight">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            We're here to answer your questions and support your needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-14">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="md:w-1/2 space-y-10">
            {/* Contact Block */}
            <div className="flex items-start gap-5">
              <div className="bg-[#0c2b63] text-white p-4 rounded-xl shadow-lg">
                <Phone size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600 mt-1">+234 809 236 6841, +234 813 354 6158 </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-[#0c2b63] text-white p-4 rounded-xl shadow-lg">
                <img className="w-6 h-8" src="https://media.istockphoto.com/id/1395757652/photo/hashtag-sign-symbol-in-social-media-notification-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=VWLYkvDcASbpsu175x8XmkodWyy3WO2IFp4K3NyGzAc=" alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">WhatApp Us</h3>
                <p className="text-gray-600 mt-1">+234 809 236 6841 </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-[#0c2b63] text-white p-4 rounded-xl shadow-lg">
                <Mail size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600 mt-1">info@yourcompany.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-[#0c2b63] text-white p-4 rounded-xl shadow-lg">
                <MapPin size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Office Address</h3>
                <p className="text-gray-600 mt-1">
                  Plot 2156, 39A, Festac Link Road Amuwo-Odofin. Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="md:w-1/2">
            <div className="backdrop-blur-xl bg-white/70 p-8 rounded-2xl shadow-2xl border border-gray-200">
              <h3 className="text-3xl font-bold text-[#0c2b63] mb-6">Send a Message</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#0c2b63] focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#0c2b63] focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Message</label>
                  <textarea
                    className="w-full p-3 border rounded-lg shadow-sm h-32 resize-none focus:ring-2 focus:ring-[#0c2b63] focus:outline-none"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0c2b63] text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#0a1f49] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;

import React from "react";
import cctv from "../assets/bxs_cctv.png";

const SecurityAssessmentForm = () => {
  return (
    <>
   
    <section className="w-full py-20 mt-10 flex flex-col mx-auto container  relative items-center bg-white">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black">
        Ready to Strengthen Your Security?
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 text-center mt-3 max-w-3xl">
        Partner with ASCO for trained personnel, advanced systems, and dependable
        protection for your facility.
      </p>

      {/* Form */}
      <form
        className="w-full max-w-xl mt-12 flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-gray-100 py-4 px-5 rounded-xl outline-none"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-100 py-4 px-5 rounded-xl outline-none"
        />

        {/* Dropdown */}
        <select className="w-full bg-gray-100 py-4 px-4 pr-12 rounded-xl outline-none text-gray-600">
          <option value="">Choose Service Type</option>
          <option value="security_systems">Security Systems</option>
          <option value="trained_personnel">Trained Personnel</option>
          <option value="facility_protection">Facility Protection</option>
        </select>

        {/* Message */}
        <textarea
          placeholder="Enter Message"
          rows={4}
          className="w-full bg-gray-100 py-4 px-5 rounded-xl outline-none resize-none"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="w-fit mx-auto bg-[#0080bb] cursor-pointer mt-3 text-white py-2 px-6 rounded-full  hover:bg-[#005f9a] transition"
        >
          Request a Security Assessment
        </button>
      </form>

      <div className="absolute top-2 left-0 md:block hidden">
        <img src={cctv} alt="" />
      </div>
    </section>
    </>
  );
};

export default SecurityAssessmentForm;

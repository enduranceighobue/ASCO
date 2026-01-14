import React, { useState } from "react";
import cctv from "../assets/bxs_cctv.png";

const SecurityAssessmentForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xykkzzgj", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <section className="w-full md:py-20 md:mt-10 flex flex-col mx-auto container relative items-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black">
        Ready to Strengthen Your Security?
      </h2>

      <p className="text-gray-600 text-center mt-3 max-w-3xl">
        Partner with ASCO for trained personnel, advanced systems, and dependable
        protection for your facility.
      </p>

      {submitted ? (
        <div className="mt-12 text-center p-10 bg-gray-100 rounded-2xl">
          <h3 className="text-2xl font-bold text-black mb-4">Thank you!</h3>
          <p className="text-gray-700">
            Your request has been sent successfully. We’ll contact you shortly.
          </p>
        </div>
      ) : (
        <form
          className="w-full max-w-xl mt-12 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-gray-100 py-4 px-5 rounded-xl outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full bg-gray-100 py-4 px-5 rounded-xl outline-none"
          />

          {/* Service Type */}
          <select
            name="service"
            required
            className="w-full bg-gray-100 py-4 px-4 pr-12 rounded-xl outline-none text-gray-600"
          >
            <option value="">Choose Service Type</option>
            <option value="security_systems">Security Systems</option>
            <option value="trained_personnel">Trained Personnel</option>
            <option value="facility_protection">Facility Protection</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Enter Message"
            rows={4}
            required
            className="w-full bg-gray-100 py-4 px-5 rounded-xl outline-none resize-none"
          />

          {/* Hidden fields for Formspree */}
          <input type="hidden" name="_subject" value="Security Assessment Request" />
          <input type="hidden" name="_replyto" value="" />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-fit mx-auto bg-[#0080bb] cursor-pointer md:mt-3 text-white py-2 md:mb-0 mb-10 px-6 rounded-full hover:bg-[#005f9a] transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Request a Security Assessment"}
          </button>
        </form>
      )}

      <div className="absolute top-2 left-0 md:block hidden">
        <img src={cctv} alt="CCTV" />
      </div>
    </section>
  );
};

export default SecurityAssessmentForm;


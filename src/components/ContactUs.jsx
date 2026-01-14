import React from "react";
import { useState } from "react";
import googlemap from "../assets/google.png";
import ContactHero from "./ContactHero";

const ContactUs = () => {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    }
  };


  return (
    <>
      <ContactHero />
      
      {/* CONTACT SECTION */}
      <div className="min-h-screen w-full bg-white flex justify-center items-center py-16 px-6">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div className="bg-[#eef2f6] rounded-3xl p-10 relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F36] mb-6">
              Contact Information
            </h2>

            <div className="mb-6">
              <p className="font-semibold flex items-center gap-2">📍 Head Office Address</p>
              <p className="text-gray-700 mt-1">
                ASCO Headquarters,<br />
                Amuwo-Odofin, Lagos, Nigeria.
              </p>
            </div>

            <div className="mb-6">
              <p className="font-semibold flex items-center gap-2">🏢 Phone Numbers</p>
              <p className="text-gray-700 mt-1">
                +234 (704) 603-5547<br />
                +234 (902) 807-7364
              </p>
            </div>

            <div className="mb-6">
              <p className="font-semibold flex items-center gap-2">📧 Email</p>
              <p className="text-gray-700 mt-1">
                info@ashakasecurity.com
              </p>
            </div>

            <div className="absolute bottom-0 right-0 hidden md:block">
              <div className="w-40 h-40 bg-[#6bb6d9] opacity-50 rounded-full translate-x-6 translate-y-32"></div>
              <div className="w-48 h-48 bg-[#0f1536] opacity-80 rounded-full translate-x-20 translate-y-10"></div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-8 rounded-3xl shadow-sm">

            {submitted ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-[#1d2140] mb-4">
                  Thank you!
                </h3>
                <p className="text-gray-600">
                  Your message has been sent successfully.<br />
                  We’ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-xl bg-[#f4f5f7] outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-4 rounded-xl bg-[#f4f5f7] outline-none"
                />

                <select
                  name="service"
                  required
                  className="w-full p-4 rounded-xl bg-[#f4f5f7] text-gray-600 outline-none"
                >
                  <option value="">Choose Service Type</option>
                  <option>Escort Service</option>
                  <option>Private Security</option>
                  <option>Consultation</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Enter Message"
                  rows="6"
                  required
                  className="w-full p-4 rounded-xl bg-[#f4f5f7] outline-none resize-none"
                />

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#0080bb] text-white px-10 py-3 rounded-full hover:bg-[#005f8a] transition disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="w-full h-[400px] md:h-[500px] mx-auto container relative rounded-xl overflow-hidden shadow">
       <div className="w-full md:py-16 flex flex-col items-center px-6">
        <h2 className="md:text-5xl text-xl font-bold text-[#1d2140] mb-6">
          Our Location
        </h2>
      </div>
        <iframe
          title="Live Location Map"
          src={googlemap}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* FOOTER CTA */}
      <div className="w-full py-16 flex flex-col items-center px-6">
        <h2 className="md:text-4xl text-xl font-bold text-[#1d2140] mb-6">
          Need Immediate Assistance?
        </h2>
        <p className="text-lg text-[#050505]">
          Our 24/7 Control Room is available around the clock.
        </p>
        <p className="mt-2">☎️ +234 (809) 236-6841</p>
      </div>
    </>
  );
};
export default ContactUs;
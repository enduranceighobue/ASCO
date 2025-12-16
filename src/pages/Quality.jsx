import React from "react";
import qualityImage from "../assets/ascoone.jpeg";
import red from "../assets/red.svg";
import SecurityAssessmentForm from "./SecurityAssessmentForm";

const qualityCards = [
  {
    title: "ISO 9001:2015 Certified",
    description: "Our processes comply with international quality standards and are regularly audited for effectiveness.",
  },
  {
    title: "Continuous Improvement",
    description: "We continually improve our process performance and service delivery based on feedback, audits, and reviews.",
  },
  {
    title: "Process & Service Excellence",
    description: "From recruitment to deployment, every step is documented and measured to ensure consistent, reliable security services.",
  },
  {
    title: "Safty & Compliance",
    description: "We prioritise the safety of our clients, personnel, and assets while meeting all regulatory and industry requirements.",
  },
];

const Quality = () => {
  return (
    <>
      <section className="container mx-auto px-20 ">
        <div className="text-center mb-12 ">
          <h2 className="md:text-3xl lg:text-x4l font-bold text-black mb-3">
            Our Commitment To Quality & Safety
          </h2>
          <p className="text-[17px]">Professional security solutions tailored to protect people, property, and critical</p>
          <p>operations.</p>
        </div>

        <div className="flex flex-col md:flex-row  gap-10">

          {/* LEFT — UNIFORM STRAIGHT CARDS */}
          <div className="md:w-1/2 flex flex-col gap-4 ">

            {qualityCards.map((card, index) => (

              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-5 flex gap-3   border-l-4 border-blue-600 
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mt-4">
                  <img src={red} alt="" className="w-8 " />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>


              </div>
            ))}
          </div>

          {/* RIGHT — IMAGE */}
          <div className="w-1/2 flex justify-center">
            <img
              src={qualityImage}
              alt="Quality Management"
              className="rounded-xl shadow-xl w-[500px] h-[480px] object-cover 
            hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
      <SecurityAssessmentForm />
    </>
  );
};

export default Quality;

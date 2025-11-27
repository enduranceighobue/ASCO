import React from "react";
import qualityImage from "../assets/quality2.jpeg";

const qualityCards = [
  {
    title: "ISO 9001:2015 Certified",
    description: "Our processes comply with international quality standards.",
  },
  {
    title: "Continuous Improvement",
    description: "Continual Improvements In Process Performance & Service Delivery.",
  },
  {
    title: "Customer Satisfaction",
    description: "Deliver On Agreed Customer Requirments & Expectations.",
  },
  {
    title: "Process Optimization",
    description: "Eliminate & Prevent Process & Service Non-Conformities.",
  },
 
];

const Quality = () => {
  return (
    <section className="container mx-auto px-4 overflow-hidden py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#0c2b63] tracking-tight">
          Quality Management System
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-10">
        
        {/* LEFT SIDE – STYLISH FLOATING ZIG-ZAG CARDS */}
        <div className="md:w-2/3 flex flex-col gap-8">
          {qualityCards.map((card, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`bg-white shadow-xl rounded-xl p-6 md:p-8 border-l-4 border-blue-600 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  isEven ? "md:ml-0" : "md:ml-10"
                }`}
                style={{
                  transform: `translateY(${index * 5}px)`,
                }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="md:w-1/2 flex justify-center overflow-hidden">
          <img
            src={qualityImage}
            alt="Quality Management"
            className="rounded-xl shadow-2xl w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Quality;


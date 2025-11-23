import React from "react";
import guardk9 from "../assets/guardk9.jpeg";
import guard from "../assets/guard.jpeg";
import patrol from "../assets/patrol.jpeg";
import kitted from "../assets/trainigguard.jpeg";;

import { Shield, Dog, Briefcase, Building2, Car, Users } from "lucide-react";


// Placeholder image imports (replace with your real images later)
// Example: import guard1 from "../assets/guard1.jpg";

const services = [
  {
    title: "Manned Guarding",
    desc: "Professional, trained ASCO guards ensuring safety and order.",
    img: "https://plus.unsplash.com/premium_photo-1682125942792-dbbbb1e646d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Shield,
  },
  {
    title: "Dog Handling Unit",
    desc: "Skilled K9 handlers with well-trained security dogs.",
    img: guardk9,
    icon: Dog,
  },
  {
    title: "Event Security",
    desc: "Close protection officers for high-level individuals.",
    img: guard,
    icon: Briefcase,
  },
  {
    title: "Industrial Security",
    desc: "Security solutions for factories and industrial sites.",
    img: "https://plus.unsplash.com/premium_photo-1754792065422-4f2652aaf462?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Building2,
  },
  {
    title: "Mobile Patrol",
    desc: "24/7 patrol vehicles covering assigned locations.",
    img: patrol,
    icon: Car,
  },
  {
    title: "Crowd Control",
    desc: "Well-coordinated personnel for events & gatherings.",
    img: kitted,
    icon: Users,
  },
];

export default function Specialization() {
  return (
    <section className="w-full min-h-screen bg-[#f3f4f6] py-20 px-6 text-white">
      <div className=" container mx-auto max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide text-[#0c2b63]">Specialization</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto text-[#0c2b63]">
          Providing top-tier security services backed by 56+ years of trust and expertise.
        </p>
      </div>

      <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden"
          >
            <div className="h-48 w-full bg-gray-300 overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <service.icon className="w-8 h-8 text-[#0c2b63]" />
                <h3 className="text-2xl font-semibold text-[#0c2b63]">{service.title}</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed text-[#0c2b63]">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
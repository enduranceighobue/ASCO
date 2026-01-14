import React from "react";
import ServiceHero from "../components/ServiceHero";
import { Link } from "react-router-dom";

import {
  HardHat,
  ShieldCheck,
  Calendar,
  Shield,
  Hospital,
  Factory,
} from "lucide-react";


const services = [
  {
    icon: HardHat,
    title: "",
    description:
      "Provison of trained security guards, security dogs & dog handlers.",
  },
  {
    icon: Factory,
    title: "",
    description:
      "Provision of security for large events and gatherings.",
  },
  {
    icon: Calendar,
    title: "",
    description: "Our emergency response unit delivers swift, coordinated action",
  },
  {
    icon: Shield,
    title: "",
    description:
      "Security awareness training for clients.",
  },
  {
    icon: Hospital,
    title: "",
    description: "Supply and maintenance of electronic security.",
  },

  {
    icon: ShieldCheck,
    title: "",
    description: "Executive protection and armed escorts..",
  },
];

const Service = () => {
  return (
    <>

      <ServiceHero />
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white scroll-mt-20">
        <div className="w-11/12 mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">


          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center sm:gap-8">         
             {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0080bb] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#291a06] mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-[#291a06] leading-relaxed">{service.description}</p>
              </div>
            );
          })}
          </div>
        </div>
      </section>


    </>
  )
}

export default Service;

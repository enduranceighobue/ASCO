import React from "react";
import ServiceHero from "../components/ServiceHero";

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
      
        <ServiceHero/>
      <section
        id="services"
        className="py-12 mt-20 overflow-hidden mx-auto container sm:py-16 md:py-10 px-4 sm:px-6 bg-white scroll-mt-20"
      >
        <div className="w-11/12 mx-auto md:block hidden">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 mx-27 md:mt-10  max-w-4xl text-[#1D2140] text-xl">
            <h1 className="w-full lg:w-1/2 text-[36px] font-semibold   ">
              Security solutions built around your needs.
            </h1>
            <p className="w-full lg:w-1/2 text-[16px] mt-4">
              Every organization is different. That’s why we tailor our
              protection services to the risks that matter most — your people,
              your assets, your environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:block hidden lg:grid-cols-3 mt-10 md:max-w-4xl overflow-hidden mx-27 items-center justify-items-center sm:gap-8">
            {" "}
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#f1f5f9] p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#1d2140]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#291a06] mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#291a06] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='"min-h-screen overflow-hidden w-full  py-16 flex flex-col items-center px-6'>
          <h2 className="text-4xl  text-[#1d2140] font-bold">
            Ready to secure your organisation
          </h2>
          <button
            type="submit"
            className="w-fit mx-auto bg-[#0080bb] cursor-pointer mt-6 text-white py-2 px-6 rounded-full  hover:bg-[#005f9a] transition"
          >
            Request a Security Assessment
          </button>
        </div>
      </section>
    </>
  );
};

export default Service;

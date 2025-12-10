import React from "react";
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
    title: "Finacial Security",
    description:
      "Specialized security services for banks and financial institutions.",
  },
  {
    icon: Factory,
    title: "Industrial Security",
    description:
      "Specialized protection for factories, warehouses, and industrial operations.",
  },
  {
    icon: Calendar,
    title: "Event Security",
    description: "Expert Security management for your events.",
  },
  {
    icon: Shield,
    title: "Corporate Security",
    description:
      "Comprehensive security solutions to protect corporate environments and assets.",
  },
  {
    icon: Hospital,
    title: "Healthcare Security",
    description: "Dedicated security solutions for medical facilities.",
  },

  {
    icon: ShieldCheck,
    title: "Residential Security",
    description: "Professional guard services for residential communities.",
  },
];

const Service = () => {
  return (
    <>
      

      <section
        id="services"
        className="py-12 mt-20 overflow-hidden mx-auto container sm:py-16 md:py-10 px-4 sm:px-6 bg-white scroll-mt-20"
      >
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 mx-27 mt-10  max-w-4xl text-[#1D2140] text-xl">
            <h1 className="w-full lg:w-1/2 text-[36px] font-semibold   ">
              Security solutions built around your needs.
            </h1>
            <p className="w-full lg:w-1/2 text-[16px] mt-4">
              Every organization is different. That’s why we tailor our
              protection services to the risks that matter most — your people,
              your assets, your environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-10 max-w-4xl overflow-hidden mx-27 items-center justify-items-center sm:gap-8">
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

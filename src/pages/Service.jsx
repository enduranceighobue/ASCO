import React from 'react'
import { HardHat, ShieldCheck, Calendar, Shield, Hospital, Factory } from 'lucide-react';

   const services = [
    {
      icon: HardHat,
      title: 'Finacial Security',
      description: 'Specialized Security Services For Finacial Institutions.',
    },
    {
      icon: ShieldCheck,
      title: 'Residential',
      description: 'Professional Guard Services For Residentials.',
    },
    {
      icon: Calendar,
      title: 'Event Security',
      description: 'Expert Security management for your events.',
    },
    {
      icon: Shield,
      title: 'Corporate Security',
      description: 'Comprehensive security solutions to protect your assets.',
    },
    {
      icon: Hospital,
      title: 'Healthcare Security',
      description: 'Dedicated security solutions for hospitals and healthcare facilities.',
    },
    {
      icon: Factory,
      title: 'Industrial Security',
      description: 'Specialized security services for industrial facilites.',
    },
  ];



const Service = () => {
  
  
  
  
    return (
    <>

      <section id="services" className="py-12 mt-20 sm:py-16 md:py-10 px-4 sm:px-6 bg-white scroll-mt-20">
      <div className="w-11/12 mx-auto">
       <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl animate__animated  animate__backInDown  font-extrabold text-[#291a06] tracking-tight">
            Services
          </h2>


          {/* Divider */}
          <div className="mt-4 mb-4 flex justify-center gap-2">
            <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-20 h-1 bg-[#0C2B63] rounded-full"></div>
            <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
          </div>
          <h3 className='text-xl animate__animated  animate__backInDown font-bold '>Comprehensive Security Solutions </h3>
         <p className='text-medium'>
           From Corporate Offices To Residential Estates.We Provide Tailored Security Services To Meet Diverse Client Needs. 
         </p>

        </div>
        
         

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center sm:gap-8">          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-blue-100 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0C2B63] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
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




export default Service
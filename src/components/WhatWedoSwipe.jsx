import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Icon1 from "../assets/healthicons_officer.svg";
import Icon2 from "../assets/bx_cctv.svg";
import Icon3 from "../assets/lsicon_user-crowd.svg";


 const brands = [
    "FMN",
    "7up Bottling Company",
    "Halliburton",
    "Dangote",
    "Nigerian Breweries",
    "Guinness",
    "Cadbury",
    "P&G",
  ];


const whatwedo = [
  {
    image: Icon1,
    title: 'Trained Security Guards',
    desc: 'Provision of trained security guards, security dogs & dog handlers.',
  },
  {
    image: Icon2,
    title: 'Security For Events',
    desc: "Provision of Security for large events and gatherings.",
  },
  {
    image: Icon3,
    title: 'Armed Escorts',
    desc: 'Swift, coordinated emergency response services.',
  },
  {
    image: Icon1,
    title: 'Trained Security Guards',
    desc: 'Provision of trained security guards, security dogs & dog handlers.',
  },
  {
    image: Icon2,
    title: 'Security For Events',
    desc: "Provision of Security for large events and gatherings.",
  },
  {
    image: Icon3,
    title: 'Armed Escorts',
    desc: 'Swift, coordinated emergency response services.',
  }

];


// TestimonialCard Component
const WhatWeDoCard = ({ image, title, desc }) => {
  return (
    <div
     
      className="bg-[#f1f5f9]  border-2 border-gray-300 py-4 px-4 rounded-lg  text-center space-y-2 w-[320px] lg:w-[350px]"
      style={{  height: '250px'}}
    >
      <div className="w-20 h-20 lg:w-28 lg:h-28  mx-auto">
      <img
        src={image}
        alt={`${title}'s photo`}
        className="h-full w-full rounded-full"
      />
      </div>
      <h5 className="text-xl lg:text-2xl font-semibold  text-[#0080BB]">{title}</h5>
      <p className="text-[#0080BB]">"{desc}"</p>
    </div>
  );
};


const WhatWeDoSwipe = () => {
  return (
    <div className="container w-[90%] mx-auto py-16 space-y-6 ">
      <h1 className='text-4xl font-bold text-center '>Our Security Services</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Professional security solutions tailored to protect people, property, and critical operations.
      </p>
      <Swiper
  modules={[ Autoplay]}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  breakpoints={{
    375: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1280: { slidesPerView: 3},
  }}
  navigation
  className="relative px-1"
>
  {whatwedo.map((item, index) => (
    <SwiperSlide key={index}>
      <WhatWeDoCard {...item} />
    </SwiperSlide>
  ))}
</Swiper>

  <div className='container w-[90%] mx-auto py-16 space-y-6'>

  
   <h1 className='md:text-4xl font-bold text-center '>Trusted by Leading Brands Across Nigeria</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        For over five decades, ASCO has supported top organizations with reliable security services and certified operational standards.
      </p>

      <div className="flex flex-wrap gap-3">
        {brands.map((brand) => (
          <span
            key={brand}
            className="bg-[#f1f5f9] text-[#0080bb] font-medium px-2  mx-2 py-3 rounded-full shadow-sm hover:bg-gray-200 transition-colors"
          >
            {brand}
          </span>
        ))}
      </div>
      </div>
    </div>
  );
};

export default WhatWeDoSwipe;
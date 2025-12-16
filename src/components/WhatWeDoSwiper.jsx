import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Icon1 from "../assets/healthicons_officer.svg";
import Icon2 from "../assets/bx_cctv.svg";
import Icon3 from "../assets/lsicon_user-crowd.svg";
import arrowleft from "../assets/arrowleft.svg";
import arrowright from "../assets/arrowright.svg";

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

      className="border-2 border-gray-300 py-4 px-4 bg-[#f1f5f9]  rounded-lg  text-center space-y-2 w-[320px] lg:w-[350px]"
      style={{ height: '250px' }}
    >
      <div className="w-20 h-20 lg:w-28 lg:h-28  mx-auto">
        <img
          src={image}
          alt={`${title}'s photo`}
          className="h-full w-full rounded-full  "
        />
      </div>
      <h5 className="text-xl lg:text-2xl font-semibold  text-[#0080BB]">{title}</h5>
      <p className="text-[#0080BB]">"{desc}"</p>
    </div>
  );
};


const WhatWeDoSwiper = () => {
  return (
    <div className="container w-full mx-auto py-16 px-25 space-y-12">
      <h1 className='text-5xl font-bold text-center'>What We Do</h1>
      <div className='relative '>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            375: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="relative max-w-7xl mx-auto "
        >
          {whatwedo.map((item, index) => (
            <SwiperSlide key={index}>
              <WhatWeDoCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>


        <img src={arrowleft} alt="" className='absolute top-25 left-[-62px]' />
        <img src={arrowright} alt="" className='absolute top-25 right-[-60px]' />

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

    </div>
  );
};

export default WhatWeDoSwiper;
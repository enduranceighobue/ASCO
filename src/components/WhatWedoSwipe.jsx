import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Icon1 from "../assets/healthicons_officer.svg";
import Icon2 from "../assets/bx_cctv.svg";
import Icon3 from "../assets/lsicon_user-crowd.svg";
import Quality from "../pages/Quality";
import arrowleft from "../assets/arrowleft.svg";
import arrowright from "../assets/arrowright.svg";

const brands = ["FMCGs", "Oil and Gas", "Hospitality", "Real Estate"];

const whatwedo = [
  {
    image: Icon1,
    title: "Trained Security Guards",
    desc: "Provision of trained security guards, security dogs & dog handlers.",
  },
  {
    image: Icon2,
    title: "Security For Events",
    desc: "Provision of Security for large events and gatherings.",
  },
  {
    image: Icon3,
    title: "Armed Escorts",
    desc: "Swift, coordinated emergency response services.",
  },
  {
    image: Icon1,
    title: "Trained Security Guards",
    desc: "Provision of trained security guards, security dogs & dog handlers.",
  },
  {
    image: Icon2,
    title: "Security For Events",
    desc: "Provision of Security for large events and gatherings.",
  },
  {
    image: Icon3,
    title: "Armed Escorts",
    desc: "Swift, coordinated emergency response services.",
  },
];

// TestimonialCard Component
const WhatWeDoCard = ({ image, title, desc }) => {
  return (
    <>
      <div
        className="bg-[#f1f5f9]  border-2 border-gray-300 py-4 px-4 rounded-lg  text-center space-y-2 w-[320px] lg:w-[350px]"
        style={{ height: "250px" }}
      >
        <div className="w-20 h-20 lg:w-28 lg:h-28  mx-auto">
          <img
            src={image}
            alt={`${title}'s photo`}
            className="h-full w-full rounded-full"
          />
        </div>
        <h5 className="text-xl lg:text-2xl font-semibold  text-[#0080BB]">
          {title}
        </h5>
        <p className="text-[#0080BB]">"{desc}"</p>
      </div>
    </>
  );
};

const WhatWeDoSwipe = () => {
  return (
    <>
      <div className="container w-full mx-auto py-16 px-25 space-y-6 gap-2 ">
        <h1 className="text-4xl font-bold text-center ">
          Our Security Services
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Professional security solutions tailored to protect people, property,
          and critical operations.
        </p>
        <div className="relative ">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              375: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="relative max-w-6xl mx-auto "
          >
            {whatwedo.map((item, index) => (
              <SwiperSlide key={index}>
                <WhatWeDoCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <img
            src={arrowleft}
            alt=""
            className="absolute top-25 left-[-62px] md:block hidden"
          />
          <img
            src={arrowright}
            alt=""
            className="absolute top-25 right-[-60px] md:block hidden"
          />
        </div>

        <div className="container w-[90%] mx-auto py-16 space-y-6">
          <h1 className="md:text-4xl font-bold text-center ">
            Trusted by Leading Brands Across Nigeria
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto ">
            For over five decades, ASCO has supported top organizations with
            reliable security services and certified operational standards.
          </p>

          <div className="flex flex-wrap gap-3 justify-center container mx-auto py-6">
            {brands.map((brand) => (
              <span
                key={brand}
                className="
                    bg-[#f1f5f9] 
                    text-[#0080bb] 
                       font-medium 
                        px-4 py-2 
                        rounded-full 
                        shadow-md 
                        hover:bg-[#e0f2fe] 
                        transition 
                        duration-300 
                        cursor-pointer ">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Quality />
    </>
  );
};

export default WhatWeDoSwipe;

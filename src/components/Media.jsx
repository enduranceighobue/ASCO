import React from "react";
import mediaone from "../assets/mediaone.png";
import mediathree from "../assets/mediathree.png";
import AboutHero from "./AboutHero";
import garrett from "../assets/garrett.png";
import { Link } from "react-router-dom";
import awardone from "../assets/awardone.png";
import awardtwo from "../assets/awardtwo.png";
import awardthree from "../assets/awardthree.png";
import awardfour from "../assets/awardfour.png";
import awardfive from "../assets/awardfive.png";
import awardsix from "../assets/awardsix.png";
import awardseven from "../assets/awardseven.png";
import awardeight from "../assets/awardeight.png";
import awardnine from "../assets/awardnine.png";
import electronone from "../assets/electronicone.png";
import electrontwo from "../assets/electronictwo.png";
import electronthree from "../assets/electronicthree.png";
import electronfour from "../assets/electronicfour.png";
import electronfive from "../assets/electronicfive.png";
import electronsix from "../assets/electronicsix.png";
import electronseven from "../assets/electronicseven.png";
import electroneight from "../assets/electroniceight.png";
import trainingone from "../assets/trainingoneone.jpeg";
import trainingtwo from "../assets/trainingtwo.jpeg";
import trainingthree from "../assets/trainingthree.jpeg";
import trainingfour from "../assets/trainingone.jpeg";
import trainingfive from "../assets/trainingfive.jpeg";
import { img } from "framer-motion/m";
import { useState } from "react";
import MediaHero from "./MediaHero";

const Media = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageTwo, setSelectedImageTwo] = useState(null);
  const [selectedImageThree, setSelectedImageThree] = useState(null);

  const products = [
    { id: 1, title: "Employers Excellence Award", titlee: "NECA 2022", image: awardone },
    { id: 2, title: "Global Quality Excellence", titlee: "NECA 2023", image: awardtwo },
    { id: 3, title: "Employers Excellence Award", title: "NECA 2020", image: awardthree },
    { id: 4, title: "National Brand Innovation Award", titlee: "NBIA 2022", image: awardfour },
    { id: 5, title: "Standard Excellence Award", titlee: "SEA,2022", image: awardfive },
    { id: 6, title: "Business Times,100", titlee: " NBMIM,2024", image: awardsix },
    { id: 7, title: "International Institute Of Profeesional Security", titlee: "ISCA,2019", image: awardseven },
    { id: 8, title: "Going Beyound Limit", titlee: "NECA,2021", image: awardeight },
    { id: 9, title: " Association Of license Private Security Practitioners Of Nigeria", titlee: " ALPSPN,2017", image: awardnine },
  ];

  const electronics = [
    { id: 1, title: "Biometric Access", image: electronfour },
    { id: 2, title: "Metal Detector", image: garrett },
    { id: 3, title: "Fire Alarm System", image: electrontwo },
    { id: 4, title: "Card Access Control", image: "https://images.unsplash.com/photo-1697382608786-bcf4c113b86e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbWV0cmljJTIwYWNjZXNzJTIwY29udHJvbHxlbnwwfHwwfHx8MA%3D%3D" },

  ];

  const trainings = [
    { id: 1, title: "CCTV", image: trainingone },
    { id: 2, title: "Fire Alarm System", image: trainingtwo },
    { id: 3, title: "Metal Detector", image: trainingthree },
    { id: 4, title: "Biometric Access", image: trainingfour },
    { id: 5, title: "Card Access Control", image: trainingfive },
  ];

  return (
    <>
      <MediaHero />

      <section className=" md:block hidden ">
        <div className="w-full  flex flex-col items-center bg-[#ffffff] p-4 ">
          {/* Container for images */}
          <div className="w-full max-w-4xl flex flex-col gap-6 ">
            {/* Top Image */}

            <div className="container w-[90%] mx-auto py-16 space-y-4">
              <h1 className="md:text-4xl font-bold text-center mb-3">
                Training & Operations Room.
              </h1>
              <p className="text-center text-gray-600 max-w-2xl mx-auto ">
                Our officers undergo continuous training.
              </p>
            </div>

            {/* GRID LAYOUT */}
            <div className="grid grid-cols-3 gap-10">
              {trainings.map((training, index) => (
                <div
                  key={training.id}
                  className="
                   rounded-xl shadow-md border cursor-pointer 
                    hover:shadow-xl transition-shadow duration-300"
                  style={{
                    gridColumn: index === 3 ? "span 2" : "span 1",
                  }}
                  onClick={() => setSelectedImageThree(training.image)}
                >
                  {/* REMOVE bg-white and REMOVE extra margin */}
                  <div className="w-full h-94 rounded-xl overflow-hidden">
                    <img
                      src={training.image}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* MODAL */}
            {selectedImageThree && (
              <div
                className="fixed inset-0 bg-[#F1F5F9] bg-opacity-70 flex items-center justify-center z-50"
                onClick={() => setSelectedImageThree(null)}
              >
                <div className="max-w-2xl max-h-[90vh] p-4">
                  <img
                    src={selectedImageThree}
                    alt="Award"
                    className="rounded-lg object-contain w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <section className="bg-[#ffffff] w-full  flex flex-col items-center p-4">
          <div>
            <div className="container w-[90%] mx-auto py-16 space-y-6 ">
              <h1 className="md:text-3xl font-bold text-center mb-3 ">
                AWARDS & CERTIFICATES.
              </h1>
              <p className="text-center text-gray-600 max-w-2xl mx-auto">
                Awards that reflect our pursuit of quality.
              </p>
            </div>

            {/* GRID LAYOUT */}
            <div className="grid grid-cols-3 gap-10 ">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="
              bg-white rounded-xl shadow-md border p-4 cursor-pointer 
              hover:shadow-xl transition-shadow duration-300
            "
                  style={{
                    gridColumn: index === 3, // last item takes full width
                  }}
                  onClick={() => setSelectedImage(product.image)}
                >
                  <div className="w-full h-70 bg-gray-100 rounded-lg overflow-hidden mb-10">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold text-gray-800">
                    {product.title}
                  </p>
                  <p className="text-center text-sm font-semibold text-gray-800">
                    {product.titlee}
                  </p>
                </div>
              ))}
            </div>

            {/* MODAL */}
            {selectedImage && (
              <div
                className="fixed inset-0 bg-[#F1F5F9] bg-opacity-70 flex items-center justify-center z-50"
                onClick={() => setSelectedImage(null)}
              >
                <div className="max-w-2xl max-h-[90vh] p-4">
                  <img
                    src={selectedImage}
                    alt="Award"
                    className="rounded-lg object-contain w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>

          <div className='"min-h-screen overflow-hidden w-full  py-16 flex flex-col items-center px-6'>
            <h2 className="md:text-5xl  text-[#1d2140] font-bold mb-3">
              Electronic Device Installations
            </h2>

            <p className="text-[20px] text-[#050505]">
              Modern systems installed by trained specialists
            </p>
          </div>
        </section>

        <section className="bg-[#ffffff] w-full  flex flex-col items-center p-4">
          {/* GRID LAYOUT */}
          <div className="grid grid-cols-4 gap-10 ">
            {electronics.map((electronic, index) => (
              <div
                key={electronic.id}
                className="
              bg-white rounded-xl shadow-md border  cursor-pointer 
              hover:shadow-xl transition-shadow duration-300
            "
                style={{
                  gridColumn: index === 3, // last item takes full width
                }}
                onClick={() => setSelectedImageTwo(electronic.image)}
              >
                <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={electronic.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* MODAL */}
          {selectedImageTwo && (
            <div
              className="fixed inset-0 bg-[#F1F5F9] bg-opacity-70 flex items-center justify-center z-50"
              onClick={() => setSelectedImageTwo(null)}
            >
              <div className="max-w-2xl max-h-[90vh] p-4">
                <img
                  src={selectedImageTwo}
                  alt="Award"
                  className="rounded-lg object-contain w-full h-full"
                />
              </div>
            </div>
          )}

          <div className='"min-h-screen overflow-hidden w-full  py-16 flex flex-col items-center px-6'>
            <h2 className="text-4xl  text-[#1d2140] font-bold ">
              Ready to secure your organisation
            </h2>

             <Link to="/security"><button
              type="submit"
              className="w-fit mx-auto bg-[#0080bb] cursor-pointer mt-10 text-white py-2 px-6 rounded-full  hover:bg-[#005f9a] transition"
            >
              Request a Security Assessment
            </button></Link>
          </div>
        </section>
      </section>

      <section className="md:hidden block p-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center sm:gap-8">
          <div className="container w-[90%] mx-auto py-10 mt-10  space-y-4">
            <h1 className="md:text-4xl font-bold text-center mb-3">
              Training & Operations Room.
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto ">
              Our officers undergo continuous training.
            </p>
          </div>

          {trainings.map((training, index) => (
            <div
              key={training.id}
              className="
                   rounded-xl shadow-md border cursor-pointer 
                    hover:shadow-xl transition-shadow duration-300"

              onClick={() => setSelectedImageThree(training.image)}
            >
              {/* REMOVE bg-white and REMOVE extra margin */}
              <div className="">
                <img
                  src={training.image}
                  alt=""
                  className="text-white"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center sm:gap-8">
          <div className="container w-[90%] mx-auto py-10 mt-10 space-">
            <h1 className="md:text-3xl font-bold text-center   ">
              AWARDS & CERTIFICATES.
            </h1>
            <p className="text-center text-gray-600 max-w-2xl  mx-auto">
              Awards that reflect our pursuit of quality.
            </p>
          </div>
          {products.map((product, index) => (
            <div
              key={product.id}
              className="
              bg-white rounded-xl shadow-md border p-4 cursor-pointer 
              hover:shadow-xl transition-shadow duration-300
            "
              onClick={() => setSelectedImage(product.image)}
            >
              <div className="">
                <img
                  src={product.image}
                  alt={product.title}
                  className=""
                />
              </div>
              <p className="text-center text-sm font-semibold text-gray-800">
                {product.title}
              </p>
              <p className="text-center text-sm  text-gray-800">
                {product.titlee}
              </p>
            </div>
          ))}
        </div>





      </section>












    </>
  );
};

export default Media;

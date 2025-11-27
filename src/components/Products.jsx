import React from "react";
import garrett from "../assets/garrett.png";
import personal from "../assets/personal.jpeg";
import Navbar from "../pages/Navbar";


// Temporary placeholder products
const products = [
  { id: 1, title: "CCTV", image: "https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2N0diUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 2, title: "Fire Alarm System", image: "https://media.istockphoto.com/id/2091234074/photo/fire-alarm-switch-on-the-wall-in-shopping-mall.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Uo5iI_8i0FB1twUJ1NE4fsqaYCfgZ82c8EpJ2gjkU8=" },
  { id: 3, title: "Metal Detector", image: garrett },
  { id: 4, title: "Biometric Access", image: "https://media.istockphoto.com/id/528296984/photo/fingerprint-scanner.webp?a=1&b=1&s=612x612&w=0&k=20&c=rEJTK0vw2ppRoukPX0yN7wVNlwaHpR3VOjBXUIW003s=" },
  { id: 5, title: "Card Access Control", image: "https://images.unsplash.com/photo-1697382608786-bcf4c113b86e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbWV0cmljJTIwYWNjZXNzJTIwY29udHJvbHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 6, title: "Radio Communication", image: "https://media.istockphoto.com/id/1472829275/photo/lots-of-walkie-talkies-attached-on-the-windowsill-close-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=lwojSN-pip7EUn6E2MfG1vlJi-Igj3f_cLBK_XWbGQA=" },
  { id: 7, title: "Real Time Patrol Device", image: "https://images.unsplash.com/photo-1746106525790-7043d288f5a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbHRpbWUlMjBwYXRyb2wlMjBkZXZpY2V8ZW58MHx8MHx8fDA%3D" },
  { id: 8, title: "Turnstiles", image: "https://images.unsplash.com/photo-1759544931454-b288d41b4488?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHR1cm5zdGlsZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 9, title: "SOS Device", image: "https://media.istockphoto.com/id/2207648422/photo/red-sos-emergency-light-and-siren.webp?a=1&b=1&s=612x612&w=0&k=20&c=vvIWeD4MXzy2r793SypTXZ8B0S8_v1SoTW_hmXRQUSw=" },
  { id: 10, title: "Protection Device", image: personal },
  { id: 11, title: "Detection System", image: "https://images.unsplash.com/photo-1617772718763-f4ddab89311b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 12, title: "Detection System", image: "https://media.istockphoto.com/id/832111540/photo/hand-pressing-modern-home-security.webp?a=1&b=1&s=612x612&w=0&k=20&c=EPKm7xkXH8SxqlhPk_mOtZp7RCB6cCAu-0oDKC1GavI=" },
];

const Products = () => {
  return (
    <>
    <Navbar/>

    <section className="container mx-auto px-4 overflow-hidden py-16 mt-10">
      
      {/* Page Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl animate__animated  animate__backInDown font-extrabold text-[#0c2b63] tracking-tight">
          Our Products
        </h2>
        <p className="text-gray-600 animate__animated  animate__backInDown mt-2">
          Explore Our Range Of High-Quality Electronic Security Products.
        </p>

      </div>
      <div className="md:w-2/3 pl-6 border-l-6 border-[#0a2342]">
          <h2 className="font-bold text-2xl text-gray-800">
            Electronic Security Gadgets...
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            With <span className="font-semibold text-gray-900 mt-10">ASCO,</span> all you get is Quality. ASCO supplies, installs and maintains high quality security products from leading international brands. Below are a few...
          </p>
        </div>

      {/* Grid of Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-15 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md border p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 text-center">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
    
    </>
  );
};

export default Products;

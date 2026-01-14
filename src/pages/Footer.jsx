import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import ascoLogo from "../assets/ascoicon.svg"; 

export default function Footer() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <footer className="bg-[#1d2140] text-white py-12 px-6 md:px-16">
      {/* Top Section */}
      <div className=" mx-auto container grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Left Side Logo */}
        <Link to="/"><div className="flex items-start text-left">
          <img src={ascoLogo} alt="ASCO Logo" className="w-20 h-12 " />
          <h2 className="text-xl font-semibold mt-2 ">ASCO</h2>
        </div></Link>

        {/* Company Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm opacity-80 cursor-pointer">
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/spread"><li>Our Spread</li></Link>
            <Link to="/media"><li>Media</li></Link>
            <Link to="/contactus"><li>Contact Us</li></Link>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Manned Guarding & Patrol</li>
            <li>Industrial Security</li>
            <li>Crowd Control</li>
            <li>Electronic Security Solutions</li>
            <li>Emergency Response Teams</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 " />
              <span>ASCO Headquarters, 39A, Festac Link Road, Amuwo-Odofin, Lagos, Nigeria.</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>+234 8092366841</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@ashakasecurity.com</span>

            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs mt-6 opacity-80 leading-relaxed">
        <p>© 2026 ASCO Security Company. All rights reserved.</p>
        <p>Licensed by the Federal Government of Nigeria</p>
      </div>
    </footer>
  );
}

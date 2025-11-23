import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/logo.jpeg";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Styling shortcut
  const linkStyle = isScrolled
    ? "text-black hover:text-[#0281bc]"
    : "text-white hover:text-gray-200";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0c2b63] backdrop-blur-md shadow-lg" : "bg-[#0c2b63]"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-between h-20">

          {/* LOGO */}
         <Link to="/"> <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 object-cover rounded-full cursor-pointer"
          /></Link> 

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center cursor-pointer space-x-8 absolute left-1/2 transform -translate-x-1/2">

            {/* Separate Links */}
       <Link to="/">    <button  onClick={() => scrollToSection("Home")} className={`font-medium cursor-pointer ${linkStyle}`}>
              Home
            </button></Link> 

        <Link to="/About">   <button  onClick={() => scrollToSection("About")} className={`font-medium cursor-pointer ${linkStyle}`}>
              About
            </button></Link> 

       <Link  to="/Service">        <button  onClick={() => scrollToSection("Services")} className={`font-medium cursor-pointer ${linkStyle}`}>
              Services
            </button></Link> 

       <Link to="/contact">  <button   onClick={() => scrollToSection("Contact")} className={`font-medium cursor-pointer ${linkStyle}`}>
              Contact
            </button></Link>   

            {/* PRODUCTS DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`flex cursor-pointer items-center gap-1 font-medium ${linkStyle}`}
              >
                Products <ChevronDown size={16} />
              </button>

              {/* DROPDOWN ITEMS - SEPARATED */}
              {isProductsOpen && (
                <div className="absolute cursor-pointer top-8 left-0 bg-white shadow-lg rounded-md w-52 py-3 z-50">

              <Link to="/products">       <button className="block cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100">
                    Security Gadgets
                  </button></Link>  

                  <button className="block cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100">
                    Alarm Systems
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* DESKTOP CALL BUTTON */}
     <Link to="/contact">     <button
            onClick={() => scrollToSection("Call")}
            className={`hidden md:flex px-6 py-4 cursor-pointer rounded-md items-center gap-2 font-medium transition-colors ${
              isScrolled
                ? "bg-[#0C2B63] text-white hover:bg-[#046a97]"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            <Phone className="w-5 h-5 cursor-pointer" />
            <span>Call Us</span>
          </button></Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-[#0C2B63]" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg mt-2 rounded-lg p-5">
            <nav className="flex flex-col space-y-4">

              {/* Separated Mobile Links */}
      <Link to="/">       <button onClick={() => scrollToSection("Home")} className="text-black cursor-pointer text-left font-medium">
                Home
              </button></Link>

      <Link to="/about">        <button onClick={() => scrollToSection("About")} className="text-black cursor-pointer text-left font-medium">
                About
              </button></Link>

        <Link to="/service">     <button onClick={() => scrollToSection("Services")} className="text-black cursor-pointer text-left font-medium">
                Services
              </button></Link>

         <Link to="/contact">    <button onClick={() => scrollToSection("Contact")} className="text-black cursor-pointer text-left font-medium">
                Contact
              </button></Link> 

              {/* MOBILE PRODUCTS DROPDOWN */}
              <div>
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="flex justify-between items-center w-full text-black font-medium"
                >
                  Products <ChevronDown size={18} />
                </button>

                {isMobileProductsOpen && (
                  <div className="mt-2 ml-4 flex flex-col space-y-3">

         <Link to="/products">          <button className="text-left cursor-pointer hover:text-[#0281bc]">
                      CCTV Cameras
                    </button></Link> 

                    <button className="text-left cursor-pointer hover:text-[#0281bc]">
                      Alarm Systems
                    </button>


                  </div>
                )}
              </div>

              {/* Mobile Call Button */}
          <Link to="/contact">    <button
                onClick={() => scrollToSection("Call")}
                className="bg-[#0281bc] text-white px-6 py-3 cursor-pointer rounded-md w-fit"
              >
                Call Us
              </button></Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;

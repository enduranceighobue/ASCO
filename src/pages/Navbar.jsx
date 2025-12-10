import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/ascoicon.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const linkStyle = isScrolled
    ? "text-black hover:text-[#0281bc]"
    : "text-white hover:text-[#0080bb]";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 relative">

          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu}>
            <div className="flex gap-2 items-center font-semibold">
              <img src={logo} alt="Logo" className="w-7 h-7 rounded-full" />
              <h3 className={isScrolled ? "text-black" : "text-white"}>ASCO</h3>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-7 hover:text-[#0080bb] cursor-pointer  absolute left-1/2 -translate-x-1/2">
            <Link to="/" className={linkStyle}>Home</Link>
            <Link to="/about" className={linkStyle}>About Us</Link>
            <Link to="/service" className={linkStyle}>Services</Link>
            <Link to="/spread" className={linkStyle}>Our Spread</Link>
            <Link to="/media" className={linkStyle}>Media</Link>
            <Link to="/escort" className={linkStyle}>Escort Enquiries</Link>
          </nav>

          {/* Desktop Contact Button */}
          <Link to="/contact" onClick={closeMobileMenu}>
            <button
              className={`hidden md:flex px-3 py-1 rounded-full transition ${
                isScrolled
                  ? "bg-[#0080bb] text-white hover:bg-blue-500"
                  : "bg-[#0080bb] text-white hover:bg-blue-500"
              }`}
            >
              Contact Us
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 shadow-lg mt-2 rounded-lg p-5">
            <nav className="flex flex-col space-y-4">

              <Link to="/" onClick={closeMobileMenu} className="text-black">Home</Link>
              <Link to="/about" onClick={closeMobileMenu} className="text-black">About Us</Link>
              <Link to="/service" onClick={closeMobileMenu} className="text-black">Services</Link>
              <Link to="/spread" onClick={closeMobileMenu} className="text-black">Our Spread</Link>
              <Link to="/media" onClick={closeMobileMenu} className="text-black">Media</Link>
              <Link to="/escort" onClick={closeMobileMenu} className="text-black">Escort Enquiries</Link>

              <Link to="/contact" onClick={closeMobileMenu}>
                <button className="bg-[#0281bc] text-white px-6 py-3 rounded-md w-fit">
                  Contact Us
                </button>
              </Link>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

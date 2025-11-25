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
  const mobileMenuRef = useRef(null);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Desktop dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }

      // Mobile menu & dropdown
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setIsMobileProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
    setIsProductsOpen(false);
  };

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
          <Link to="/" onClick={closeAllMenus}>
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 object-cover rounded-full cursor-pointer"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">

            <Link to="/" onClick={closeAllMenus}>
              <button className={`font-medium ${linkStyle}`}>Home</button>
            </Link>

            <Link to="/about" onClick={closeAllMenus}>
              <button className={`font-medium ${linkStyle}`}>About</button>
            </Link>

            <Link to="/service" onClick={closeAllMenus}>
              <button className={`font-medium ${linkStyle}`}>Services</button>
            </Link>

            <Link to="/contact" onClick={closeAllMenus}>
              <button className={`font-medium ${linkStyle}`}>Contact</button>
            </Link>

            {/* PRODUCTS DROPDOWN (Desktop) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`flex items-center gap-1 font-medium ${linkStyle}`}
              >
                Products <ChevronDown size={16} />
              </button>

              {isProductsOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-52 py-3 z-50">

                  <Link to="/products" onClick={closeAllMenus}>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      Security Gadgets
                    </button>
                  </Link>

                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Alarm Systems
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* DESKTOP CALL BUTTON */}
          <Link to="/contact" onClick={closeAllMenus}>
            <button
              className={`hidden md:flex px-6 py-4 rounded-md items-center gap-2 font-medium transition-colors ${
                isScrolled
                  ? "bg-[#0C2B63] text-white hover:bg-[#046a97]"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${
              isScrolled ? "text-[#0C2B63]" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden bg-white/95 shadow-lg mt-2 rounded-lg p-5"
          >
            <nav className="flex flex-col space-y-4">

              <Link to="/" onClick={closeAllMenus}>
                <button className="text-black text-left font-medium">Home</button>
              </Link>

              <Link to="/about" onClick={closeAllMenus}>
                <button className="text-black text-left font-medium">About</button>
              </Link>

              <Link to="/service" onClick={closeAllMenus}>
                <button className="text-black text-left font-medium">Services</button>
              </Link>

              <Link to="/contact" onClick={closeAllMenus}>
                <button className="text-black text-left font-medium">Contact</button>
              </Link>

              {/* MOBILE DROPDOWN */}
              <div>
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="flex justify-between items-center w-full text-black font-medium"
                >
                  Products <ChevronDown size={18} />
                </button>

                {isMobileProductsOpen && (
                  <div className="mt-2 ml-4 flex flex-col space-y-3">

                    <Link to="/products" onClick={closeAllMenus}>
                      <button className="text-left hover:text-[#0281bc]">
                        CCTV Cameras
                      </button>
                    </Link>

                    <button className="text-left hover:text-[#0281bc]">
                      Alarm Systems
                    </button>
                  </div>
                )}
              </div>

              {/* MOBILE CALL BUTTON */}
              <Link to="/contact" onClick={closeAllMenus}>
                <button className="bg-[#0281bc] text-white px-6 py-3 rounded-md w-fit">
                  Call Us
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
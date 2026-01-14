import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/ascoicon.svg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "Our Spread", path: "/spread" },
  { name: "Media", path: "/media" },
  { name: "Escort Enquiries", path: "/escort" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const baseLink =
    "transition-colors duration-300 cursor-pointer";

  const desktopLink = isScrolled
    ? "text-black hover:text-[#0281bc]"
    : "text-white hover:text-[#0281bc]";

  const activeLink =
    "text-[#0281bc] font-semibold ";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 relative">

          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-7 h-7 rounded-full" />
            <h3 className={isScrolled ? "text-black" : "text-white"}>ASCO</h3>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 absolute left-1/2 -translate-x-1/2">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `${baseLink} ${isActive
                    ? "text-[#0281bc] font-semibold"
                    : desktopLink
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Button */}
          <Link to="/contactus" onClick={closeMobileMenu}>
            <button className="hidden md:flex px-4 py-1 cursor-pointer rounded-full bg-[#0080bb] text-white hover:bg-blue-500 transition">
              Contact Us
            </button>
          </Link>

          {/* Mobile Menu Button */}
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
              {navItems.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `text-black transition ${isActive ? "text-[#0281bc] font-semibold" : ""
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}

              <Link to="/contactus" onClick={closeMobileMenu}>
                <button className="bg-[#0281bc] cursor-pointer text-white px-6 py-3 rounded-md w-fit">
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

import React from "react";
import navLogo from "../assets/navlogo.jpeg";
import xLogo from "../assets/x-img.svg";
import twitterLogo from "../assets/twitter.svg";
import facebookLogo from "../assets/facebook.svg";
import instagramLogo from "../assets/instagram.svg";
import youtubeLogo from "../assets/youtube.svg";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#0c2b63] h-full py-10 flex  flex-col gap-8">
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-20 text-center  justify-center pb-8  lg:flex items-center lg:justify-between">
        <div className="flex justify-center items-center  p-2 rounded-[6px] w-20 mx-auto md:mx-0 md:w-fit mb-6 md:mb-0 ">
          <img className="w-15 h-15 cursor-pointer"  src={navLogo} alt="nav-logo" />
        </div>
        <div className="md:py-6">
          <ul className="lg:flex gap-6 text-[20px] font-[40] text-[#FBFBFB] cursor-pointer">
       <Link to="/about">     <li>About</li> </Link> 
        <Link to="/service">   <li>Service</li></Link> 
        <Link to="/products">    <li>Products</li></Link> 
        <Link>    <li>Geographical Spread</li></Link> 
          </ul>
        </div>
        <div className="hidden md:inline-flex gap-x-5  cursor-pointer">
          <a href="" target="_blank" rel="noopener noreferrer"> <img src={xLogo} alt="x-logo" className="w-8" /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><img src={facebookLogo} alt="facebook-logo" className="w-8" /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><img src={twitterLogo} alt="twitter-logo" className="w-8" /></a>
         <a href="" target="_blank" rel="noopener noreferrer"> <img src={instagramLogo} alt="instagram-logo"  className="w-8"/></a>
          <a href="" target="_blank" rel="noopener noreferrer"><img src={youtubeLogo} alt="youtube-logo" className="w-8" /></a>
        </div>
      </section>
      <section className=" container mx-auto px-4 sm:px-6 lg:px-10 py-20 text-[14px]  font-[400]  text-[#FBFBFB] ">
        <div className="border-t-2  pt-8 lg:flex  text-center justify-between ">

        <h1 className="pb-4">Copyright 2025 Ashaka Security Company LTD. All Rights Reserved.</h1>
        <h1>Privacy Policy</h1>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

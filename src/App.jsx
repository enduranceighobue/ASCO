import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Growth from "./pages/Growth.jsx";
import Footer from "./pages/Footer.jsx";
import Specialization from "./pages/Specialization.jsx";
import Quality from "./pages/Quality.jsx";
import Service from "./pages/Service.jsx";
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx";
import Products from "./components/Products.jsx";
import Nav from "./pages/Nav.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutUs />
              <Growth />
              <Specialization />
              <Quality />
              <Footer />
            </>
          }
        />

        {/* SEPARATE PAGES */}
        <Route
          path="/about"
          element={
            <>
            <Nav/>
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
            <Nav/>
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/service"
          element={
            <>
            <Nav/>
              <Service/>
              <Footer />
            </>
          }
        />

        <Route
          path="/products"
          element={
            <>
            <Nav/>
              <Products />
              <Footer />
            </>
          }
          
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

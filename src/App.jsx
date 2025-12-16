import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";
import Navbar from "./pages/Navbar.jsx";
import Service from "./pages/Service.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Products from "./components/Products.jsx";
import Nav from "./pages/Nav.jsx";
import Footer from "./pages/Footer.jsx";
import Home from "./pages/Home.jsx";
import RootLayout from "./components/RootLayout.jsx";
import Logo from "./components/Logo.jsx";
import { Suspense, lazy } from "react";


import "./App.css";
import AppRoutes from "./components/AppRoute.jsx";

function App() {
  return (
    
    <AppRoutes/>
    // <BrowserRouter>
    //   <ScrollToTop />
      
      
    //   <Suspense fallback={<Logo />}>
    //       <RootLayout />
    //     </Suspense>
    //   <Routes>
       
        
      
    //     {/* HOME PAGE */}
    //     <Route
    //       path="/"
    //       element={
    //         <>
    //         <Suspense fallback={<Logo />}>
    //           <Home />
    //         </Suspense>
              
    //         </>
    //       }
    //     />

    //     {/* SEPARATE PAGES */}
    //     <Route
    //       path="/about"
    //       element={
    //         <>
    //           <Nav />
    //           <About />
    //           <Footer />
    //         </>
    //       }
    //     />

    //     <Route
    //       path="/contact"
    //       element={
    //         <>
    //           <Nav />
    //           <Contact />
    //           <Footer />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/service"
    //       element={
    //         <>
    //           <Nav />
    //           <Service />
    //           <Footer />
    //         </>
    //       }
    //     />

    //     <Route
    //       path="/products"
    //       element={
    //         <>
    //           <Nav />
    //           <Products />
    //           <Footer />
    //         </>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;

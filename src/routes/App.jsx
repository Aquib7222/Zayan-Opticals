// import "./App.css";
// import Footer from "../component/footer";
// import Header from "../component/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Slider from "../component/Slider";
// import Products from "../component/Products";
// import { Outlet } from "react-router-dom";
// import Special_Product from "../component/Special_Product";
// import Banner from "../component/Banner";
// import Deal from "../component/Deal";
// import React, { useEffect } from 'react';
// import "locomotive-scroll/dist/locomotive-scroll.css";
// import Banner_1 from "../component/Banner_1";
// import Brands from "../component/Brands";
// import MainHeader from "../component/MainHeader";
// import Shipping from "../component/Shipping";



// function App() {
  
//   return (
//     <>
      
//         <MainHeader/>
//         <Header />
//         <Outlet />
//         <Slider />
//         <Products />
//         <Special_Product />
//         <Banner />
//         <Deal />
//         <Banner_1/>
//         <Brands/>
//         <Shipping/>
//         <Footer />
      
//     </>
//   );
// }

// export default App;

// src/routes/App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slider from "../component/Slider";
import Products from "../component/Products";
import Special_Product from "../component/Special_Product";
import Banner from "../component/Banner";
import Deal from "../component/Deal";
import Banner_1 from "../component/Banner_1";
import Brands from "../component/Brands";
import MainHeader from "../component/MainHeader";
import Shipping from "../component/Shipping";

function App() {
  return (
    <>
      <MainHeader />
      <Header />
      <Outlet /> {/* Render the routed page */}
      <Slider />
      <Products />
      <Special_Product />
      <Banner />
      <Deal />
      <Banner_1 />
      <Brands />
      <Shipping />
      <Footer />
    </>
  );
}

export default App;

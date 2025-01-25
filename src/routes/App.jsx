import "./App.css";
import Footer from "../component/footer";
import Header from "../component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Slider from "../component/Slider";
import Products from "../component/Products";
import { Outlet } from "react-router-dom";
import Special_Product from "../component/Special_Product";
import Banner from "../component/Banner";
import Deal from "../component/Deal";
import React, { useEffect } from 'react';
import "locomotive-scroll/dist/locomotive-scroll.css";
import Banner_1 from "../component/Banner_1";
import Brands from "../component/Brands";


function App() {
  
  return (
    <>
      
        <Header />
        <Outlet />
        <Slider />
        <Products />
        <Special_Product />
        <Banner />
        <Deal />
        <Banner_1/>
        <Brands/>
        
        <Footer />
      
    </>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom'; // Don't use <Router> here
// import "./App.css";
// import Footer from "../component/footer";
// import Header from "../component/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Slider from "../component/Slider";
// import Products from "../component/Products";
// import Special_Product from "../component/Special_Product";
// import Banner from "../component/Banner";
// import Deal from "../component/Deal";
// import Banner_1 from "../component/Banner_1";
// import Brands from "../component/Brands";
// import LoginPage from "../Pages/LoginPage";  // Import Login component

// const isLoggedIn = () => {
//   return localStorage.getItem("userToken") !== null;
// }

// function App() {
//   const [loggedIn, setLoggedIn] = useState(isLoggedIn());

//   useEffect(() => {
//     setLoggedIn(isLoggedIn());
//   }, []);
//   const handleLogout = () => {
//     // Remove userToken from localStorage
//     localStorage.removeItem("userToken");
//     // Update the loggedIn state
//     setLoggedIn(false);
//     // Redirect to the login page
//     navigate("/login");
//   };
//   return (
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/" element={loggedIn ? (
//         <>
//           <Header onLogout={handleLogout}/>
//           <Slider />
//           <Products />
//           <Special_Product />
//           <Banner />
//           <Deal />
//           <Banner_1 />
//           <Brands />
//           <Footer />
//         </>
//       ) : (
//         <Navigate to="/login" />
//       )} />
//     </Routes>
//   );
// }

// export default App;

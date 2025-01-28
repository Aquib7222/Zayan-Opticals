// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./routes/App.jsx";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Shop from "./Pages/Shop.jsx";
// import About from "./Pages/About.jsx";
// import Blog from "./Pages/Blog.jsx";
// import Login from "./Pages/Login.jsx";
// import Signup from "./Pages/SIgnup.jsx";
// import ProductDetail from "./Pages/ProductDetail.jsx";
// import Contact_Us from "./Pages/Contact_Us.jsx";
// import Cart from "./Pages/Cart.jsx";
// import { CartProvider } from "./component/Context/CartContext.jsx";
// import Product_view from "./Pages/Product_view.jsx";
// import UserDashboard from "./Pages/UserDashboard.jsx";
// import Modal from "./component/Modal.jsx";
// import Admin from "./Pages/Admin.jsx";

// import ProductProvider from "./component/Context/AdminProductContext.jsx";
// import Checkout from "./Pages/Checkout.jsx";
// import AdminLogin from "./Pages/AdminLogin.jsx";

// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/Home", element: <App /> },
//   { path: "/Shop", element: <Shop /> },
//   { path: "/Blog", element: <Blog /> },
//   { path: "/About", element: <About /> },
//   { path: "/Contact_Us", element: <Contact_Us /> },
//   { path: "/Cart", element: <Cart /> },
//   { path: "/product/:id", element: <ProductDetail /> }, 
//   { path: "/Product_view", element: <Product_view /> },
//   { path: "/Login", element: <Login /> },
//   { path: "/Signup", element: <Signup /> },
//   { path: "/Login/UserDashboard", element: <UserDashboard /> },
//   { path: "/Admin", element: <Admin/>},
//   { path: "/Modal", element: <Modal /> },
//   { path: "/checkout", element: <Checkout/>},
//   { path: "/adminlogin", element: <AdminLogin/>}
// ]);
// createRoot(document.getElementById("root")).render(
 
    
//     <CartProvider>
//       <RouterProvider router={router} />
//     </CartProvider>
   
   
 
// );

// src/index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./component/Context/AuthContext"; // Import AuthProvider
import { CartProvider } from "./component/Context/CartContext"; // Import CartProvider
import App from "./routes/App.jsx";
import Shop from "./Pages/Shop.jsx";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Contact_Us from "./Pages/Contact_Us.jsx";
import Cart from "./Pages/Cart.jsx";
import Product_view from "./Pages/Product_view.jsx";
import UserDashboard from "./Pages/UserDashboard.jsx";
import Admin from "./Pages/Admin.jsx";
import Checkout from "./Pages/Checkout.jsx";
import AdminLogin from "./Pages/AdminLogin.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Home", element: <App /> },
  { path: "/Shop", element: <Shop /> },
  { path: "/Blog", element: <Blog /> },
  { path: "/About", element: <About /> },
  { path: "/Contact_Us", element: <Contact_Us /> },
  { path: "/Cart", element: <Cart /> },
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "/Product_view", element: <Product_view /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signup", element: <Signup /> },
  { path: "/Login/UserDashboard", element: <UserDashboard /> },
  { path: "/Admin", element: <Admin /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/adminlogin", element: <AdminLogin /> }
]);

createRoot(document.getElementById("root")).render(
 
    <AuthProvider> {/* Wrap with AuthProvider for global auth state */}
      <CartProvider> {/* Wrap with CartProvider for global cart state */}
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  
);


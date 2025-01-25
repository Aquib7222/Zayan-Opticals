import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/SIgnup.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Contact_Us from "./Pages/Contact_Us.jsx";
import Cart from "./Pages/Cart.jsx";
import { CartProvider } from "./component/Context/CartContext.jsx";
import Product_view from "./Pages/Product_view.jsx";
import UserDashboard from "./Pages/UserDashboard.jsx";
import Modal from "./component/Modal.jsx";
import Admin from "./Pages/Admin.jsx";
import { Auth0Provider } from '@auth0/auth0-react';
import ProductProvider from "./component/Context/AdminProductContext.jsx";
// import { ProductProvider } from "./component/Context/ProductContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Home", element: <App /> },
  { path: "/Shop", element: <Shop /> },
  { path: "/Blog", element: <Blog /> },
  { path: "/About", element: <About /> },
  { path: "/Contact_Us", element: <Contact_Us /> },

  { path: "/Cart", element: <Cart /> },
  // Add the product detail route here
  { path: "/product/:id", element: <ProductDetail /> }, // Dynamic route for product details
  { path: "/Product_view", element: <Product_view /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signup", element: <Signup /> },
  { path: "/Login/UserDashboard", element: <UserDashboard /> },
  { path: "/Admin", element: <Admin/>},
  { path: "/Modal", element: <Modal /> },
]);
createRoot(document.getElementById("root")).render(
  
    <ProductProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    </ProductProvider>
 
);

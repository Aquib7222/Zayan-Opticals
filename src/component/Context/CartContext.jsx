
import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../Reducer/CartReducer";
import { useAuth } from "./AuthContext";
const CartContext = createContext();
// const { userEmail } = useAuth();
// Get cart data from local storage
const getLocalCartData = () => {
  let newCartData = localStorage.getItem("ZayanCart");
  if (newCartData === null) {
    return [];
  } else {
    try {
      return JSON.parse(newCartData);
    } catch (error) {
      console.error("Error parsing local storage data:", error);
      return [];
    }
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: 0, 
  total_amount: 0,
  shipping_fee: 40,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Add item to cart
  const addToCart = (id, sunglasses, amount) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, sunglasses, amount: Number(amount) || 1 },
    });
  };

  // Remove single item from cart
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  // Remove all items from cart
  const removeAllFromCart = () => {
    dispatch({ type: "REMOVE_ALL_FROM_CART" });
  };

  // Update item quantity
  const updateCartQuantity = (id, quantity) => {
    dispatch({
      type: "UPDATE_CART_QUANTITY",
      payload: { id, quantity: Number(quantity) || 1 },
    });
  };

  // Save cart data to local storage on change
  const userId = JSON.parse(localStorage.getItem("users"));
  console.log(userId);
  useEffect(() => {
    
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("ZayanCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, removeAllFromCart, updateCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

// import { createContext, useReducer, useContext, useEffect } from "react";
// import { useAuth } from "./AuthContext"; // Importing useAuth to get user email
// import reducer from "../Reducer/CartReducer";

// // Create CartContext
// const CartContext = createContext();

// // Get cart data from local storage based on email
// const getLocalCartData = (email) => {
//   let newCartData = localStorage.getItem(`${email}_ZayanCart`);
//   if (newCartData === null) {
//     return [];
//   } else {
//     try {
//       return JSON.parse(newCartData);
//     } catch (error) {
//       console.error("Error parsing local storage data:", error);
//       return [];
//     }
//   }
// };

// // Initial state for the cart
// const initialState = {
//   cart: [],
//   total_item: 0,
//   total_amount: 0,
//   shipping_fee: 40,
// };

// const CartProvider = ({ children }) => {
//   const { email } = useAuth(); // Get the logged-in user's email from AuthContext
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // Add item to cart
//   const addToCart = (id, sunglasses, amount) => {
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: { id, sunglasses, amount: Number(amount) || 1 },
//     });
//   };

//   // Remove item from cart
//   const removeFromCart = (id) => {
//     dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
//   };

//   // Remove all items from cart
//   const removeAllFromCart = () => {
//     dispatch({ type: "REMOVE_ALL_FROM_CART" });
//   };

//   // Update item quantity in cart
//   const updateCartQuantity = (id, quantity) => {
//     dispatch({
//       type: "UPDATE_CART_QUANTITY",
//       payload: { id, quantity: Number(quantity) || 1 },
//     });
//   };

//   // Save cart data to local storage on state change
//   useEffect(() => {
//     if (email) {
//       // Store cart for the logged-in user using their email as a key
//       localStorage.setItem(`${email}_ZayanCart`, JSON.stringify(state.cart));
//       console.log("Cart saved for user:", email);
//     }
//     // Dispatch total price action when cart changes
//     dispatch({ type: "CART_TOTAL_PRICE" });
//   }, [state.cart, email]); // This will update cart in local storage whenever it changes

//   // When the page is loaded, check if the user is logged in and load their cart
//   useEffect(() => {
//     // Check if the user is logged in (email is in localStorage)
//     const storedEmail = localStorage.getItem('userEmail');
//     if (storedEmail) {
//       // If email exists, load the cart data for this user from localStorage
//       const storedCartData = getLocalCartData(storedEmail);
//       dispatch({ type: "LOAD_CART", payload: storedCartData });
//       console.log("Cart loaded for user:", storedEmail);
//     }
//   }, []); // Runs only once when the page loads, ensuring email check

//   return (
//     <CartContext.Provider
//       value={{
//         ...state,
//         addToCart,
//         removeFromCart,
//         removeAllFromCart,
//         updateCartQuantity,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCartContext = () => {
//   return useContext(CartContext);
// };

// export { CartProvider, useCartContext };


import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();

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

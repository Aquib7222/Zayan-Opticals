import React, { createContext, useReducer } from "react";
import { AdminProductReducer, initialState } from "../Reducer/AdminProductReducer";

// Create context
export const AdminProductContext = createContext();

// Context Provider Component
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminProductReducer, initialState);

  return (
    <AdminProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AdminProductContext.Provider>
  );
};

export default ProductProvider;

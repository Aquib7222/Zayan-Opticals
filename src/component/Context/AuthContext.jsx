// import { Children, createContext, useContext, useState } from "react";

// const AuthContext = createContext();
// export const useAuth =()=>{
//     return useContext(AuthContext);
// };

// //auth provider

// export const AuthProvider =({Children})=>{
//     const [isLoggedIn,setIsLoggedIn]= useState(()=>{
//         const savedState = localStorage.getItem("isLoggedIn");
//         return savedState ? JSON.parse(savedState) : false;
//     });


//     const login = ()=>{
//         setIsLoggedIn(true);
//         localStorage.setItem("isLoggedIn", true);

//     }
//     const logout = ()=>{
//         setIsLoggedIn(false);
//         localStorage.removeItem("isLoggedIn");
//     }

//     return(

//         <AuthContext.Provider value={{isLoggedIn,login,logout}}>
//         {Children}
//         </AuthContext.Provider>
//     )
// }

// src/component/Context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

// Create the Auth Context
const AuthContext = createContext();

// Custom hook to access AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const storedUserName = localStorage.getItem('userName');

    if (loggedIn === 'true' && storedUserName) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    }
  }, []); // Only run once when the app loads

  const login = (userName) => {
    setIsLoggedIn(true);
    setUserName(userName);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', userName);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

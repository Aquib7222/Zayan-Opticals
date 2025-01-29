
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
  const [email, setEmail] = useState(''); // Store email

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const storedUserName = localStorage.getItem('userName');
    const storedUserEmail = localStorage.getItem('userEmail');
  
    if (loggedIn === 'true' && storedUserName && storedUserEmail) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
      setEmail(storedUserEmail); // Set email on load
    }
  }, []);
  

  const login = (userName,userEmail) => {
    setIsLoggedIn(true);
    setUserName(userName);
    setEmail(userEmail);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setEmail(''); // Clear email on logout
    // localStorage.removeItem('isLoggedIn');
    // localStorage.removeItem('userName');
    // localStorage.removeItem('userEmail');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName,email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

import Footer from "../component/footer";
import Header from "../component/Header";

import { useState, useEffect } from "react";
import UserSidebar from "../component/User/UserSideBar"
import "./Login.css";
import UserContent from "../component/User/UserContent";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  // Check if user details are in localStorage on initial render
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers && storedUsers.length > 0) {
      const storedUser = storedUsers.find(user => user.email === email);
      if (storedUser) {
        setLoggedIn(true);
        setUserName(storedUser.name);
      }
    }
  }, []);

  // Handle login submission
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check if the entered email and password match any stored user
      const foundUser = storedUsers.find(
        (user) => user.email === email && user.password === password
      );
      
      if (foundUser) {
        setLoggedIn(true);
        setUserName(foundUser.name);
        alert("Logging in...");
      } else {
        setError("Invalid email or password.");
      }
    } else {
      setError("Please fill in all fields.");
    }
  };

  // Handle signup submission
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if (name && email && password) {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check if the user already exists
      const existingUser = storedUsers.find(user => user.email === email);
      if (existingUser) {
        setError("User already exists.");
        return;
      }

      const newUser = { name, email, password };
      storedUsers.push(newUser); // Add new user to the users array
      localStorage.setItem("users", JSON.stringify(storedUsers)); // Save updated users array to localStorage
      setLoggedIn(true);
      setUserName(name);
      alert("Sign up successful!");
    } else {
      setError("Please fill in all fields.");
    }
  };

  // Handle logout and clear user state
  const handleLogout = () => {
    setLoggedIn(false);
    setUserName('');
  };

  return (
    <>
      <Header loggedIn={loggedIn} userName={userName} onLogout={handleLogout} />
      
      {!loggedIn ? (
      <div className="container">
        <div className="form-container">
        
            <div>
              <div className="form-toggle">
                <button
                  className={isLogin ? "active" : ""}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
                <button
                  className={!isLogin ? "active" : ""}
                  onClick={() => setIsLogin(false)}
                >
                  Signup
                </button>
              </div>

              {isLogin ? (
                <div className="form">
                  <h6>Login Form</h6>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <p className="error">{error}</p>}
                  <button onClick={handleLoginSubmit}>Login</button>
                  <p>
                    Not a Member?{" "}
                    <a href="#" onClick={() => setIsLogin(false)}>
                      Signup now
                    </a>
                  </p>
                </div>
              ) : (
                <div className="form">
                  <h6>Signup Form</h6>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <p className="error">{error}</p>}
                  <button onClick={handleSignupSubmit}>Sign up</button>
                </div>
              )}
            </div>
          
        </div>
      </div>
  ) : (
    // User details page
    <div className=" user-details">

      <div className="item1">
        <UserSidebar/>
      </div>
      <div className="item2 p-4">
        <UserContent/>
      </div>
    </div>
  )}
      
    </>
  );
};

export default Login;

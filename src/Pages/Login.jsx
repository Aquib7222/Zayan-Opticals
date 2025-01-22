import Footer from "../component/footer";
import Header from "../component/Header";

import { useState } from "react";

import "./Login.css";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Header />

      <div className="container">
        <div className="form-container">
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
          {isLogin ? 
            <>
              <div className="form">
                <h6 className="text-center">LOGIN HERE</h6>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="password" />
                <a href="#" className="password-reset">Forget Password</a>
                <button>Login</button>
                <p>
                  Not a Member?{" "}
                  <a href="#" onClick={() => setIsLogin(false)}>
                    Signup now
                  </a>
                </p>
              </div>
            </>
          : <>
               <div className="form">
                <h6 className="text-center">SIGNUP HERE</h6>
                <input type="text" placeholder="Full Name" name="name"/>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="password" />
               
                <button>Sign up</button>
                
              </div>
          
          </> 
            
          }
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Login;


// import React, { useState, useEffect } from "react";
// import "./Login.css";
// import Header from "../component/Header";
// import Footer from "../component/footer";

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [error, setError] = useState('');

//   // Check if user details are in localStorage on initial render
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const user = JSON.parse(storedUser);
//       setLoggedIn(true);
//       setUserName(user.name);
//     }
//   }, []);

//   // Handle login submission
//   const handleLoginSubmit = (event) => {
//     event.preventDefault();
//     if (email && password) {
//       const storedUser = JSON.parse(localStorage.getItem("user"));
      
//       // Check if the entered email and password match what's stored
//       if (storedUser && storedUser.email === email && storedUser.password === password) {
//         setLoggedIn(true);
//         setUserName(storedUser.name);
//         alert("Logging in...");
//       } else {
//         setError("Invalid email or password.");
//       }
//     } else {
//       setError("Please fill in all fields.");
//     }
//   };

//   // Handle signup submission
//   const handleSignupSubmit = (event) => {
//     event.preventDefault();
//     if (name && email && password) {
//       const user = { name, email, password }; // Create user object with email and password
//       localStorage.setItem("user", JSON.stringify(user)); // Store user in localStorage
//       setLoggedIn(true);
//       setUserName(name);
//       alert("Signing up...");
//     } else {
//       setError("Please fill in all fields.");
//     }
//   };

//   // Handle logout and clear user from localStorage
//   const handleLogout = () => {
//     localStorage.removeItem("user"); // Clear user from localStorage
//     setLoggedIn(false);
//     setUserName('');
//   };

//   return (
//     <>
//       <Header loggedIn={loggedIn} userName={userName} onLogout={handleLogout} />
      
//       <div className="container">
//         <div className="form-container">
//           {!loggedIn ? (
//             <div>
//               <div className="form-toggle">
//                 <button
//                   className={isLogin ? "active" : ""}
//                   onClick={() => setIsLogin(true)}
//                 >
//                   Login
//                 </button>
//                 <button
//                   className={!isLogin ? "active" : ""}
//                   onClick={() => setIsLogin(false)}
//                 >
//                   Signup
//                 </button>
//               </div>

//               {isLogin ? (
//                 <div className="form">
//                   <h6>Login Form</h6>
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   {error && <p className="error">{error}</p>}
//                   <button onClick={handleLoginSubmit}>Login</button>
//                   <p>
//                     Not a Member?{" "}
//                     <a href="#" onClick={() => setIsLogin(false)}>
//                       Signup now
//                     </a>
//                   </p>
//                 </div>
//               ) : (
//                 <div className="form">
//                   <h6>Signup Form</h6>
//                   <input
//                     type="text"
//                     placeholder="Full Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   {error && <p className="error">{error}</p>}
//                   <button onClick={handleSignupSubmit}>Sign up</button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             // User details page
//             <div className="user-details">
//               <h2>Welcome, {userName}!</h2>
//               <p>Your account details will be displayed here.</p>
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Login;

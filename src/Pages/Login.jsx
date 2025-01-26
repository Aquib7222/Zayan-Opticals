// import Footer from "../component/footer";
// import Header from "../component/Header";

// import { useState, useEffect } from "react";

// import "./Login.css";
// import MainHeader from "../component/MainHeader";

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [error, setError] = useState("");

//   // Check if user details are in localStorage on initial render
//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem("users"));
//     if (storedUsers && storedUsers.length > 0) {
//       const storedUser = storedUsers.find((user) => user.email === email);
//       if (storedUser) {
//         setLoggedIn(true);
//         setUserName(storedUser.name);
//       }
//     }
//   }, []);

//   // Handle login submission
//   const handleLoginSubmit = (event) => {
//     event.preventDefault();
//     if (email && password) {
//       const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

//       // Check if the entered email and password match any stored user
//       const foundUser = storedUsers.find(
//         (user) => user.email === email && user.password === password
//       );

//       if (foundUser) {
//         setLoggedIn(true);
//         setUserName(foundUser.name);
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
//       const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

//       // Check if the user already exists
//       const existingUser = storedUsers.find((user) => user.email === email);
//       if (existingUser) {
//         setError("User already exists.");
//         return;
//       }

//       const newUser = { name, email, password };
//       storedUsers.push(newUser); // Add new user to the users array
//       localStorage.setItem("users", JSON.stringify(storedUsers)); // Save updated users array to localStorage
//       setLoggedIn(true);
//       setUserName(name);
//       alert("Sign up successful!");
//     } else {
//       setError("Please fill in all fields.");
//     }
//   };

//   // Handle logout and clear user state
//   const handleLogout = () => {
//     setLoggedIn(false);
//     setUserName("");
//   };

//   return (
//     <>
//       <MainHeader />
//       <Header loggedIn={loggedIn} userName={userName} />

//       {!loggedIn ? (
//         <div className="container">
//           <div className="form-container">
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
//           </div>
//         </div>
//       ) : (
//         // User details page
//         <div className=" user-details">
//           <div className="item1"></div>
//           <div className="item2 p-4"></div>
//         </div>
//       )}
//       <Footer/>
//     </>
//   );
// };

// export default Login;

import { NavLink } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/Header";
import MainHeader from "../component/MainHeader";
import Shipping from "../component/Shipping";
import { IoHomeOutline } from "react-icons/io5";
import "./Login.css";
import { useState } from "react";
const Login = () => {

  // State to track the active button
  const [activeButton, setActiveButton] = useState('dashboard'); // Default active button

  // Handler to change the active button
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <>
      <MainHeader />
      <Header />

      {/* //breadcrumb */}

      <nav
        style={{
          "--bs-breadcrumb-divider":
            "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'8\\' height=\\'8\\'%3E%3Cpath d=\\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\\' fill=\\'%236c757d\\'/%3E%3C/svg%3E')",
        }}
        aria-label="breadcrumb"
      >
        

        <ol className="breadcrumb mt-3">
          <li className="breadcrumb-item ms-5">
            <a href="#" className="text-decoration-none">
              <IoHomeOutline className="top-1" /> Home
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Login
          </li>
        </ol>
      </nav>
      <hr />
      
      {/* <div>
        <div className="row">
          <div className="col-4">
            <img src="" alt="" />
          </div>


          <div className="col-8">
            <h1
              style={{
                fontWeight: "1000",
                fontFamily: "serif",
                fontSize: "bold",
                textAlign:"left"
              }}
            >
              Login
            </h1>
            <p style={{textAlign:"left"}}>
              Don't have an account ?{" "}
              <NavLink to={"/Signup"} style={{ textDecoration: "none" }}>
                Create here
              </NavLink>
            </p>
            <form>
              <div class="mb-3 w-75">
                
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="abc@gmail.com"
                  style={{padding:"15px",backgroundColor:"#eefeff"}}
                />
                
              </div>
              <div class="mb-3 w-75">
                
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                  style={{padding:"15px",backgroundColor:"#eefeff"}}

                />
              </div>
              <p style={{textAlign:"left"}}><a href="" style={{textDecoration:"none" ,color:"black",opacity:"0.5"}}>Forget password ?</a></p>
              <button type="submit" class="btn btn-danger me-auto py-2 px-4 " style={{left:"0", display: "block",  
                  width: "25%" }}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>  */}
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 d-flex flex-column">
          <button 
            className={`login_dashboard ${activeButton === 'dashboard' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`login_dashboard ${activeButton === 'orders' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('orders')}
          >
            Orders
          </button>
          <button 
            className={`login_dashboard ${activeButton === 'account' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('account')}
          >
            Account Details
          </button>
          <button 
            className={`login_dashboard ${activeButton === 'logout' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('logout')}
          >
            Logout
          </button>
        </div>
        <div className="col-md-8">
          <h4 style={{left:"0"}}>Hello Aquib Shahzada</h4>
          <p>From your account dashboard. you can easily check & view your recent orders,
          manage your shipping and billing addresses and edit your password and account details.</p>
        </div>
      </div>
    </div>
      <Shipping />
      <Footer />
    </>
  );
};
export default Login;

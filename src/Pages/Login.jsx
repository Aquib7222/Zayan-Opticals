
// import { NavLink } from "react-router-dom";
// import Footer from "../component/footer";
// import Header from "../component/Header";
// import MainHeader from "../component/MainHeader";
// import Shipping from "../component/Shipping";
// import { IoHomeOutline } from "react-icons/io5";
// import "./Login.css";
// import { useState, useEffect } from "react";
// import UserDashboard from "../component/User/UserDashboard";
// import { VscSettings } from "react-icons/vsc";
// import { IoBagOutline } from "react-icons/io5";
// import { FaRegUser } from "react-icons/fa";
// import { BiLogOut } from "react-icons/bi";
// import UserAccount from "../component/User/UserAccount"
// import UserOrder from "../component/User/UserOrder"

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [activeButton, setActiveButton] = useState('dashboard');
  

//   // Check if the user is already logged in when the page loads or refreshes
//   useEffect(() => {
//     const loggedIn = localStorage.getItem('isLoggedIn');
//     const storedUserName = localStorage.getItem('userName');
//     if (loggedIn === 'true' && storedUserName) {
//       setIsLoggedIn(true);
//       setUserName(storedUserName);
//     }
//   }, []);

//   const handleButtonClick = (button) => {
//     setActiveButton(button);

//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const users = JSON.parse(localStorage.getItem("users"));
//     const UserLogin = users.find((user) => user.email === email && user.password === password);
    
//     if (UserLogin) {
//       // Store user info and set logged-in state
//       setUserName(UserLogin.firstName + UserLogin.lastName); // Assuming each user object has a 'name' field
//       console.log("first name:",UserLogin.name)
//       setIsLoggedIn(true);
//       localStorage.setItem('isLoggedIn', 'true');
//       localStorage.setItem('userName', UserLogin.firstName); // Store the username or token as needed
//       alert("Login Successfully");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUserName('');
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('userName');
//     alert("Logout Successfully!");
//   };

//   return (
//     <>
//       <MainHeader />
//       <Header userName={userName} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      
//       <nav
//         style={{
//           "--bs-breadcrumb-divider":
//             "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'8\\' height=\\'8\\'%3E%3Cpath d=\\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\\' fill=\\'%236c757d\\'/%3E%3C/svg%3E')",
//         }}
//         aria-label="breadcrumb"
//       >
//         <ol className="breadcrumb mt-3">
//           <li className="breadcrumb-item ms-5">
//             <a href="#" className="text-decoration-none">
//               <IoHomeOutline className="top-1" /> Home
//             </a>
//           </li>
//           <li className="breadcrumb-item active" aria-current="page">
//             Login
//           </li>
//         </ol>
//       </nav>
//       <hr />

//       {/* Conditionally render login form or dashboard */}
//       {!isLoggedIn ? (
        
//       ) : (
//         // User Dashboard if logged in
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-3 d-flex flex-column">
//               <button
//                 className={`login_dashboard ${activeButton === 'dashboard' ? 'active' : ''}`}
//                 onClick={() => handleButtonClick('dashboard')}
//               >
//                 <VscSettings /> Dashboard
//               </button>
//               <button
//                 className={`login_dashboard ${activeButton === 'orders' ? 'active' : ''}`}
//                 onClick={() => handleButtonClick('orders')}
//               >
//                 <IoBagOutline /> Orders
//               </button>
//               <button
//                 className={`login_dashboard ${activeButton === 'account' ? 'active' : ''}`}
//                 onClick={() => handleButtonClick('account')}
//               >
//                 <FaRegUser /> Account Details
//               </button>
//               <button
//                 className={`login_dashboard ${activeButton === 'logout' ? 'active' : ''}`}
//                 onClick={handleLogout}
//               >
//                 <BiLogOut /> Logout
//               </button>
//             </div>

//             <div className="col-md-8">
//             {activeButton === 'dashboard' && <UserDashboard userName={userName} />}
//             {activeButton === 'orders' && <UserOrder/>}
//             {activeButton === 'account' && <UserAccount userName={userName}/>}
//             </div>
//           </div>
//         </div>
        
//       )}

//       <Shipping />
//       <Footer />
//     </>
//   );
// };

// export default Login;

// src/Pages/Login.jsx
import { useState, useEffect } from "react";
import { useAuth } from "../component/Context/AuthContext"; // Import the custom hook
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import UserDashboard from "../component/User/UserDashboard";
import UserOrder from "../component/User/UserOrder";
import UserAccount from "../component/User/UserAccount";
import Footer from "../component/footer";
import Header from "../component/Header";
import MainHeader from "../component/MainHeader";
import Shipping from "../component/Shipping";
import "./Login.css";
const Login = () => {
  const { isLoggedIn, userName, login, logout } = useAuth(); // Destructure login, logout, and isLoggedIn from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeButton, setActiveButton] = useState('dashboard');

  useEffect(() => {
    if (isLoggedIn) {
      alert("Already logged in");
    }
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const userLogin = users.find((user) => user.email === email && user.password === password);

    if (userLogin) {
      login(userLogin.firstName); // Login and set userName
      alert("Login Successfully");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleLogout = () => {
    logout(); // Call logout from context
    alert("Logout Successfully!");
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <MainHeader />
      <Header  />

      <nav aria-label="breadcrumb" className="mt-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ms-5">
            <a href="#" className="text-decoration-none">
              <IoHomeOutline className="top-1" /> Home
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Login</li>
        </ol>
      </nav>

      {!isLoggedIn ? (
        <div>
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
                textAlign: "left"
              }}
            >
              Login
            </h1>
            <p style={{ textAlign: "left" }}>
              Don't have an account?{" "}
              <NavLink to={"/Signup"} style={{ textDecoration: "none" }}>
                Create here
              </NavLink>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 w-75">
                <input
                  type="email"
                  className="form-control"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ padding: "15px", backgroundColor: "#eefeff" }}
                />
              </div>
              <div className="mb-3 w-75">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ padding: "15px", backgroundColor: "#eefeff" }}
                />
              </div>
              <p style={{ textAlign: "left" }}>
                <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5" }}>
                  Forget password?
                </a>
              </p>
              <button type="submit" className="btn btn-danger me-auto py-2 px-4" style={{ left: "0", display: "block", width: "25%" }}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 d-flex flex-column">
              <button
                className={`login_dashboard ${activeButton === 'dashboard' ? 'active' : ''}`}
                onClick={() => handleButtonClick('dashboard')}
              >
                <VscSettings /> Dashboard
              </button>
              <button
                className={`login_dashboard ${activeButton === 'orders' ? 'active' : ''}`}
                onClick={() => handleButtonClick('orders')}
              >
                <IoBagOutline /> Orders
              </button>
              <button
                className={`login_dashboard ${activeButton === 'account' ? 'active' : ''}`}
                onClick={() => handleButtonClick('account')}
              >
                <FaRegUser /> Account Details
              </button>
              <button
                className={`login_dashboard ${activeButton === 'logout' ? 'active' : ''}`}
                onClick={handleLogout}
              >
                <BiLogOut /> Logout
              </button>
            </div>

            <div className="col-md-8">
              {activeButton === 'dashboard' && <UserDashboard userName={userName} />}
              {activeButton === 'orders' && <UserOrder />}
              {activeButton === 'account' && <UserAccount userName={userName} />}
            </div>
          </div>
        </div>
      )}

      <Shipping />
      <Footer />
    </>
  );
};

export default Login;

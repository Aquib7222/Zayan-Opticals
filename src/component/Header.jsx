// import { Link } from "react-router-dom";
// import "./Header.css";
// import { GiSunglasses } from "react-icons/gi";
// import { FaCartPlus } from "react-icons/fa";
// import { useAuth0 } from "@auth0/auth0-react";
// import { FaHeadphonesAlt } from "react-icons/fa";
// function Header({ loggedIn, userName, onLogout }) {
//   const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg ">
//         <div className="container-fluid">
//           {/* <Link className="navbar-brand ms-5" to={"/"}>
//             ZAYAN OPTICALS <GiSunglasses style={{ height: "20px" }} />
//           </Link> */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul className="navbar-nav ">
//               <li className="nav-item">
//                 <Link className="nav-link " aria-current="page" to={"/"}>
//                   Home
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to={"/Shop"}>
//                   Shop
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to={"/About"}>
//                   About
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to={"/Contact_Us"}>
//                   Contact Us
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link">Sign In</Link>
//                 {/* <button onClick={onLogout} className="logout-btn">Logout</button> */}
//               </li>

//               <li className="nav-item ms-auto d-flex align-items-center py-0">
//                 <div className="nav-link d-flex align-items-center">
//                   <FaHeadphonesAlt style={{height:"40px",width:"40px"}}/>
//                   <div className="ms-2">
//                     <p className="mb-0">1900-888</p>
//                     <p className="mb-0">24/7 Support Center</p>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;

import { Link } from "react-router-dom";
import "./Header.css";
import { GiSunglasses } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { FaHeadphonesAlt } from "react-icons/fa";

function Header({ loggedIn, userName, onLogout }) {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/Shop"}>
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/About"}>
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/Contact_Us"}>
                  Contact Us
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/Login"} className="nav-link">Sign In</Link>
              </li>

              {/* Last li with contact info, aligned to the right */}
              <li className="nav-item ms-auto d-flex align-items-center py-0">
                <div className="nav-link d-flex align-items-center mb-0">
                  <FaHeadphonesAlt style={{ height: "40px", width: "40px" }} />
                  <div className="ms-2 mb-0 ">
                    <p className="mb-0"style={{lineHeight:"1" ,color:"red" ,fontSize:"30px"}}>1900-888</p>
                    <p className="mb-0 "style={{fontSize:"11px"}}>24/7 Support Center</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

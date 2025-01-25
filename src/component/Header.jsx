import { Link } from "react-router-dom";
import "./Header.css";
import { GiSunglasses } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
function Header({ loggedIn, userName, onLogout }) {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5" to={"/"}>
            ZAYAN OPTICALS <GiSunglasses style={{ height: "20px" }} />
          </Link>
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
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={"/"}>
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
                <Link className="nav-link" to={"/Login"}>
                  <button className="login-button px-2 bg-danger text-white">LOGIN</button>
                </Link>
                {/* <button onClick={onLogout} className="logout-btn">Logout</button> */}
               </li>

              <li>
                {" "}
                <Link className="nav-link" to={"/cart"}>
                  
                  <FaCartPlus
                    className="cart_icon"
                    style={{ height: "15px", width: "20px" }}
                  />
                  <span style={{ marginTop: "-10px", top: "0px" }}>10</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

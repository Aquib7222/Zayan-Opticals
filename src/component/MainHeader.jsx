import { FaCartPlus } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { NavLink,Link } from "react-router-dom";
import { useState } from "react";
import "./MainHeader.css";
import Logo from "../Images/Logo.jpg";
import { useAuth } from "./Context/AuthContext";

const MainHeader = () => {
  const [isAccountHovered, setAccountHovered] = useState(false);
  const { isLoggedIn,logout }=useAuth();
  return (
    <>
      <div className="container-fluid mb-0 py-0">
        <ul className="d-flex justify-content-between mt-4 list-unstyled">
          <li>
            {/* <h3>Zayan Opticals</h3> */}
            <img src={Logo} alt="" style={{height:"80px"}}/>
          </li>

          {/* search box */}
          <li>
            <input
              className="search_box"
              type="text"
              placeholder="Search products"
              style={{  padding: "10px" }}
            />
          </li>

          {/* //cart */}
          <div className="d-flex">
            <NavLink to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
              <li>
                <FaCartPlus /> Cart
              </li>
            </NavLink>

            {/* Account Dropdown */}
            <li
              className="cursor-pointer ms-3 position-relative"
              onMouseEnter={() => setAccountHovered(true)}
              onMouseLeave={() => setAccountHovered(false)}
            > {/* If logged in, show account options; otherwise, show login/register */}
            {isLoggedIn ? (
              <>
                {isAccountHovered && (
                  <div className="dropdown-menu">
                    <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                      <p>My Account</p>
                    </Link>
                    <button onClick={logout}>Logout</button>
                  </div>
                )}
                <p>Account</p>
              </>
            ) : (
              <>
                <FaRegUser /> Account
                {isAccountHovered && (
                  <div className="dropdown-menu">
                    <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                      <p>Login</p>
                    </Link>
                    <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
                      <p>Register</p>
                    </Link>
                  </div>
                )}
              </>
            )}
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default MainHeader;

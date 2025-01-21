import { Link } from "react-router-dom";
import "./Header.css";
import { BsCart } from "react-icons/bs";
import { GiSunglasses } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5" to={"/"}>
            ZAYAN OPTICALS <GiSunglasses style={{ height: "30px", }} />
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
                  <button className="bg-danger text-white px-2 text-bold rounded-2">LOGIN</button>
                </Link>
              </li>
              <li>
                {" "}
                <Link className="nav-link" to={"/cart"}>
                  {/* <FaCartPlus /> */}
                  <FaCartPlus className="cart_icon"/> 
                  <span style={{marginTop:"-10px"}}>10</span>
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

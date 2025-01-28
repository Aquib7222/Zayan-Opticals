import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminHeader from "../component/Admin/AdminHeader";
import SideBar from "../component/Admin/SideBar";
import ProductCustomer from "../component/Admin/ProductCustomer";
import "./Admin.css";

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, email, adminId } = location.state || {};

  const [close, setClose] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track if the user is logged in

  // Check if the token exists in localStorage (this will act as authentication check)
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/adminlogin"); // Redirect to login if no token is found
    }
  }, [navigate]);

  // Handle Logout
  const handleLogout = () => {
    // Remove the token from localStorage to simulate the token expiration
    localStorage.removeItem("authToken");

    // Set isLoggedIn to false (optional, based on your UI flow)
    setIsLoggedIn(false);

    // Redirect to login page after logout
    navigate("/adminlogin");
  };

  // If no admin data in location.state, redirect to login
  if (!username || !email || !adminId) {
    return <Navigate to="/adminlogin" />;
  }

  return (
    <div className="layout">
      <SideBar close={close} handleLogout={handleLogout} />
      <div className={`content ${close ? "collapsed" : ""}`}>
        <AdminHeader close={close} setClose={setClose} />
        <div className="main-content">
          <h5 className="text-start ms-2 mt-3 fw-6">
            Welcome, <strong>{username}</strong>
          </h5>
          <ProductCustomer className="products_shows" />

          {/* //charts */}
          <div className="chart_container ">
            
              <div className=" chart_and_transaction me-2 rounded-2 revenue">
                <h5 className="text-start">Revenue Generated</h5>
                <hr />
              </div>
              <div className=" chart_and_transaction rounded-2  transaction">
              <h5 className="text-start">Recent Transactions</h5>
              <hr />
              </div>
           
          </div>
          {/* charts end here */}
        </div>
      </div>
    </div>
  );
};

export default Admin;

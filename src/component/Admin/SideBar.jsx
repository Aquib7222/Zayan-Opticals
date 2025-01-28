import React, { useState } from "react";
import "./Sidebar.css";
import { FaBars } from "react-icons/fa";

const Sidebar = ({ close,handleLogout }) => {
  // const [close, setClose] = useState(false);

  return (
    <div className={`sidebar ${close ? "close" : ""}`} >
      <div className="sidebar-header ">
        <h4>Zayan Opticals</h4>
      </div>
      {!close && (
        <ul>
          <li>Dashboard</li>
          <li>Orders</li>
          <li>Products</li>
          <li>Customers</li>
          <li>Settings</li>
          
        </ul>
      )}
      <button onClick={handleLogout}  style={{backgroundColor:"brown",color:"white",padding:"10px",fontWeight:"600",borderRadius:"10px",marginTop:"100%"}}>Logout</button>
    </div>
  );
};

export default Sidebar;

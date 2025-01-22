import React, { useState } from "react";
import "./Sidebar.css";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [close, setClose] = useState(false);

  return (
    <div className={`sidebar ${close ? "close" : ""}`}>
      <div className="sidebar-header">
        <button className="menu-btn" onClick={() => setClose(!close)}>
          <FaBars />
        </button>
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
    </div>
  );
};

export default Sidebar;

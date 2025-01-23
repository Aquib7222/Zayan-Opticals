import React, { useState } from "react";
import "./Sidebar.css";
import { FaBars } from "react-icons/fa";

const Sidebar = ({ close }) => {
  // const [close, setClose] = useState(false);

  return (
    <div className={`sidebar ${close ? "close" : ""}`}>
      <div className="sidebar-header">
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
    </div>
  );
};

export default Sidebar;

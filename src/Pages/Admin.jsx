import "./Admin.css";
import AdminHeader from "../component/Admin/AdminHeader";
import SideBar from "../component/Admin/SideBar";
import { useState } from "react";
import ProductCustomer from "../component/Admin/ProductCustomer";
const Admin = () => {

  const [close, setClose] = useState(false);
  return (
    <>
    

      <div className="layout">
        <SideBar close={close}/>
        <div className={`content ${close ? "collapsed" : ""}`}>
          <AdminHeader close={close} setClose={setClose} />
          <div className="main-content">
          <h5 className="text-start ms-2 mt-2 fw-6">DASHBOARD</h5>
          {/* Additional content can go here */}
            <ProductCustomer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;

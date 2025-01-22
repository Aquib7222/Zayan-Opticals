import "./Admin.css";
import AdminHeader from "../component/Admin/AdminHeader";
import SideBar from "../component/Admin/SideBar";
const Admin = () => {
  return (
    <>
      {/* <div className="grid-container">
            <AdminHeader/>
            <SideBar/>
        </div> */}

      <div className="layout">
        <SideBar />
        <div className="content">
          <AdminHeader />
          <div className="main-content">
          <h2>Welcome to the Admin Panel</h2>
          {/* Additional content can go here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;

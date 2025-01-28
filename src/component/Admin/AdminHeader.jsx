import "./AdminHeader.css";
import { FaBars } from "react-icons/fa";

const AdminHeader = ({ close, setClose }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="menu-btn" onClick={() => setClose(!close)}>
          <FaBars  style={{height:"15px",marginLeft:"-30px"}}/>
        </button>
        {/* <a href="" classNameName="nav-link">ZAYAN OPTICALS</a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            

            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Aquib
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default AdminHeader;

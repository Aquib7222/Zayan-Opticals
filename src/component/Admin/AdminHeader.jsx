import "./AdminHeader.css";
import { FaBars } from "react-icons/fa";

const AdminHeader = ({ close, setClose }) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button className="menu-btn" onClick={() => setClose(!close)}>
          <FaBars  style={{height:"15px",marginLeft:"-30px"}}/>
        </button>
        {/* <a href="" className="nav-link">ZAYAN OPTICALS</a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Aquib
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default AdminHeader;

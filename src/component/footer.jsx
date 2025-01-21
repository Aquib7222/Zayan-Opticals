import "./footer.css";
import { PiTruck, PiPhoneCall } from "react-icons/pi";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { SiAdguard } from "react-icons/si";

function Footer() {
  return (
    <>
      <div
        className="flex_container"
        style={{ marginLeft: "25px", position: "relative", zIndex: 2 }}
      >
        <div
          className="row"
          style={{
            border: "1px solid black",
            marginTop: "20px",
            position: "relative",
            zIndex: 2,
            background: "white",
            top: "100px",
          }}
        >
          <div className="col-md-3">
            <PiTruck size={80} />
            <h5>FREE SHIPPING</h5>
          </div>
          <div className="col-md-3">
            <GiAnticlockwiseRotation size={80} />
            <h5>30 DAYS RETURN POLICY</h5>
          </div>
          <div className="col-md-3">
            <PiPhoneCall size={80} />
            <h5>24/7 CUSTOMER SUPPORT</h5>
          </div>
          <div className="col-md-3">
            <SiAdguard size={80} />
            <h5>COMMITMENT TO QUALITY</h5>
          </div>
        </div>
      </div>

      <footer
        className="py-5 footer"
        style={{ position: "relative", top: "50px", zIndex: 1 }}
      >
        <div className="row container-fluid">
          <div className="col-12 col-md-4 mb-3 px-5">
            <h5>Contact Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-primary">
                  Rohini, Sector 1, New Delhi, India
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-primary">
                  Phone: +91 1234567890
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-primary">
                  abc@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-3 px-5">
            <h5>Product</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Orders
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-danger">
                  Download
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-primary">
                  Address
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-primary">
                  Account Details
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center ">
          <p>© 2024 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;

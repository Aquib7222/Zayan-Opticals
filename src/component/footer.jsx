import "./footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
function Footer() {
  return (
    <>
      <footer
        className="py-5 footer"
        style={{ position: "relative", top: "50px", zIndex: 1 }}
      >
        <div className="row container-fluid">
          <div className="col-12 col-md-4 mb-3 px-5">
            <h3>Contact Us</h3>
            <ul className="nav flex-column flex-star">
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
            <h3>Company</h3>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-danger">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-primary">
                  Terms & Condition
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-primary">
                  Contact Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-primary">
                  Support Center
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-primary">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <h3>Account</h3>

            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Sign In
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Register
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  View Cart
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <div class="container mt-0">
          <div class="row align-items-center">
            <div class="col-12 ">
              <div class="footer-bottom"></div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6">
              <p class="font-sm mb-0">
                © 2024, <strong class="text-brand "style={{color:"red"}}>- Zayan Opticals</strong> <br />
                All rights reserved
              </p>
            </div>
            <div class="col-xl-4 col-lg-6 text-center d-none d-xl-block">
              <div class="hotline d-lg-inline-flex mr-30">
                <p>
                <strong class="text-brand "style={{color:"red",fontSize:"30px"}}>1900 -6666</strong><br />

                  Working 8:00 - 22:00
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
              <div class="mobile-social-icon  ">
                <h6>Follow Us</h6>
                <a href="" className="facebook"><FaFacebook /></a>
                <a href="" className="insta"><RiInstagramFill /></a>
                <a href="" className="twitter"><FaTwitter /></a>
                <a href="" className="pinterest"><FaPinterest /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;

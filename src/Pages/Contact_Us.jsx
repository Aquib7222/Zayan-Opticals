import Footer from "../component/footer";
import Header from "../component/Header";
import MainHeader from "../component/MainHeader";
import "./Contact_Us.css";
import { IoHomeOutline } from "react-icons/io5";
function Contact() {
  return (
    <>
      <MainHeader />
      <Header />

      <div className=" container-fluid">
        <nav
          style={{
            "--bs-breadcrumb-divider":
              "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'8\\' height=\\'8\\'%3E%3Cpath d=\\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\\' fill=\\'%236c757d\\'/%3E%3C/svg%3E')",
          }}
          aria-label="breadcrumb"
        >
          {/* Breadcrumb content */}

          <ol className="breadcrumb mt-3">
            <li className="breadcrumb-item">
              <a href="#" className="text-decoration-none">
                <IoHomeOutline className="top-1" /> Home
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-md-6">
            <h4 style={{ textAlign: "left" }}>Contact form</h4>
            <h1 style={{ textAlign: "left" }}>Drop Us a Line</h1>
            <p style={{ opacity: "0.5" }}>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div class="input-group mb-3 ">
              <input
                type="text"
                aria-label="First name"
                class="form-control"
                placeholder="Your Name"
              />
              <input
                type="email"
                aria-label="Last name"
                class="form-control"
                placeholder="Your Email"
                style={{ marginLeft: "10px" }}
              />
            </div>

            <div class="input-group mb-3 ">
              <input
                type="text"
                aria-label="First name"
                class="form-control"
                placeholder="Your Phone Number"
              />
              <input
                type="email"
                aria-label="Last name"
                class="form-control"
                placeholder="Subject"
                style={{ marginLeft: "10px" }}
              />
            </div>
            <div class="input-group">
              <textarea
                class="form-control"
                aria-label="With textarea"
                placeholder="Message"
                rows="8"
              ></textarea>
            </div>
            <button
              style={{
                padding: "15px",
                backgroundColor: "brown",
                color: "white",
                marginTop: "30px",
                borderRadius: "10px",
                left: "0",
              }}
            >
              Send Message
            </button>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6999.076756373275!2d77.0896914113761!3d28.703452362577803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06a9da4ebbe1%3A0xde2477a0391232b5!2sSector%201%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1737893347917!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Contact;

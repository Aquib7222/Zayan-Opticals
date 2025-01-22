import Footer from "../component/footer";
import Header from "../component/Header";
import "./Contact_Us.css";
function Contact() {
  return (
    <>
      <Header />

      <h2 className="mt-3">Contact Us</h2>

      <div className="container  ">
        <div className="contact-form d-flex justify-content-center  mt-4">
          <form action="https://formspree.io/f/xqaeznqn" method="POST" className="d-flex flex-column  gap-2  w-25">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
             
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              autoComplete="off"
             
            />
            <textarea
              name="message"
              id=""
              cols="20"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Contact;

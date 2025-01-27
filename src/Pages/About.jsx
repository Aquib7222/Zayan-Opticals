import Footer from "../component/footer";
import Header from "../component/Header";
import BannerImage from "../Images/Banner_image.jpg";
import "./About.css";
import about2 from "../Images/about2.jpg";
import MainHeader from "../component/MainHeader";
import { IoHomeOutline } from "react-icons/io5";
import Shipping from "../component/Shipping";

function About() {
  return (
    <>
      <MainHeader />
      <Header />

      {/* for Home > About breadcrumb */}
      <nav
        style={{
          "--bs-breadcrumb-divider":
            "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'8\\' height=\\'8\\'%3E%3Cpath d=\\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\\' fill=\\'%236c757d\\'/%3E%3C/svg%3E')",
        }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb mt-3">
          <li className="breadcrumb-item ms-5">
            <a href="#" className="text-decoration-none">
              <IoHomeOutline className="top-1" /> Home
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            About Us
          </li>
        </ol>
      </nav>
      <hr />

      <section className="content_section">
        <div className="container-fluid ms-4 me-5">
          <h3 style={{ fontWeight: "600" }}>About Us</h3>
          <p>
            At Zayan Opticals, we are dedicated to bringing you the best in
            stylish and functional eyewear. Our passion for creating
            high-quality sunglasses that not only protect your eyes but also
            elevate your style sets us apart. With years of experience in the
            optical industry, we have curated a collection that combines the
            latest fashion trends with cutting-edge technology. <br/>Whether you're
            looking for something sleek and modern or classic and timeless,
            Zayan Opticals has the perfect pair for you. We believe in offering
            our customers eyewear that enhances their lifestyle and keeps them
            looking great, all while ensuring the utmost comfort and protection.
          </p>
        </div>
        <div className="container-fluid ms-4 me-5">
          <h3 style={{ fontWeight: "700" }}>Our Product</h3>
          <p>
            At Zayan Opticals, we offer a wide range of sunglasses designed to
            suit every taste and occasion. From trendy designs to classic
            styles, our collection includes polarized sunglasses, aviators,
            oversized frames, sports sunglasses, and more. Each product is
            crafted with precision to provide exceptional durability, comfort,
            and protection against harmful UV rays.<br/> We are committed to offering
            only the highest quality materials, ensuring that your sunglasses
            will not only enhance your look but also stand the test of time.
            Explore our products today and find your perfect pair of sunglasses.
          </p>
        </div>
        <div className="container-fluid ms-4 me-5">
          <h3 style={{ fontWeight: "700" }}>Our Mission</h3>
          <p>
            Our mission at Zayan Opticals is simple: to provide premium,
            fashionable sunglasses that combine style, comfort, and eye
            protection. We are committed to offering high-quality products that
            cater to our customers' diverse needs and preferences. At Zayan
            Opticals, we understand the importance of protecting your eyes from
            the sun's harmful rays while still looking <br/>stylish. We strive to
            continuously innovate and provide eyewear solutions that meet the
            ever-evolving needs of our customers. Our goal is to ensure that
            each customer leaves our store feeling confident, comfortable, and
            ready to take on the world with their new sunglasses.
          </p>
        </div>
        <div className="container-fluid ms-4 me-5">
          <h3 style={{ fontWeight: "700" }}>Why Choose Zayan Opticals</h3>
          <p>
            1.Quality You Can Trust: We pride ourselves on offering only the best
            in eyewear. Our sunglasses are made from durable materials and
            feature high-quality lenses to provide optimal UV protection and
            clarity.<br/>2. Stylish and Trendy Designs: From modern, edgy frames to
            timeless classics, our sunglasses collection is curated to ensure
            that there’s something for everyone. Whatever your style, you’ll
            find the perfect pair to complement your look.<br/>3. Affordable Luxury: At
            Zayan Opticals, we believe that luxury should be accessible to
            everyone. Our sunglasses are designed to offer exceptional quality
            without the hefty price tag.<br/>4. Customer Satisfaction: We’re committed
            to providing an outstanding customer experience. Our team is always
            ready to help you find the perfect pair and ensure your complete
            satisfaction with your purchase.<br/>5. Free Shipping & Easy Returns: Enjoy
            the convenience of free shipping on all orders and hassle-free
            returns. If you're not satisfied with your sunglasses, we offer easy
            returns to make sure you're completely happy with your purchase.
          </p>
        </div>
        <div className="container-fluid ms-4 me-5">
          <h3 style={{ fontWeight: "700" }}>Contact Us</h3>
          <p>
            We’d love to hear from you! Whether you have a question about our
            sunglasses, need help with an order, or just want to say hello, our
            team is here to assist you. Feel free to reach out to us through the
            contact information below, and we’ll get back to you as soon as
            possible.<br/> Email: support@zayanopticals.com<br/> Phone: +1 234 567 890<br/>
            Address: 123 Optical Street, Fashion City, Country<br/> Business Hours:
            Monday - Friday: 9:00 AM - 6:00 PM (GMT)<br/><br/> You can also follow us on
            social media for the latest updates and promotions:<br/> Instagram:
            @ZayanOpticals <br/>Facebook: ZayanOpticalsOfficial<br/> Twitter:
            @ZayanOpticals
          </p>
        </div>
      </section>
      <Shipping />
      <Footer />
    </>
  );
}
export default About;

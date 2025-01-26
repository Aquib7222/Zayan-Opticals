import Footer from "../component/footer";
import Header from "../component/Header";
import BannerImage from "../Images/Banner_image.jpg";
import "./About.css";
import about2 from "../Images/about2.jpg";
import MainHeader from "../component/MainHeader";

function About() {
  const divStyle1 = {
    backgroundImage: `url(${BannerImage})`,
    height: "80vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginLeft: "10px",
    marginRight: "10px",
  };

  return (
    <>
    <MainHeader/>
      <Header />

      {/* for Home > About breadcrumb */}
      <nav
        style={{
          "--bs-breadcrumb-divider":
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%228%22 height=%228%22%3E%3Cpath d=%22M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z%22 fill=%22%236c757d%22/%3E%3C/svg%3E')",
        }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb ">
          <li className="breadcrumb-item">
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              Home
            </a>
          </li>

          <li
            className="breadcrumb-item active"
            aria-current="page"
            style={{ fontWeight: "600", color: "black" }}
          >
            About Us
          </li>
        </ol>
      </nav>

      {/* image */}

      <div className="Slider_image " style={divStyle1}></div>

      <div class="container-fluid para">
        <div class="left">
          <h1>
            We Can Convert Your Idea Into A Reality <br />
            <br />
            <h6>james Smith / Ceo</h6>
          </h1>
        </div>
        <div class="right">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum”.
          </p>
        </div>
      </div>

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h2>Learn About Our Birth History & Our Mission</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum’s not simply random
                text. It has roots in a piece classical Latin literature from
                Richard Clintock, arm Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more words. Consectetur, from
                a Lorem Ipsum passage, and going through the cites of the word
                in classical literature, discovered the undoubtable source.
              </p>
              <h3>Our Birth</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum’s not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard Clintock, a Latin.
                Contrary to popular belief, Lorem Ipsum’s not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard Clintock, a Latin
                professor at Hampden Sydney College in Virginia. Latin words,
                consectetur, from a Lorem Ipsum passage.
              </p>
              <h3>Our Misson</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum’s not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard Clintock, a Latin
                professor looked up one of the more Latin words consectetur.
              </p>
            </div>
            <div className="col-md-6 ">
              <img
                src={about2}
                alt=""
                style={{ height: "500px", width: "600px", marginLeft: "50px" }}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default About;

import Footer from "../component/footer";
import Header from "../component/Header";
import MainHeader from "../component/MainHeader";
import Shipping from "../component/Shipping";
import { IoHomeOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { useCartContext } from "../component/Context/CartContext";
const Checkout = () => {
  const { cart, total_amount } = useCartContext();

  
  // GST rate (5%)
  const gstRate = 0;

  // Calculate total GST for all items
  const totalGST = cart.reduce((acc, item) => {
    const gstAmount = (item.price * item.quantity) * (gstRate / 100);
    return acc + gstAmount;
  }, 0);
  return (
    <>
      <MainHeader />
      <Header />
      <nav
        style={{
          "--bs-breadcrumb-divider":
            "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'8\\' height=\\'8\\'%3E%3Cpath d=\\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\\' fill=\\'%236c757d\\'/%3E%3C/svg%3E')",
        }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb mt-3">
          <li className="breadcrumb-item ms-5">
            <a href={"/cart"} className="text-decoration-none">
              <IoHomeOutline className="top-1" /> Cart
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Checkout
          </li>
        </ol>
      </nav>
      <hr />

      <div className="container-fluid mt-2">
        <div className="row">
          {/* // Order Address  */}

          <div className="col-md-6">
            <div className="row">
              <h1
                style={{ fontWeight: "700", opacity: "0.9", textAlign: "left" }}
              >
                Checkout
              </h1>
              <p style={{ opacity: "0.9", textAlign: "left" }}>
                There are {cart.length} products in the cart
              </p>
              <form action="">
                <h3
                  style={{
                    textAlign: "left",
                    marginTop: "50px",
                    fontWeight: "600",
                  }}
                >
                  Billing Details
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name *"
                      style={{ padding: "15px" }}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone *"
                      style={{ padding: "15px" }}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address *"
                      style={{ padding: "15px" }}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State *"
                      style={{ padding: "15px" }}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City *"
                      style={{ padding: "15px" }}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postcode/Zip *"
                      style={{ padding: "15px" }}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address *"
                      style={{ padding: "15px" }}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <textarea
                      name=""
                      id=""
                      placeholder="Additional Information"
                      className="w-100 "
                      style={{ borderRadius: "5px", padding: "10px" }}
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* //order payment section */}
          <div
            className="col-md-6 h-auto"
            style={{
              borderRadius: "5px",

              marginTop: "150px",
              boxShadow: "5px 5px 10px rgba(0,0,0,0.2)",
            }}
          >
            <div className="row mb-3">
              <h3 style={{ textAlign: "left", fontWeight: "600" }}>
                Your Orders
              </h3>
              <hr />
              <div className="col-md-12">

                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" className="text-start">
                        Product
                      </th>
                      <th scope="col">GST</th>
                      <th scope="col">Quantity</th>
                      <th scope="col" className="text-end">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item,index)=>(
                    <tr key={index}>
                      <td className="text-start">{item.productName}</td>
                      <td>included</td>
                      <td>{item.quantity}</td>
                      <td className="text-end text-danger">
                        <h4>{item.price*item.quantity}</h4>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                
                </table>

                {/* // */}
                <table class="table">
                  <tbody>
                    <tr >
                      <th scope="row" colspan="2" className="text-start">
                        subtotal
                      </th>
                      <td colspan="1" className="text-end">
                        <h5 className="text-danger">{total_amount}</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* //gst */}
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row" colspan="2" className="text-start">
                        GST
                      </th>
                      <td colspan="1" className="text-end">
                        {totalGST}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* //shipping */}
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row" colspan="2" className="text-start">
                        Shipping
                      </th>
                      <td colspan="1" className="text-end">
                        <h4>Free</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* //grand total */}
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row" colspan="2" className="text-start">
                        Grand Total
                      </th>
                      <td colspan="1" className="text-end">
                        <h3 className="text-danger">{total_amount+totalGST}</h3>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="ms-5">
            <h4 className="mt-5 ms-5 fw-bold">Payment</h4>
            <div class="form-check d-flex justify-content-center ms-5">
              <input
                class="form-check-input me-2 ms-4"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Cash On Delivery
              </label>
            </div>
            <button
              style={{
                padding: "15px 30px",
                borderRadius: "10px",
                backgroundColor: "brown",
                color: "white",
                marginTop: "10px",
                marginLeft: "100px",
              }}
            >
              Place An Order <LuLogOut />
            </button>
          </div>
        </div>
      </div>

      <Shipping />
      <Footer />
    </>
  );
};
export default Checkout;

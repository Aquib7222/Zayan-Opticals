
import React from "react";
import Header from "../component/Header";
import BannerImage from "../Images/Banner_image.jpg";
import "./Cart.css";
import { MdDeleteForever } from "react-icons/md";
import { useCartContext } from "../component/Context/CartContext";
import { NavLink } from "react-router-dom";
import CartAmountToggle from "../component/CartAmountToggle";
import MainHeader from "../component/MainHeader";
import Shipping from "../component/Shipping";
import Footer from "../component/footer";
import { useAuth } from "../component/Context/AuthContext";
const Cart = () => {
  const {
    cart,
    total_amount,
    shipping_fee,
    removeFromCart,
    removeAllFromCart,
    updateCartQuantity,
  } = useCartContext();

//   const { email } = useAuth();

// const userCart = JSON.parse(localStorage.getItem(`${email}_ZayanCart`));
// console.log("usercart:",userCart);

  const handleIncrement = (id, quantity) => {
    updateCartQuantity(id, quantity + 1);
  };

  const handleDecrement = (id, quantity) => {
    updateCartQuantity(id, Math.max(1, quantity - 1));
  };

  if (cart.length === 0) {
    return (
      <>
      <MainHeader />
        <Header />
        <img
          src={BannerImage}
          alt=""
          style={{ height: "65vh", width: "100%" }}
        />
        <h3 className="text-center mt-5">CART</h3>
        <div className="container mt-5 mb-5">
          <div className="row cart_details h-auto">
            <div className="col-12 text-center">
              <h4>Cart is empty</h4>
            </div>
            <NavLink to={"/Shop"}>
              <button className="continue_shopping bg-primary p-2 text-white">
                Continue Shopping
              </button>
            </NavLink>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <MainHeader />
      <Header />
      {/* <img src={BannerImage} alt="" style={{ height: "65vh", width: "100%" }} /> */}

      <nav
        style={{
          "--bs-breadcrumb-divider":
            "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'8\\' height=\\'8\\'%3E%3Cpath d=\\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\\' fill=\\'%236c757d\\'/%3E%3C/svg%3E')",
        }}
        aria-label="breadcrumb"
      >
        {/* Breadcrumb content */}

        <ol className="breadcrumb mt-3">
          <li className="breadcrumb-item ms-3">


            
            <a href="#" className="text-decoration-none text-black">
              Shop
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Cart
          </li>
        </ol>
      </nav>
      {/* //breadcrumb end here */}


      <h3 className="text-center mt-3">CART</h3>

      <div className="container mt-2 mb-5">
        <div className="row cart_details h-auto">
          <div className="col-12 border d-flex flex-wrap pt-2 h-auto">
            <table className="table table-striped w-100">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">SUB TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={product.image}
                        style={{ height: "30px", width: "100px" }}
                        alt={product.name}
                      />
                    </td>
                    <td>{product.productName}</td>
                    <td>Rs {product.price}</td>
                    <td>
                      <CartAmountToggle
                        amount={product.quantity}
                        setDecrease={() =>
                          handleDecrement(product.id, product.quantity)
                        }
                        setIncrease={() =>
                          handleIncrement(product.id, product.quantity)
                        }
                      />
                    </td>
                    <td>Rs {product.quantity * product.price}</td>
                    <td>
                      <MdDeleteForever
                        onClick={() => removeFromCart(product.id)}
                        className="delete_Button text-danger"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <NavLink to={"/Shop"}>
              <button className="continue_shopping  p-2 text-white buttons_In_cart">
                Continue Shopping
              </button>
            </NavLink>

            <button
              className="clear_cart ms-auto  text-white buttons_In_cart"
              onClick={removeAllFromCart}
            >
              <MdDeleteForever/> Clear Cart
            </button>
            <div className="border ms-3 pt-2 cart_details w-25 mb-3 ">
              <h6>CART DETAILS</h6>
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Sub Total</th>
                    <td>Rs {total_amount}</td>
                  </tr>
                  <tr>
                    <th scope="row">Shipping</th>
                    <td>Rs {shipping_fee}</td>
                  </tr>
                  <tr>
                    <th scope="row">Total</th>
                    <td>Rs {total_amount + shipping_fee}</td>
                  </tr>
                </tbody>
              </table>
              <NavLink to={"/checkout"}>
              <button className="payment_button mt-2 w-75 buttons_In_cart">
                Proceed To Payment
              </button>
              </NavLink>
              
            </div>
          </div>
        </div>
      </div>
      <Shipping/>
      <Footer/>
    </>
  );
};

export default Cart;

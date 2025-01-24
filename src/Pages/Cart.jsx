// import React, { useState } from "react";
// import Header from "../component/Header";
// import BannerImage from "../Images/Banner_image.jpg";
// import "./Cart.css";
// import sunglassesArray from "../component/Sunglasses";
// import { MdDeleteForever } from "react-icons/md";
// import { useCartContext } from "../component/Context/CartContext";
// import { NavLink } from "react-router-dom";
// import CartAmountToggle from "../component/CartAmountToggle";

// const Cart = () => {
//   const { cart, total_amount, shipping_fee,  } = useCartContext();
//   const { removeFromCart, removeAllFromCarrt } = useCartContext();

//   const handleIncrement = (id, quantity) => {
//     updateCartQuantity(id, quantity + 1);
//   };

//   const handleDecrement = (id, quantity) => {
//     updateCartQuantity(id, Math.max(1, quantity - 1));
//   };

//   // const [quantities, setQuantities] = useState(
//   //   sunglassesArray.reduce((acc, cart) => {
//   //     acc[cart.id] = 1;
//   //     return acc;
//   //   }, {})
//   // );
//   // const handleIncrement = (id) => {
//   //   const newQuantity = quantities[id] + 1;
//   //   setQuantities((prevQuantities) => ({
//   //     ...prevQuantities,
//   //     [id]: newQuantity,
//   //   }));

//   //   // Dispatch to update the quantity in the cart
//   //   dispatch({
//   //     type: "UPDATE_QUANTITY",
//   //     payload: { id, quantities: newQuantity },
//   //   });
//   //   dispatch({ type: "CART_TOTAL_PRICE" }); // Recalculate total
//   // };

//   // const setDecrease = (id) => {
//   //   setQuantities((prevQuantities) => ({
//   //     ...prevQuantities,
//   //     [id]: Math.max(1, prevQuantities[id] - 1), // Ensure quantity doesn't go below 1
//   //   }));
//   // };

//   // const setIncrease = (id) => {
//   //   setQuantities((prevQuantities) => ({
//   //     ...prevQuantities,
//   //     [id]: prevQuantities[id] + 1, // Increment the quantity for the specific product
//   //   }));
//   // };
//   // const handleDecrement = (id) => {
//   //   const newQuantity = Math.max(quantities[id] - 1, 1);
//   //   setQuantities((prevQuantities) => ({
//   //     ...prevQuantities,
//   //     [id]: newQuantity,
//   //   }));

//   //   // Dispatch to update the quantity in the cart
//   //   dispatch({
//   //     type: "UPDATE_QUANTITY",
//   //     payload: { id, quantities: newQuantity },
//   //   });
//   //   dispatch({ type: "CART_TOTAL_PRICE" }); // Recalculate total
//   // };

//   if (cart.length === 0) {
//     return (
//       <>
//         <Header />
//         <img
//           src={BannerImage}
//           alt=""
//           style={{ height: "65vh", width: "100%" }}
//         />
//         <h3 className="text-center mt-5">CART</h3>
//         <div className="container mt-5 mb-5">
//           <div className="row cart_details h-auto">
//             <div className="col-12 text-center">
//               <h4>Cart is empty</h4>
//             </div>
//             <NavLink to={"/Shop"}>
//               <button className="continue_shopping bg-primary p-2 text-white">
//                 Continue Shopping
//               </button>
//             </NavLink>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />

//       <img src={BannerImage} alt="" style={{ height: "65vh", width: "100%" }} />
//       <nav
//         style={{
//           "--bs-breadcrumb-divider":
//             "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%228%22 height=%228%22%3E%3Cpath d=%22M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z%22 fill=%22%236c757d%22/%3E%3C/svg%3E')",
//           marginTop: "20px",
//         }}
//         aria-label="breadcrumb"
//       >
//         <ol className="breadcrumb">
//           <li className="breadcrumb-item">
//             <a
//               href="/Shop"
//               style={{
//                 textDecoration: "none",
//                 color: "black",
//                 marginLeft: "10px",
//               }}
//             >
//               Shop
//             </a>
//           </li>
//           <li className="breadcrumb-item active" aria-current="page">
//             <a
//               href=""
//               style={{
//                 textDecoration: "none",
//                 color: "black",
//                 fontWeight: "bold",
//               }}
//             >
//               Cart
//             </a>
//           </li>
//         </ol>
//       </nav>

//       <h3 className="text-center mt-3">CART</h3>

//       {/* cart items */}
//       <div className="container mt-2 mb-5">
//         <div className="row cart_details h-auto">
//           <div className="col-12 border d-flex flex-wrap pt-2 h-auto">
//             <table className="table table-striped w-100">
//               <thead>
//                 <tr>
//                   <th scope="col"></th>
//                   <th scope="col">PRODUCT</th>
//                   <th scope="col">PRICE</th>
//                   <th scope="col">QUANTITY</th>
//                   <th scope="col">SUB TOTAL</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.map((product) => (
//                   <tr key={product.id}>
//                     <td>
//                       <img
//                         src={product.image}
//                         style={{ height: "30px", width: "100px" }}
//                       />
//                     </td>
//                     <td>{product.name}</td>
//                     <td>Rs {product.price}</td>
//                     <td>
                      
//                       <CartAmountToggle
//                         amount={quantities[product.id]} // Use the correct quantity from the state
                       
//                         setDecrease={() => setDecrease(product.id)} // Pass function to decrease
//                         setIncrease={() => setIncrease(product.id)} // Pass function to increase
//                       />
                      
//                     </td>
//                     <td>Rs {quantities[product.id] * product.price}

//                       {console.log(quantities[product.id])}
//                       {console.log(product.price)}
//                       {console.log(quantities[product.id]*product.price)}
//                     </td>
//                     <td>
//                       <MdDeleteForever
//                         onClick={() => removeFromCart(product.id)}
//                         className="delete_Button text-danger"
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <NavLink to={"/Shop"}>
//               <button className="continue_shopping bg-primary p-2 text-white">
//                 Continue Shopping
//               </button>
//             </NavLink>

//             <button
//               className="clear_cart ms-auto bg-danger text-white"
//               onClick={() => removeAllFromCarrt()}
//             >
//               Clear Cart
//             </button>
//             <div className=" border ms-3 pt-2 cart_details w-25 mb-3">
//             <h6>CART DETAILS</h6>
//             <table className="table">
//               <tbody>
//                 <tr>
//                   <th scope="row">Sub Total</th>
//                   <td>Rs {total_amount}</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">Shipping</th>
//                   <td>RS {shipping_fee}</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">Total</th>
//                   <td>Rs {total_amount + shipping_fee}</td>
//                 </tr>
//               </tbody>
//             </table>
//             <button className="payment_button mt-2 w-75">Proceed To Payment</button>
//           </div>
//           </div>

         
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;

import React from "react";
import Header from "../component/Header";
import BannerImage from "../Images/Banner_image.jpg";
import "./Cart.css";
import { MdDeleteForever } from "react-icons/md";
import { useCartContext } from "../component/Context/CartContext";
import { NavLink } from "react-router-dom";
import CartAmountToggle from "../component/CartAmountToggle";

const Cart = () => {
  const { cart, total_amount, shipping_fee, removeFromCart, removeAllFromCart, updateCartQuantity } = useCartContext();

  const handleIncrement = (id, quantity) => {
    updateCartQuantity(id, quantity + 1);
  };

  const handleDecrement = (id, quantity) => {
    updateCartQuantity(id, Math.max(1, quantity - 1));
  };

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <img src={BannerImage} alt="" style={{ height: "65vh", width: "100%" }} />
        <h3 className="text-center mt-5">CART</h3>
        <div className="container mt-5 mb-5">
          <div className="row cart_details h-auto">
            <div className="col-12 text-center">
              <h4>Cart is empty</h4>
            </div>
            <NavLink to={"/Shop"}>
              <button className="continue_shopping bg-primary p-2 text-white">Continue Shopping</button>
            </NavLink>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <img src={BannerImage} alt="" style={{ height: "65vh", width: "100%" }} />
      <nav style={{ marginTop: "20px" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/Shop" style={{ textDecoration: "none", color: "black", marginLeft: "10px" }}>
              Shop
            </NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <span style={{ fontWeight: "bold" }}>Cart</span>
          </li>
        </ol>
      </nav>

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
                      <img src={product.image} style={{ height: "30px", width: "100px" }} alt={product.name} />
                    </td>
                    <td>{product.productName}</td>
                    <td>Rs {product.price}</td>
                    <td>
                      <CartAmountToggle
                        amount={product.quantity}
                        setDecrease={() => handleDecrement(product.id, product.quantity)}
                        setIncrease={() => handleIncrement(product.id, product.quantity)}
                      
                      />
                    </td>
                    <td>Rs {product.quantity * product.price}</td>
                    <td>
                      <MdDeleteForever onClick={() => removeFromCart(product.id)} className="delete_Button text-danger" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <NavLink to={"/Shop"}>
              <button className="continue_shopping bg-primary p-2 text-white">Continue Shopping</button>
            </NavLink>

            <button className="clear_cart ms-auto bg-danger text-white" onClick={removeAllFromCart}>
              Clear Cart
            </button>
            <div className="border ms-3 pt-2 cart_details w-25 mb-3">
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
              <button className="payment_button mt-2 w-75">Proceed To Payment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

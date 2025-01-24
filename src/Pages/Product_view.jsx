import Header from "../component/Header";
import { IoIosStar } from "react-icons/io";
import {  useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useCartContext } from "../component/Context/CartContext";
// import { useProductContext } from "../component/Context/ProductContext";
// import { useProductContext } from "../component/Context/ProductContext";


const Product_view = () => {
  const [selectedColor, setSelectedColor] = useState("red"); // Default selected color
  const colors = ["red", "blue", "green", "yellow", "purple"]; // Available colors

//  const {products} = useProductContext();

  const location = useLocation();
  const { sunglasses, quantity: initialQuantity } = location.state || {}; // Destructure quantity passed from Shop

  const [quantity, setQuantity] = useState(initialQuantity || 1); // Set default quantity if not provided

  if (!sunglasses) {
    return <h2>No product data available</h2>;
  }

  const { addToCart } = useCartContext();

  // Handlers for incrementing and decrementing quantity
  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <>
      <Header />
     
      <nav
        style={{
          "--bs-breadcrumb-divider":
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%228%22 height=%228%22%3E%3Cpath d=%22M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z%22 fill=%22%236c757d%22/%3E%3C/svg%3E')",
          marginTop: "20px",
        }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a
              href="/Shop"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "10px",
              }}
            >
              Shop
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Product
          </li>
        </ol>
      </nav>
      
      <div
        className="container d-flex justify-content-between gap-2 mt-2 shadow pt-3"
        style={{ borderRadius: "10px" }}
      >
        {/* Left Section (Image) */}
        <div className="left " style={{ width: "50%", height: "410px" }}>
          <img src={sunglasses.image} alt="" className="me-5 border border-2 w-100" />
        </div>

        {/* Right Section (Details) */}
        <div
          className="right d-flex flex-column mt-0 justify-content-start align-items-start"
          style={{ width: "50%", height: "450px" }}
        >
          <h3 className="text-uppercase">{sunglasses.productName}</h3>
          <div className="d-flex align-items-center mb-2">
            <IoIosStar color="gold" size={20} />
            <IoIosStar color="gold" size={20} />
            <IoIosStar color="gold" size={20} />
            <IoIosStar color="gold" size={20} />
            <IoIosStar color="gray" size={20} />
          </div>

          <h4>Price: RS {sunglasses.price}</h4>
          <p>{sunglasses.description}</p>

          <p>Color:</p>
          <div className="d-flex mb-1">
            {colors.map((color, index) => (
              <button
                key={index}
                className="color-button"
                style={{
                  backgroundColor: color,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  border:
                    selectedColor === color
                      ? "1px solid black"
                      : "1px solid gray",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedColor(color)}
              ></button>
            ))}
          </div>

          <p>
            Selected Color: <strong>{selectedColor}</strong>
          </p>

          <p>Quantity:</p>
          <div className="mb-2 mt-2">
            <button
              style={{ width: "40px" }}
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              style={{ width: "60px", textAlign: "center", border: "none" }}
              readOnly
            />
            <button
              style={{ width: "40px" }}
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          <div className="">
            <button className="bg-warning me-2 p-2">ADD TO WISHLIST</button>
            <NavLink to={"/cart"}>
              <button
                className="bg-danger text-white me-2 ms-2 p-2"
                onClick={() => addToCart(sunglasses.id, { ...sunglasses})}
              >
                ADD TO CART
              </button>
            </NavLink>
          </div>
          <button className="bg-black mt-3 text-white w-50 pt-2 pb-2">
            BUY
          </button>
        </div>
      </div>
    </>
  );
};

export default Product_view;

import React from "react";
import { useParams } from "react-router-dom"; // To access the product ID from the URL
import sunglassesArray from "../component/Sunglasses";
import Header from "../component/Header";
const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL

  // Find the product based on the ID
  const product = sunglassesArray.find(
    (sunglasses) => sunglasses.id === parseInt(id)
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <Header />
      <nav
        style={{
          "--bs-breadcrumb-divider":
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%228%22 height=%228%22%3E%3Cpath d=%22M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z%22 fill=%22%236c757d%22/%3E%3C/svg%3E')",
        }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" style={{ textDecoration: "none", color: "black", marginLeft: "10px", }}>
              Home
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a href="/Shop" style={{ textDecoration: "none", color: "black" ,fontWeight:"bold"}}>
              Shop
            </a>
          </li>
        </ol>
      </nav>
      <div className="product-detail">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} className="product-image" />
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <button>Add to Cart</button>
        <button>Add to Wishlist</button>
      </div>
    </>
  );
};

export default ProductDetail;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Special_Product.css";
import product1 from "../Images/product1.jpg";
import product2 from "../Images/product2.jpg";
import product3 from "../Images/product3.jpg";
import product4 from "../Images/product4.jpg";
import product21 from "../Images/product21.jpg";
import product22 from "../Images/product22.jpg";
import product23 from "../Images/product23.jpg";
import product24 from "../Images/product24.jpg";
import product31 from "../Images/product31.jpg";
import product32 from "../Images/product32.jpg";
import product33 from "../Images/product33.jpg";
import product34 from "../Images/product34.jpg";
import product43 from "../Images/product43.jpg";
import product44 from "../Images/product44.jpg";

function Special_Product() {
  const [selectedCategory, setSelectedCategory] = useState("LATEST PRODUCT");

  const productData = {
    "LATEST PRODUCT": [
      {
        image: product1,
        name: "Limited Edition Super Bowl LV Portal X",
        price: "$75.00-$76.00",
      },
      {
        image: product2,
        name: "Holbrook MotoGP",
        price: "$50.00",
        oldPrice: "$70.00",
      },
      {
        image: product3,
        name: "Sultro Lite Patrick Mahomes II Collections",
        price: "$70.00-$76.00",
      },
      {
        image: product4,
        name: "Oakley Frogskins 9013 Sunglasses",
        price: "$75.00-$76.00",
      },
    ],
    "TOP RATING": [
      {
        image: product21,
        name: "Apparition™ Marc Marquez Collection",
        price: "$50.00",
        oldPrice: "$70.00",
      },
      {
        image: product22,
        name: "Holbrook™ MotoGP™ Collection",
        price: "$75.00-$76.00",
      },
      {
        image: product23,
        name: "Oakley OO9384 HOLBROOK MIX...",
        price: "$75.00-$76.00",
      },
      {
        image: product24,
        name: "Frogskins™ Lite Origins",
        price: "$75.00-$76.00",
      },
    ],
    "BEST SELLING": [
      {
        image: product31,
        name: "Split Shot Prizm™ Snow Collection",
        price: "$70.00-$76.00",
      },
      {
        image: product32,
        name: "Limited Edition Super Bowl LV Portal X",
        price: "$75.00-$76.00",
      },
      {
        image: product33,
        name: "Turbine Prizm™ Snow Collection",
        price: "$50.00",
        oldPrice: "$70.00",
      },
      {
        image: product34,
        name: "Oakley OO9384 HOLBROOK MIX..",
        price: "$75.00-$76.00",
      },
    ],
    "FEATURE PRODUCT": [
      {
        image: product4,
        name: "Oakley Frogskins 9013 Sunglasses",
        price: "$75.00-$76.00",
      },
      {
        image: product2,
        name: "Holbrook MotoGP",
        price: "$50.00",
        oldPrice: "$70.00",
      },
      {
        image: product43,
        name: "Oakley Frogskins 35th Anniversary",
        price: "$75.00-$76.00",
      },
      {
        image: product44,
        name: "Holbrook™ Mix Team USA",
        price: "$75.00-$76.00",
      },
    ],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="Product">
        <h2>SPECIAL PRODUCTS</h2>
        <div className="product_list">
          <ul>
            {Object.keys(productData).map((category) => (
              <li
                key={category}
                className={`list ${
                  selectedCategory === category ? "active" : ""
                }`}
              >
                <button
                  onClick={() => handleCategoryChange(category)}
                  className="category-btn"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <NavLink to={"/product_View"} onClick={()=>addToView(productData)}>
        <div className="Item_list" >
          {productData[selectedCategory].map((product, index) => (
            <div className="col-12 col-md-3 products" key={index}>
              <img src={product.image} alt={product.name} />
              <h6>⭐⭐⭐⭐⭐</h6>
              <h6>{product.name}</h6>
              <h6>
                {product.price}
                {product.oldPrice && <span> {product.oldPrice}</span>}
              </h6>
            </div>
          ))}
        </div>
        </NavLink>
        
      </div>
    </>
  );
}

export default Special_Product;

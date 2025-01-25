import "./Deal.css";
import React, { useState } from "react";
import product1 from "../Images/product1.jpg";
import product2 from "../Images/product2.jpg";
import product3 from "../Images/product3.jpg";
import product21 from "../Images/product21.jpg";
import product22 from "../Images/product22.jpg";
import product23 from "../Images/product23.jpg";
function Deal() {
  const [selectedCategory] = useState("TOP TRENDING");
  const [selectedCategory1] = useState("TOP RATING");
  const [selectedCategory2] = useState("DEAL OF THE DAY");
  const productObject = {
    "TOP TRENDING": [
      {
        image: product1, // Example image path, replace with your actual image imports
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
     
    ],
    "DEAL OF THE DAY":[
      {
        image: product22,
        name: "Holbrook™ MotoGP™ Collection",
        price:"$75.00-$76.00",
      }
    ]
  };

  return (
    <>
      <div className="container1">
        <div className="column">
          <div className="heading">TOP TRENDING</div>
          {productObject[selectedCategory].map((product, index) => (
            <div className="row" key={index}>
              <div className="col-3 ">
                <img src={product.image} />
              </div>
              <div className="col-9 ">
                <br />
                <h6>{product.name}</h6>
                <h6>
                  {product.price}
                  {product.oldPrice && <span> {product.oldPrice}</span>}
                  <h6>⭐⭐⭐⭐⭐</h6>
                </h6>
              </div>
            </div>
          ))}
        </div>

        <div className="column deal_day">
          <div className="heading">DEAL OF THE DAY</div>
          {productObject[selectedCategory2].map((product, index) => (
            <div className="row1" key={index}>
              
                <img src={product.image} />
              
              
                <h6>{product.name}</h6>
                <h6>
                  {product.price}
                  {product.oldPrice && <span> {product.oldPrice}</span>}
                  <h6>⭐⭐⭐⭐⭐</h6>
                </h6>
              
            </div>
          ))}
        </div>

        <div className="column">
        <div className="heading">NEW COLLECTION</div>
          {productObject[selectedCategory1].map((product, index) => (
            <div className="row" key={index}>
              <div className="col-3 ">
                <img src={product.image} />
              </div>
              <div className="col-9 ">
                <br />
                <h6>{product.name}</h6>
                <h6>
                  {product.price}
                  {product.oldPrice && <span> {product.oldPrice}</span>}
                  <h6>⭐⭐⭐⭐⭐</h6>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Deal;

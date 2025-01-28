
import React, { useState ,useEffect} from "react";
import "./Category.css";
import { MensCategory } from "./Category/MensCategory";
import { WomensCategory } from "./Category/WomensCategory";
import { KidsCategory } from "./Category/KidsCategory";
import { UnisexCategory } from "./Category/UnisexCategory";

export const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategory, setShowCategory] = useState(true);
  const [products, setProducts] = useState([]);

 
// Fetch data from local storage
const adminValue = JSON.parse(localStorage.getItem("admin"));
  const admin_id = adminValue.adminId;
  const productsKey = `${admin_id}/products`;
useEffect(() => {
  const storedProducts = localStorage.getItem(productsKey);
  if (storedProducts) {
    setProducts(JSON.parse(storedProducts));
    
  }
}, []);

  const filteredProducts = products.filter(
    (product)=>product.category ===selectedCategory
  );
 
  return (
    <>
      {showCategory && (
        <>
          <div className="products_show mt-3 mx-4">
            <h4 className="text-center">CATEGORY</h4>
            <button
              className="d-flex ms-auto btn btn-danger"
              onClick={() => setShowCategory(false)}
            >
              X
            </button>

            <div className="mt-3 mb-3 ">
              <button
                className="category_button fs-4"
                onClick={() => setSelectedCategory("Mens")}
              >
                Mens
                
              </button>
              <button
                className="category_button fs-4"
                onClick={() => setSelectedCategory("Womens")}
              >
                Womens
              </button>
              <button
                className="category_button fs-4"
                onClick={() => setSelectedCategory("Kids")}
              >
                Kids
              </button>
              <button
                className="category_button fs-4"
                onClick={() => setSelectedCategory("Unisex")}
              >
                Unisex
              </button>
            </div>
          </div>

          {/* Conditionally render the selected category */}
          <div className="mt-4">
            {selectedCategory === "Mens" && (
              <MensCategory products={filteredProducts} />
            )}
            {selectedCategory === "Womens" && (
              <WomensCategory  products={filteredProducts}/>
            )}
            {selectedCategory === "Kids" && (
              <KidsCategory products={filteredProducts} />
            )}
            {selectedCategory === "Unisex" && (
              <UnisexCategory products={filteredProducts}/>
            )}
          </div>
        </>
      )}
    </>
  );
};


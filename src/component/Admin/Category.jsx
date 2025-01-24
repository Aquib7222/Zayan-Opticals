// import "./Category.css";
// import { MensCategory } from "./MensCategory";

// export const Category = () => {
//         const []
//   return (
//     <>
//       <div className="products_show mt-3 mx-4">
//         <h2>Category</h2>
//         <button
//           className="d-flex ms-auto"
//           onClick={() => setShowProducts(false)}
//         >
//           X
//         </button>
//       </div>

//       <div className="container d-flex mt-0">
//         {/* mens start  */}
//         <div className="row d-flex flex-wrap justify-content-center">
//           <div className="col-md-3 category_name "onClick={()=>toggleMens(setShowMens(true))}>
//             <h6>Mens</h6>
//             <img src="" alt="" />

//           </div>
//           <div className="col-md-3 category_name"onClick={()=>toggleWomens()}>
//             <h6>Womens</h6>
//              <img src="" alt="" />
//           </div>
//           <div className="col-md-3 category_name"onClick={()=>toggleKids()}>
//             <h6>Kids</h6>
//              <img src="" alt="" />
//           </div>
//           <div className="col-md-3 category_name"onClick={()=>toggleUnisex()}>
//             <h6>Unisex</h6>
//              <img src="" alt="" />
//           </div>
//         </div>
//         {/* mens end here */}

//       </div>

//       <MensCategory />
//     </>
//   );
// };
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

useEffect(() => {
  const storedProducts = localStorage.getItem("products");
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

            <div className="mt-3 mb-3">
              <button
                className="category_button"
                onClick={() => setSelectedCategory("Mens")}
              >
                Mens
               
              </button>
              <button
                className="category_button"
                onClick={() => setSelectedCategory("Womens")}
              >
                Womens
              </button>
              <button
                className="category_button"
                onClick={() => setSelectedCategory("Kids")}
              >
                Kids
              </button>
              <button
                className="category_button"
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


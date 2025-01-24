import { useState } from "react";

export const MensCategory = ({ products }) => {
  const [showMensProduct, setShowMensProduct] = useState(true);

  
  return (
    <>
      {showMensProduct && (
        <div className="bg-white mx-4 rounded-3 px-3 mb-3 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="text-center bg-white py-3">Mens Products</h4>
            <button className="" onClick={() => setShowMensProduct(false)}>
              X
            </button>
          </div>

          <div className="d-flex align-items-center">
            <h5 className="me-2">Mens Category :</h5>
            <select className="">
              <option value="default">Default</option>
              <option value="aviator">Aviator Sunglasses</option>
              <option value="wayfarer">Wayfarer Sunglasses</option>
              <option value="sports">Sports Sunglasses</option>
              <option value="polarized">Polarized Sunglasses</option>
              <option value="driving">Driving Sunglasses</option>
            </select>
          </div>
          <hr className="border-2" />

          {/* //showing products of mens */}
          <div className="product-list w-100 bg-primary ">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Category</th>
                 
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {product.image ? (
                          <img src={product.image} alt="Product" width="50" style={{height:"30px"}} />
                        ) : (
                          "No Image"
                        )}
                      </td>
                      <td>{product.productName}</td>
                      <td>Rs {product.price}</td>
                      <td>{product.description}</td>
                      <td>{product.category}</td>
                     
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No products available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

// import React, { useState, useEffect } from "react";
// import "./ProductCustomer.css";
// import { IoAddCircle } from "react-icons/io5";
// import { MdDeleteForever } from "react-icons/md";
// import { Category } from "./Category";

// const ProductCustomer = () => {
//   const [showProducts, setShowProducts] = useState(false);
//   const [showAddProduct, setShowAddProduct] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [showCategory,setShowCategory]= useState(false);

//   // State to manage form inputs
//   const [formData, setFormData] = useState({
//     productName: "",
//     price: "",
//     description: "",
//     image: null,
//   });

//   // Load products from localStorage when the component mounts
//   useEffect(() => {
//     const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
//     setProducts(savedProducts);
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, files,option } = e.target;

//     if (type === "file") {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: files[0], // Store the uploaded file object
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newProduct = {
//       productName: formData.productName,
//       price: formData.price,
//       description: formData.description,
//       image: formData.image ? URL.createObjectURL(formData.image) : "",
//     };

//     const updatedProducts = [...products, newProduct];
//     setProducts(updatedProducts);
//     localStorage.setItem("products", JSON.stringify(updatedProducts));

//     alert("Product added successfully!");

//     // Clear form fields
//     setFormData({
//       productName: "",
//       price: "",
//       description: "",
//       image: null,
//     });

//     setShowAddProduct(false);
//     setShowProducts(true);
//   };

//   // Function to handle showing the "Add Products" section
//   const addProducts = () => {
//     setShowProducts(false);
//     setShowAddProduct(true);
//   };

//   // Function to go back to product list
//   const goBack = () => {
//     setShowAddProduct(false);
//     setShowProducts(true);
//   };

//   // Function to toggle between showing products and categories
//   const toggleCategory = () => {
//     setShowCategory(true);
//     setShowProducts(false);
//   };

//   const toggleProducts = () => {
//     setShowProducts(true);
//     setShowCategory(false);
//   };
//   return (
//     <>
//       {/* Cards for details */}
//       <div className="m-3">
//         <div className="row">
//           <div className="col-sm-3 mb-sm-0">
//             <div className="card" onClick={() =>toggleProducts() }>
//               <div className="card-body">
//                 <h5 className="card-title">PRODUCTS</h5>
//                 <p className="card-text">Total Products: {products.length}</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-3">
//             <div className="card" onClick={()=> toggleCategory()}>
//               <div className="card-body">
//                 <h5 className="card-title" >CATEGORY</h5>
//                 <p className="card-text">Total Category: 4</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-3">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">CUSTOMERS</h5>
//                 <p className="card-text">Total Customers: 10</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-3">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">ORDERS</h5>
//                 <p className="card-text">Total Orders: 20</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Show Product List Section */}
//       {showProducts && !showAddProduct && (
//         <div className="products_show mt-3 mx-4">
//           <h2>Product List</h2>
//           <button className="d-flex ms-auto" onClick={() => setShowProducts(false)}>
//             X
//           </button>
//           <table className="table table-striped">
//             <thead>
//               <tr>
//                 <th scope="col">S.No</th>
//                 <th scope="col">Image</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Description</th>
//                 <th scope="col">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.length > 0 ? (
//                 products.map((product, index) => (
//                   <tr key={index}>
//                     <th scope="row">{index + 1}</th>
//                     <td>
//                       {product.image ? (
//                         <img src={product.image} alt="Product" width="50" />
//                       ) : (
//                         "No Image"
//                       )}
//                     </td>
//                     <td>{product.productName}</td>
//                     <td>Rs {product.price}</td>
//                     <td>{product.description}</td>
//                     <td className="d-flex">
//                       <IoAddCircle className="icon-curson me-3" />
//                       <MdDeleteForever className="icon-curson" />
//                       <button className="d-flex ms-auto bg-primary text-white rounded-2">Edit</button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6">No products available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//           <button
//             className="d-flex ms-auto bg-danger text-white p-2 rounded-2"
//             onClick={addProducts}
//           >
//             Add Products
//           </button>
//         </div>
//       )}

//       {/* Show Add New Product Section */}
//       {showAddProduct && (
//         <div className="products_show mx-4">
//           <h2>Add New Product</h2>
//           <button className="d-flex ms-auto bg-secondary text-white p-2 rounded-2" onClick={goBack}>
//             Back
//           </button>
//           <div className="mt-3">
//             <form className="row" onSubmit={handleSubmit}>
//               <div className="col-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="productName"
//                   placeholder="Product Name"
//                   value={formData.productName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="col-2">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="price"
//                   placeholder="Price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="col-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="description"
//                   placeholder="Description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="col-2">
//                 <input
//                   type="file"
//                   className="form-control"
//                   name="image"
//                   onChange={handleChange}
//                   accept="image/*"
//                 />
//               </div>
//               <div className="col-2">
//                 <select name="" id="" onChange={handleChange} required value={formData.option}>
//                   <option value="">Category</option>
//                   <option value="">Mens</option>
//                   <option value="">Womens</option>
//                   <option value="">Kids</option>
//                   <option value="">Unisex</option>
//                 </select>
//               </div>
//               <div className="mt-4 d-flex">
//                 <button type="submit" className="btn btn-danger ms-auto">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {showCategory &&  (
//           <Category />
//       )}

//     </>
//   );
// };

// export default ProductCustomer;

import React, { useState, useEffect } from "react";
import "./ProductCustomer.css";
import { IoAddCircle } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { Category } from "./Category";

const ProductCustomer = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [showCategory, setShowCategory] = useState(false);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    description: "",
    category: "",
    Productcategory:"",
    image: null,
  });

  // Load products from localStorage when the component mounts
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Convert image file to base64
  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageBase64 = "";

    if (formData.image) {
      imageBase64 = await convertImageToBase64(formData.image);
    }

    const newProduct = {
      productName: formData.productName,
      price: formData.price,
      description: formData.description,
      category: formData.category,
      Productcategory: formData.Productcategory,
      image: imageBase64,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    alert("Product added successfully!");

    setFormData({
      productName: "",
      price: "",
      description: "",
      category: "",
      Productcategory:"",
      image: null,
    });
    setShowAddProduct(false);
    setShowProducts(true);
  };

  // Handle product deletion
  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  // Function to toggle between showing products and categories
  const toggleCategory = () => {
    setShowCategory(true);
    setShowProducts(false);
  };

  const toggleProducts = () => {
    setShowProducts(true);
    setShowCategory(false);
  };

  return (
    <>
      {/* Dashboard Cards */}
      <div className="m-3">
        <div className="row">
          <div className="col-sm-3 mb-sm-0">
            <div className="card" onClick={toggleProducts}>
              <div className="card-body">
                <h5 className="card-title">PRODUCTS</h5>
                <p className="card-text">Total Products: {products.length}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" onClick={toggleCategory}>
              <div className="card-body">
                <h5 className="card-title">CATEGORY</h5>
                <p className="card-text">Total Categories: 4</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">CUSTOMERS</h5>
                <p className="card-text">Total Customers: 10</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">ORDERS</h5>
                <p className="card-text">Total Orders: 20</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show Product List Section */}
      {showProducts && !showAddProduct && (
        <div className="products_show mt-3 mx-4">
          <h2>Product List</h2>
          <button
            className="d-flex ms-auto btn btn-danger"
            onClick={() => setShowProducts(false)}
          >
            X
          </button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      {product.image ? (
                        <img src={product.image} alt="Product" width="50" style={{height:"30px"}}/>
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>{product.productName}</td>
                    <td>Rs {product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td className="d-flex">
                      <IoAddCircle className="icon-curson me-3 " style={{color:"blue"}}/>
                      <MdDeleteForever
                        className="icon-curson"
                        onClick={() => handleDelete(index)}
                        style={{color:"red"}}
                      />
                      <button className="ms-auto btn btn-primary rounded-2">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No products available</td>
                </tr>
              )}
            </tbody>
          </table>
          <button
            className="btn btn-danger"
            onClick={() => setShowAddProduct(true)}
          >
            Add Products
          </button>
        </div>
      )}

      {/* Add New Product Section */}
      {showAddProduct && (
        <div className="products_show mx-4">
          <h2>Add New Product</h2>
          <button
            className="btn btn-secondary"
            onClick={() => setShowAddProduct(false)}
          >
            Back
          </button>
          <form className="row mt-3" onSubmit={handleSubmit}>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                name="productName"
                placeholder="Product Name"
                value={formData.productName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-2">
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-2">
              <input
                type="file"
                className="form-control"
                name="image"
                onChange={handleChange}
                accept="image/*"
              />
            </div>
            <div className="col-2">
              <select
                className="form-control"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Category</option>
                <option value="Mens">Mens</option>
                <option value="Womens">Womens</option>
                <option value="Kids">Kids</option>
                <option value="Unisex">Unisex</option>
              </select>
            </div>
            <div className="col-2 mt-2">
              <select
                className="form-control"
                name="Productcategory"
                value={formData.Productcategory}
                onChange={handleChange}
                required
              >
                <option value="">Product Category</option>
                <option value="Wayfarer Sunglasses">Wayfarer Sunglasses</option>
                <option value="Aviator sunglasses">Aviator sunglasses</option>
                <option value="Sports Sunglasses">Sports Sunglasses</option>
                <option value="Round Sunglasses">Round Sunglasses</option>
                <option value="Rectangle Sunglasses">Rectangle Sunglasses</option>

              </select>
            </div>
            <button type="submit" className="btn btn-danger mt-5 ms-auto w-25">
              Submit
            </button>
          </form>
        </div>
      )}

      {showCategory && <Category products={products} />}
    </>
  );
};

export default ProductCustomer;

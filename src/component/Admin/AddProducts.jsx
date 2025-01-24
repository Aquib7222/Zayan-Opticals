import { useState,useEffect } from "react";
export const AddProducts= () =>{
    const [products, setProducts] = useState([]);
    const [showAddProduct, setShowAddProduct] = useState(false);
     // State to manage form inputs
      const [formData, setFormData] = useState({
        productName: "",
        price: "",
        description: "",
        category: "",
        subCategory:"",
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
          subCategory: formData.subCategory,
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
          subCategory:"",
          image: null,
        });
        setShowAddProduct(false);
        // setShowProducts(true);
      };
    

    return <>
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
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                required
              >
                <option value="">subCategory</option>
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
        </>
}
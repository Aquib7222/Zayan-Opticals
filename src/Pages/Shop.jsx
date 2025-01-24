import Footer from "../component/footer";
import Header from "../component/Header";
import Products from "../component/Products";
import Slider from "../component/Slider";
import sunglassesArray from "../component/Sunglasses";
import "./Shop.css";
import { useState, useEffect } from "react";
import { FaCartPlus, FaHeart, FaEye, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../component/Context/CartContext";
import { IoGridSharp } from "react-icons/io5";
import CartAmountToggle from "../component/CartAmountToggle";
import { TiTick } from "react-icons/ti";
function Shop() {
  const [selectedOption, setSelectedOption] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // State for grid/list view
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const productsPerPage = 5; // Number of products per page
  const { addToCart } = useCartContext();
  // const [selectedCategory,setSelectedCategory]= useState("");


  // drop down selection 
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // drop down selection end here


  // const handleCategory = (event) =>{
  //   setSelectedCategory(event.target.value);

  // }
  const [selectedColor, setSelectedColor] = useState("red"); // Default selected color
  const colors = ["red", "blue", "green", "yellow", "purple"]; // Available colors


  //for quantity increment decrement
  const [amount, setAmount] = useState({});
  const setDecrease = (id) => {
    setAmount((amount) => ({
      ...amount,
      [id]: Math.max(1, (amount[id] || 1) - 1),
    }));
  };
  const setIncrease = (id) => {
    setAmount((amount) => ({
      ...amount,
      [id]: (amount[id] || 1) + 1,
    }));
  };

  //quantity increment decrement ends here


  //toggle mode
  const toggleView = (mode) => {
    setViewMode(mode); // Toggle between grid and list views
  };

  //sort product according to their prices
  const sortOptions = {
    option1: (a, b) => a.name.localeCompare(b.name),
    option2: (a, b) => b.id - a.id,
    option3: (a, b) =>
      parseFloat(a.price.replace("$", "")) -
      parseFloat(b.price.replace("$", "")),
    option4: (a, b) =>
      parseFloat(b.price.replace("$", "")) -
      parseFloat(a.price.replace("$", "")),
  };

  //ends sorting here


  //range selected
  const [rangeSelected, setrangeSelected] = useState("");

  const handleRange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    setrangeSelected(selectedValue);
  };

  //retrieve products from localstorage
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);


  
  const sortSunglasses = (products, option) =>
    products.sort(sortOptions[option] || (() => 0));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const renderSunglasses = () => {
    const sortedSunglasses = sortSunglasses([...products], selectedOption);

    const displayedSunglasses =
      viewMode === "list"
        ? sortedSunglasses.slice(indexOfFirstProduct, indexOfLastProduct)
        : sortedSunglasses; // Show all for grid view

    return displayedSunglasses.map((sunglasses) => (
      <div
        key={sunglasses.id}
        className={`sunglasses-item ${viewMode === "list" ? "list-view" : ""}`}
      >
        <div className="product-container">
          <img
            src={sunglasses.image}
            alt={sunglasses.productName}
            className="sunglasses-image"
          />
          {viewMode !== "list" && (
            <>
              <h5 className="text-uppercase">{sunglasses.productName}</h5>
              <p className="ms-2">Price: {sunglasses.price}</p>
            </>
          )}
        </div>

        <div className="quantity-buttons">
          {viewMode === "list" && (
            <>
              <h5 className="text-uppercase">{sunglasses.name}</h5>
              <p className="">Price: {sunglasses.price}</p>
              <p>{sunglasses.details}</p>
            </>
          )}

          <div className="d-flex" style={{ width: "100%" }}>
            <CartAmountToggle
              amount={amount[sunglasses.id] || 1} // Pass the correct quantity from the state
              setDecrease={() => setDecrease(sunglasses.id)} // Pass function to decrease
              setIncrease={() => setIncrease(sunglasses.id)} // Pass function to increase
            />
          </div>

          {/* Always show Add to Cart and View buttons for both grid and list views */}
          <div
            className="d-flex justify-content-start"
            style={{ width: "100%" }}
          >
            <NavLink
              to={"/Product_view"}
              state={{ sunglasses, quantity: amount[sunglasses.id] }}
            >
              <button className=" bg-warning pb-2" style={{ width: "100px" }}>
                <FaEye />
              </button>
            </NavLink>
            <button
              className="ms-3 bg-danger pb-2  "
              style={{ width: "100px" }}
              onClick={() => {
                addToCart(sunglasses.id, sunglasses);
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <FaCartPlus style={{ color: "white" }} />
            </button>
          </div>
        </div>
      </div>
    ));
  };

  // Pagination Logic
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(sunglassesArray.length / productsPerPage);

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`pagination-btn ${i === currentPage ? "active" : ""}`}
          onClick={() => paginate(i)}
        >
          {i}
        </button>
      );
    }
    return <div className="pagination">{pageNumbers}</div>;
  };

  return (
    <>
      <Header />
      <Slider />
      <Products />

      {/* filtering here  */}


      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="Bar_and_Dropdown">
              <div className="m-4">
                <h4>FILTER</h4>
              </div>
            </div>
            <div
              className="card d-flex flex-column align-items-start"
              style={{ width: "auto", height: "40rem" }}
            >
              <div className="p-3">
                <input
                  type="text"
                  placeholder="Search item"
                  className="w-100 border-0 py-1 ps-3 mt-3"
                />

                <h6 className="mt-4 text-start">Category</h6>
                <select className="form-select w-100">
                  <option value="all">All</option>
                  <option value="Mens">
                    Mens
                  </option>
                  <option value="Womens">
                    Womens
                  </option>
                  <option value="Unisex">Unisex</option>
                </select>

                <h6 className="mt-4 text-start">Price Range</h6>

                <div className="d-flex justify-content-between w-100">
                  <select
                    name=""
                    id="range-dropdown"
                    value={rangeSelected}
                    onChange={handleRange}
                    style={{ width: "200px" }}
                  >
                    <option value="" selected>
                      Default Range
                    </option>
                    <option value="option1">0 to 100</option>
                    <option value="option2">100 to 200</option>
                    <option value="option3">200 to 300</option>
                    <option value="option4">300 t0 400</option>
                    <option value="option5">400 t0 500</option>
                  </select>
                </div>

                <h6 className="mt-4 text-start">Brand</h6>

                <div className="">
                  <input type="checkbox" id="rayban" />
                  <label htmlFor="rayban" className="ms-2">
                    Ray-Ban
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="oakley" />
                  <label htmlFor="oakley" className="ms-2">
                    Oakley
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="gucci" />
                  <label htmlFor="gucci" className="ms-2">
                    Gucci
                  </label>
                </div>

                {/* //for color */}
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
              </div>
            </div>
          </div>
{/* //end fitering here */}


          <div className="col-md-9">
            <div className="Bar_and_Dropdown">
              <div className="Filter_Bar">
                <IoGridSharp onClick={() => toggleView("grid")} />
                <FaBars className="ms-2" onClick={() => toggleView("list")} />
              </div>
              <div className="dropdown-container">
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <option value="">Default sorting</option>
                  <option value="option1">Sort by popularity</option>
                  <option value="option2">Sort by latest</option>
                  <option value="option3">Sort by price: low to high</option>
                  <option value="option4">Sort by price: high to low</option>
                </select>
              </div>
            </div>
            <div className={`sunglasses-container ${viewMode}`}>
              {renderSunglasses()}
              {viewMode === "list" && renderPagination()}{" "}
              {/* Show pagination only in list view */}
            </div>
          </div>
        </div>
      </div>

      {/* modal open */}
      <div
        class="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          style={{
            width: "350px",
            height: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div class="modal-content d-flex justify-content-center">
            <button
              style={{
                borderRadius: "100%",
                width: "70px",
                height: "70px",
                backgroundColor: "red",
                padding: "10px",
                margin: "10px",
              }}
            >
              <TiTick style={{ height: "100%", width: "100%" }} />
            </button>
            <div class="modal-header ">
              <h6 class="modal-title ms-4" id="exampleModalLabel">
                ITEM ADDED TO YOUR CART
              </h6>
            </div>
            <div class="modal-body text-center">2 ITEMS IN THE CART</div>
            <div class="modal-footer d-flex justify-content-center">
              <button
                type="button"
                class="btn "
                data-bs-dismiss="modal"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "0px",
                  padding: "10px",
                  fontWeight: "600",
                }}
              >
                Continue Shopping
              </button>

              <a href={"/cart"}>
                {" "}
                <button
                  type="button"
                  class="btn"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "0px",
                    padding: "10px",
                    fontWeight: "600",
                  }}
                >
                  Go To Cart
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;

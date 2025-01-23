import "./ProductCustomer.css";

const ProductCustomer = () => {
  return (
    <>
    {/* cards for details */}
      <div classNameName="m-2 ">
        <div className="row ">
          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card bg-danger">
              <div className="card-body">
                <h5 className="card-title">PRODUCTS</h5>
                <p className="card-text">
                    Total Products : 20
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card bg-warning ">
              <div className="card-body h-3">
                <h5 className="card-title">CATEGORY</h5>
                <p className="card-text">
                  Total Category : 4
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="card bg-primary">
              <div className="card-body">
                <h5 className="card-title">CUSTOMERS</h5>
                    <p className="card-text">Total Customers : 10</p>
                
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card bg-success">
              <div className="card-body ">
                <h5 className="card-title">ORDERS</h5>
                <p className="card-text">
                  Total Order : 20
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* cards details end here */}

      {/* product show here */}

        <div className="container">

            <h2>Product</h2>
        </div>

      {/* product show end here */}
    </>
  );
};

export default ProductCustomer;

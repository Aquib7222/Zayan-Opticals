const UserOrder = () => {
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
            <h3 style={{textAlign:"left",fontWeight:"700"}}>Your Orders</h3>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Product</th>
                <th scope="col">Order Num</th>
                <th scope="col">Date</th>
                <th scope="col">Delivery</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Harl Brook</td>
                <td>GNH134</td>
                <td>28-01-2025</td>
                <td>30-01-2025</td>
                <td>Rs 2500</td>
                <td>Pending</td>
               
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default UserOrder;

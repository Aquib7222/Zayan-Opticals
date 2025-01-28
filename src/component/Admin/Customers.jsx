const Customers = () => {
  return (
    <>
      <div className="w-100 ms-4">
        <h4 className="text-center ">Users Details</h4>
        <div className="row w-75">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>mark@gmail.com</td>
                <td>7894561230</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Customers;

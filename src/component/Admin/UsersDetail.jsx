const UsersDetail = ({ user, onClose }) => {
  const users = JSON.parse(localStorage.getItem("users"));

  // Check if users exist in localStorage
  if (users && Array.isArray(users)) {
    // Find the user with a matching number
    const userDetail = users.find((userItem) => userItem.email === user.email);

    if (userDetail) {
      // User found, render user details
      return (
        <>
          <div className="users_details d-flex">
            <div className="user_profile w-50 me-2 rounded-2" >
            <h5>Users Profile</h5>
              <table className="table " >
                <thead>
                  <tr style={{ borderRadius: "20px" }}>
                    <th scope="col">User ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{userDetail.userId}</td>
                    <td>{userDetail.email}</td>
                    <td>{userDetail.phone}</td>
                    <td>{userDetail.firstName + " " + userDetail.lastName}</td>
                    <td>
                      <button
                        className="bg-danger text-white rounded-2 "
                        onClick={() => handleUserData(userDetail)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </div>

            {/* users order  */}

            <div className="user_orders  w-50 me-5 rounded-2">
              <div className="container ">
                <h5>Orders</h5>
              <table className="table " >
                <thead>
                  <tr style={{ borderRadius: "20px" }}>
                    <th scope="col">Product Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Details</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Order Id</th>
                    <th scope="col">Amount</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{userDetail.userId}</td>
                    <td>Hark Brook</td>
                    <td>Excellent</td>
                    <td>1</td>
                    <td>abc123#</td>
                    <td>Rs 120</td>
                   
                  </tr>
                </tbody>
              </table>
              
              </div>
            </div>
            
          </div>
          <button
                onClick={onClose}
                className="bg-primary text-white px-2 py-1 rounded-1 mb-3 "
              >
                Close
              </button>
          {/* <!-- Modal for edit user  --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Edit User Details
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form action="">
                    <input type="text" value={userDetail.firstName} />
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      // User not found, display a message
      return <h3>User not found in database</h3>;
    }
  } else {
    // If no users are found in localStorage or the data is not an array
    console.log("No users found in localStorage or data is not an array");
    return <h3>No users found in the database</h3>;
  }
};

export default UsersDetail;

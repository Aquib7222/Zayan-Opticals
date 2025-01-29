import { useState } from "react";
import { FaEye } from "react-icons/fa";
import UsersDetail from "./UsersDetail";

const Customers = () => {
  const Users = JSON.parse(localStorage.getItem("users"));
  console.log("Users: ", Users);

  const [selectedUser, setSelectedUser] = useState(null);
  const [closeButton,setCloseButton]=useState(true);
  const handleViewClick = (User) => {
    setSelectedUser(User);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };
  const handleCloseCustomers =()=>{
    setCloseButton(false);
  }
  return (
    <>
    {closeButton && 
      <div className="ms-4">
        <div className="d-flex bg-white p-2 me-5 rounded-2 mb-3">
        <h4 className="  fw-bold">Users  </h4>
        <button className="ms-auto px-3 bg-danger rounded-2 text-white" onClick={()=>handleCloseCustomers()}>Close</button>
        </div>
        
       
        {/* Only show the table if no user is selected */}
        {!selectedUser ? (
          <div className="row ">
            <table className="table table-bordered rounded-3 shadow-sm me-4" style={{width:"97%"}}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Number</th>
                  <th scope="col">UserId</th>
                  <th scope="col">Password</th>
                  <th scope="col">View</th>
                </tr>
              </thead>
              <tbody>
                {Users.map((User, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{User.firstName + " " + User.lastName}</td>
                    <td>{User.email}</td>
                    <td>{User.phone}</td>
                    <td>{User.userId}</td>
                    <td>{User.password}</td>
                    <td>
                      <FaEye
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => handleViewClick(User)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          // Show the selected user's details when a user is clicked
          <UsersDetail user={selectedUser} onClose={handleCloseDetails} />
        )}
      </div>
      }
    </>
  );
};

export default Customers;

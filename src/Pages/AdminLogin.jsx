// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // for navigation after login

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // For displaying error message
//   const navigate = useNavigate();

//   const adminData = {
//     email: "admin@example.com",
//     password: "admin@123",
//     name: "Aquib Shahzada",
//     adminId: "admin123"
//   };

//   useEffect(() => {
//     // Check if the token exists in localStorage to redirect to the Admin page
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       navigate("/admin", { replace: true });
//     }
//   }, [navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simulate the login check (In real applications, this should be an API call)
//     if (email === adminData.email && password === adminData.password) {
//       // Generate a token (for simplicity, we use a random string here)
//       const token = "randomAuthToken123"; // In production, use JWT or other methods
//       localStorage.setItem("authToken", token); // Store the token in localStorage

//       // Navigate to the admin page with user details
//       navigate("/admin", {
//         state: {
//           username: adminData.name,
//           email: adminData.email,
//           adminId: adminData.adminId
//         }
//       });
//     } else {
//       setError("Invalid credentials! Please try again.");
//     }
//   };
//   return (
//     <>
//       <div className="container d-flex justify-content-center align-items-center mt-4 w-50">
//         <div className="row w-100">
//           <div className="col-12 bg-secondary p-3">
           
             
//               <form onSubmit={handleSubmit}>
//                 <div className="row">
//                   <h2
//                     style={{
//                       fontWeight: "1000",
//                       fontFamily: "serif",
//                       fontSize: "bold",
//                       textAlign: "center",
//                       color: "white",
//                     }}
//                   >
//                     Admin Login
//                   </h2>
//                   <div className="col-md-12 mb-3 ms-2">
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Enter Your Email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       style={{ padding: "15px", backgroundColor: "#eefeff" }}
//                     />
//                   </div>
//                   <div className="col-md-12 ms-2">
//                     <input
//                       type="password"
//                       className="form-control"
//                       placeholder="Enter Password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       style={{ padding: "15px", backgroundColor: "#eefeff" }}
//                     />
//                   </div>

//                   {error && (
//                     <div className="text-center text-danger mt-2">
//                       <p>{error}</p>
//                     </div>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn btn-danger me-auto py-3 px-3 ms-3 mt-2 text-bold mb-3"
//                   style={{
//                     left: "0",
//                     display: "block",
//                     width: "50%",
//                     fontWeight: "600",
//                   }}
//                 >
//                   Login
//                 </button>
//               </form>
            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminLogin;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // for navigation after login

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For displaying error message
  const navigate = useNavigate();

  const adminData = {
    email: "admin@example.com",
    password: "admin@123",
    name: "Aquib Shahzada",
    adminId: "admin123"
  };

  useEffect(() => {
    // Check if the token exists in localStorage to redirect to the Admin page
    const token = localStorage.getItem("authToken");
    console.log("Checking token in localStorage: ", token);
    if (token) {
      navigate("/admin", { replace: true });
    } else {
      console.log("No token found. Proceeding with login.");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Debugging - check email and password values before submitting
    console.log("Form submitted with email: ", email, " and password: ", password);

    if (email === adminData.email && password === adminData.password) {
      // Generate a token (for simplicity, we use a random string here)
      const token = "randomAuthToken123"; // In production, use JWT or other methods
      localStorage.setItem("authToken", token); // Store the token in localStorage
      // console.log("Token stored in localStorage: ", token); // Debugging token storage

      // // After storing token, check localStorage again
      // console.log("Checking token in localStorage after login: ", localStorage.getItem("authToken"));

      // Navigate to the admin page with user details
      navigate("/admin", {
        state: {
          username: adminData.name,
          email: adminData.email,
          adminId: adminData.adminId
        }
      });
    } else {
      setError("Invalid credentials! Please try again.");
    }
  };

  const handleInputChange = (e) => {
    // Reset error message when the user starts typing
    if (error) {
      setError("");
    }
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center mt-4 w-50">
        <div className="row w-100">
          <div className="col-12 bg-secondary p-3">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <h2
                  style={{
                    fontWeight: "1000",
                    fontFamily: "serif",
                    fontSize: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Admin Login
                </h2>
                <div className="col-md-12 mb-3 ms-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    style={{ padding: "15px", backgroundColor: "#eefeff" }}
                     autoComplete="email"
                  />
                </div>
                <div className="col-md-12 ms-2">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    name="password"
                    onChange={handleInputChange}
                    style={{ padding: "15px", backgroundColor: "#eefeff" }}
                     autoComplete="current-password"
                  />
                </div>

                {error && (
                  <div className="text-center text-danger mt-2">
                    <p>{error}</p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-danger me-auto py-3 px-3 ms-3 mt-2 text-bold mb-3"
                style={{
                  left: "0",
                  display: "block",
                  width: "50%",
                  fontWeight: "600",
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;

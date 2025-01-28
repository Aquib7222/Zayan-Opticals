import React, { useState ,useEffect} from "react";
import Footer from "../component/footer";
import Header from "../component/Header";
import MainHeader from "../component/MainHeader";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Signup = () => {
  // Define state variables to capture form data
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName,setUserName]=useState("");
  const generateRandomId = () => {
    return "user_" + Math.random().toString(36).substr(2, 9);
  };
  // Handle form submission
  useEffect(() => {
    if (firstName && lastName) {
      setUserName(firstName + " " + lastName); // Concatenate first and last name
    }
  }, [firstName, lastName]);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password and confirm password
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Retrieve the existing users from localStorage (or initialize an empty array)
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      alert("Account already created with this email!");
      return; // Prevent form submission if the email is already taken
    }

     // Generate a random userId
     const newUserId = generateRandomId();

    // Create a new user object
    const newUser = {
      userId: newUserId,
      firstName,
      lastName,
      email,
      phone,
      password,
      userName,
    };

    // Add the new user to the users array
    users.push(newUser);

    // Store the updated users array back into localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Reset form fields
    setUserId("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    SetUserName("")

    // Optionally, you can display a success message
    alert("Registration successful!");
  };

  return (
    <>
      <MainHeader />
      <Header />

      {/* Breadcrumb */}
      <nav
        style={{
          "--bs-breadcrumb-divider":
            "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'8\\' height=\\'8\\'%3E%3Cpath d=\\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\\' fill=\\'%236c757d\\'/%3E%3C/svg%3E')",
        }}
        aria-label="breadcrumb"
      >
        {/* Breadcrumb content */}
        <ol className="breadcrumb mt-3">
          <li className="breadcrumb-item ms-5">
            <a href="#" className="text-decoration-none">
              <IoHomeOutline className="top-1" /> Home
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Signup
          </li>
        </ol>
      </nav>
      <hr />
      <div>
        <div className="row">
          <div className="col-4">
            <img src="" alt="" />
          </div>

          <div className="col-8">
            <h1
              style={{
                fontWeight: "1000",
                fontFamily: "serif",
                fontSize: "bold",
                textAlign: "left",
              }}
            >
              Create An Account
            </h1>
            <p style={{ textAlign: "left" }}>
              Already have an account ?{" "}
              <NavLink to={"/Login"} style={{ textDecoration: "none" }}>
                Login Here
              </NavLink>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    style={{ padding: "15px", backgroundColor: "#eefeff" }}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    style={{ padding: "15px", backgroundColor: "#eefeff" }}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row" style={{ left: "0" }}>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    style={{ padding: "15px", backgroundColor: "#eefeff" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Number"
                    style={{ padding: "15px", backgroundColor: "#eefeff" }}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Your Password"
                    style={{ padding: "15px", backgroundColor: "#eefeff" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    style={{ padding: "15px", backgroundColor: "#eefeff" }}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-danger me-auto py-3 px-3 ms-2 mt-2 "
                style={{
                  left: "0",
                  display: "block",
                  width: "20%",
                }}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;

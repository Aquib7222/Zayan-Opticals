import "./UserAccount.css";
const UserAccount = ({userName,email}) => {
    return (
      <>
        <div className="container-fluid mt-3">
          <h3 className="text-start" style={{ fontWeight: "700" }}>
            Account Details
          </h3>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label
                htmlFor="formGroupExampleInput"
                className="form-label text-start"
                style={{ opacity: "0.5", display: "block", marginBottom: "5px" }}
              >
                Name<strong className="asterisk">*</strong>
              </label>
              <input
                type="text"
                className="form-control py-3 input-with-opacity"
                placeholder="Your Name"
                aria-label="Username"
                id="formGroupExampleInput"
                aria-describedby="basic-addon1"
                value={userName}
                required // Added required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label
                htmlFor="formGroupExampleInput"
                className="form-label text-start"
                style={{ opacity: "0.5", display: "block", marginBottom: "5px" }}
              >
                Number <strong className="asterisk">*</strong>
              </label>
              <input
                type="text"
                className="form-control py-3 input-with-opacity"
                placeholder="Number"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required // Added required
              />
            </div>
            <div className="col-md-12 mb-3">
              <label
                htmlFor="formGroupExampleInput"
                className="form-label text-start"
                style={{ opacity: "0.5", display: "block", marginBottom: "5px" }}
              >
                Enter Your Email<strong className="asterisk">*</strong>
              </label>
              <input
                type="email"
                className="form-control py-3 input-with-opacity"
                placeholder="Enter your email"
                aria-label="Username"
                value={email}
                aria-describedby="basic-addon1"
                required // Added required
              />
            </div>
            <div className="col-md-12 mb-3">
              <label
                htmlFor="formGroupExampleInput"
                className="form-label text-start"
                style={{ opacity: "0.5", display: "block", marginBottom: "5px" }}
              >
                Current Password<strong className="asterisk">*</strong>
              </label>
              <input
                type="password" // Changed to password type for better security
                className="form-control py-3 "
                
                aria-describedby="basic-addon1"
                required // Added required
              />
            </div>
            <div className="col-md-12 mb-3">
              <label
                htmlFor="formGroupExampleInput"
                className="form-label text-start"
                style={{ opacity: "0.5", display: "block", marginBottom: "5px" }}
              >
                New Password<strong className="asterisk">*</strong>
              </label>
              <input
                type="password" // Changed to password type for better security
                className="form-control py-3 "
               
                aria-label="Username"
                aria-describedby="basic-addon1"
                required // Added required
              />
            </div>
            <div className="col-md-12 mb-3">
              <label
                htmlFor="formGroupExampleInput"
                className="form-label text-start"
                style={{ opacity: "0.5", display: "block", marginBottom: "5px" }}
              >
                Confirm Password<strong className="asterisk">*</strong>
              </label>
              <input
                type="password" // Changed to password type for better security
                className="form-control py-3 "
               
                aria-label="Username"
                aria-describedby="basic-addon1"
                required // Added required
              />
            </div>
            <button
              style={{
                width: "25%",
                marginLeft: "10px",
                padding: "15px 0px",
                backgroundColor: "brown",
                color: "white",
                borderRadius: "10px",
              }}
              type="submit" // Ensure the form is submitted
            >
              Save Changes
            </button>
          </div>
        </div>
      </>
    );
  };
  export default UserAccount;
  
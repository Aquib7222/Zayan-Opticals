import Footer from "../component/footer";
import Header from "../component/Header";
import MainHeader from "../component/MainHeader";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Signup=()=>{
    return<>
    <MainHeader/>
    <Header/>
    
          {/* //breadcrumb */}
    
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
              <li class="breadcrumb-item active" aria-current="page">
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
                    textAlign:"left"
                  }}
                >
                  Create An Account
                </h1>
                <p style={{textAlign:"left"}}>
                  Already have an account ?{" "}
                  <NavLink to={"/Login"} style={{ textDecoration: "none" }}>
                    Login Here
                  </NavLink>
                </p>
                <form>
                  <div className="row">
                    <div className="col-md-6"> <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="First Name"
                      style={{padding:"15px",backgroundColor:"#eefeff"}}
    
                    /></div>
                    <div className="col-md-6"> <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Last Name"
                      style={{padding:"15px",backgroundColor:"#eefeff"}}
    
                    /></div>
                  </div>
                  <div className="row" style={{left:"0"}}>
                    <div className="col-md-6"> <input
                      type="email"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter Your Email"
                      style={{padding:"15px",backgroundColor:"#eefeff"}}
    
                    /></div>
                    <div className="col-md-6"> <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter Your Number"
                      style={{padding:"15px",backgroundColor:"#eefeff"}}
    
                    /></div>
                  </div>
                
                  <div className="row">
                    <div className="col-md-6"> <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter Your Password"
                      style={{padding:"15px",backgroundColor:"#eefeff"}}
    
                    /></div>
                    <div className="col-md-6"> <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Confirm Password"
                      style={{padding:"15px",backgroundColor:"#eefeff"}}
    
                    /></div>
                  </div>
                  
                  <button type="submit" class="btn btn-danger me-auto py-3 px-3 ms-2 mt-2 " style={{left:"0", display: "block",  
                      width: "20%" }}>
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
      <Footer/>
    </>
    
    };
export default Signup;
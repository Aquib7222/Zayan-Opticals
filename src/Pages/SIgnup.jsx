import Footer from "../component/footer";
import Header from "../component/Header";
const Signup=()=>{
    return<>
    
    <Header/>
    <div className="login_form d-flex justify-content-center">
      <form className="align-items-center w-25 border border-2 p-4 shadow ms-3 mt-5">
        <h3 className="text-center">SIGNUP</h3>
        <div className="mb-3 ">
          
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="emailHelp"
            placeholder="Name"
          />
        </div>

        <div className="mb-3 ">
          
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="email@gmail.com"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 ">
         
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="emailHelp"
            placeholder="Mob No"
          />
        </div>

        <div className="mb-3">
          
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-danger w-100 text-uppercase">
          Login
        </button>
        <a href={"/Login"} style={{textDecoration:"none",marginTop:"10px"}}>Already Existing</a>
      </form>
     
      </div>
      <Footer/>
    </>
    
    };
export default Signup;
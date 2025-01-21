
import Footer from "../component/footer";
import Header from "../component/Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="login_form d-flex justify-content-center">
      <form className="align-items-center w-25 border border-2 p-4 shadow ms-3 mt-5">
        <h3 className="text-center">LOGIN</h3>
        <div className="mb-3 ">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
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
        <a href={"/Signup"} style={{textDecoration:"none" ,marginTop:"5px"}}>Register Here</a>
      </form>
     
      </div>
      <Footer/>
    </>
  );
};
export default Login;
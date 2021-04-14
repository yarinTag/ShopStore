import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { serverApi } from "../../config";
import { Link, Redirect, useHistory } from "react-router-dom";
import { login, clearErrors } from "../../actions/authActions";
import Loader from "../layout/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/products");
    }
    if (error) {
      dispatch(clearErrors);
    }
  }, [dispatch, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!password || !email) return
    dispatch(login(email, password));
  };

  // const forgotPass = () => {
  //   axios
  //     .post(`/api/v1/passowrd/forgot`, email)
  //     .then((res) => console.log(res));
  // };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div class="row">
            <div class="col-md-8 m-auto">
              <h1 class="display-4 text-center">Log In</h1>
              <p class="lead text-center">Sign in to your account</p>
              <form action="dashboard.html" onSubmit={submitHandler}>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <span style={{ color: "red" }}></span>
                <button
                  type="submit"
                  class="btn btn-info btn-block mt-4"
                  id="login_btn"
                >
                  Log in
                </button>
              </form>
              <div>
              <Link className="nav-link" to="/password/forgot">
                Forgot your password?
              </Link>
              {error!="Login first to access this" ? 
                <p style={{ color: "red", marginLeft: "80px", marginTop: "8px" }}>{error}</p> : <></> }
                
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

// export default Login;
// class Login extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//       message: "",
//     };
//   }
//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   onSubmit = (e) => {
//     const { message, ...rest } = this.state;
//     axios
//       .post(`${serverApi}/api/v1/login`, rest)
//       .then((res) => {
//         this.setState({ message: res.data.message });
//         if (res.data.token) localStorage.setItem("token", res.data.token);
//         const token = localStorage.getItem("token");

//         if (token) {
//           this.props.handleLogin(res.data.user.role, res.data.user.firstName);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   render() {
//     if (this.props.loggedIn || localStorage.getItem("token"))
//       return <Redirect to="/" />;
//     const { message } = this.state;

//     return (
//       <div class="container">
//         <div class="row">
//           <div class="col-md-8 m-auto">
//             <h1 class="display-4 text-center">Log In</h1>
//             <p class="lead text-center">Sign in to your account</p>
//             <form action="dashboard.html">
//               <div class="form-group">
//                 <input
//                   type="email"
//                   class="form-control form-control-lg"
//                   placeholder="Email Address"
//                   name="email"
//                   onChange={this.onChange}
//                   value={this.state.email}
//                 />
//               </div>
//               <div class="form-group">
//                 <input
//                   type="password"
//                   class="form-control form-control-lg"
//                   placeholder="Password"
//                   name="password"
//                   onChange={this.onChange}
//                   value={this.state.password}
//                 />
//               </div>
//               <span style={{ color: "red" }}>{message}</span>
//               <button
//                 type="button"
//                 class="btn btn-info btn-block mt-4"
//                 onClick={this.onSubmit}
//               >
//                 Log in
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Login;

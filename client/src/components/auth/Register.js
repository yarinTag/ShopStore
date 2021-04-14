import React from "react";
import axios from "axios";
import { serverApi } from "../../config";
import { Link, Redirect } from "react-router-dom";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSumbit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSumbit(e) {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(newUser);
    axios
      .post(`${serverApi}/api/v1/register`, newUser)
      .catch ((error) => console.log(error))
  }

  render() {
    if (this.props.loggedIn || localStorage.getItem("token"))
      return <Redirect to="/" />;
    return (
      <div class="register">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <h1 class="display-4 text-center">Sign Up</h1>
              <p class="lead text-center">Create your account</p>
              <form action="create-profile.html">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="First Name"
                    name="firstName"
                    onChange={this.onChange}
                    value={this.state.firstName}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={this.onChange}
                    value={this.state.lastName}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    onChange={this.onChange}
                    value={this.state.password}
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-info btn-block mt-4"
                  onClick={this.onSubmit}
                >
                  Submit
                </button>
                <Link className="nav-link" to="/login">
                  Already have an account?
              </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

// import React, { useState, useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { register, clearErrors } from "../../actions/authActions";

// const Register = ({ history }) => {
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const { firstName, lastName, email, password } = user;

//   const dispatch = useDispatch();

//   const { isAuthenticated, error, loading } = useSelector(
//     (state) => state.auth
//   );

//   useEffect(() => {
//     if (isAuthenticated) {
//       history.push("/products");
//     }

//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//   }, [dispatch, isAuthenticated, error, history]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const newUser = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//     };

//     dispatch(register(newUser));
//     console.log(newUser);
//   };

//   return (
//     <>
//       <div class="register">
//         <div class="container">
//           <div class="row">
//             <div class="col-md-8 m-auto">
//               <h1 class="display-4 text-center">Sign Up</h1>
//               <p class="lead text-center">Create your account</p>
//               <form
//                 action="create-profile.html"
//                 onSubmit={submitHandler}
//                 encType="multipart/form-data"
//               >
//                 <div class="form-group">
//                   <input
//                     type="text"
//                     class="form-control form-control-lg"
//                     placeholder="First Name"
//                     name="firstName"
//                     value={firstName}
//                     onChange={(e) => setUser(e.target.value)}
//                   />
//                 </div>
//                 <div class="form-group">
//                   <input
//                     type="text"
//                     class="form-control form-control-lg"
//                     placeholder="Last Name"
//                     name="lastName"
//                     value={lastName}
//                     onChange={(e) => setUser(e.target.value)}
//                   />
//                 </div>
//                 <div class="form-group">
//                   <input
//                     type="email"
//                     class="form-control form-control-lg"
//                     placeholder="Email Address"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setUser(e.target.value)}
//                   />
//                 </div>
//                 <div class="form-group">
//                   <input
//                     type="password"
//                     class="form-control form-control-lg"
//                     placeholder="Password"
//                     name="password"
//                     value={password}
//                     onChange={(e) => setUser(e.target.value)}
//                   />
//                 </div>
//                 <button type="submit" class="btn btn-info btn-block mt-4">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Register;

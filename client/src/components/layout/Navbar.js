import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const handleSignOut = () => {
    dispatch(logOut());
  };
  console.log(user);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto" id="navBar">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        {user && user.role == "admin" ? ( //TODO: Check if role = admin
          <div class="dropdown show">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dashboard
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">
                Edit Users
              </a>
              <a class="dropdown-item" href="http://localhost:4200/products">
                Edit Products
              </a>
              <a class="dropdown-item" href="http://localhost:4200/orders">
                Edit Orders
              </a>
              <a class="dropdown-item" href="#">
                Statistics
              </a>
            </div>
          </div>
        ) : (
          <></>
        )}
        {!user ? (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" id="login_btn">
                Login
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="testest">
                <div className="nav-link">
                  <div id="userBar" style={{ display: "flex", height: "10px" }}>
                    <AccountCircleIcon />
                    <span>{user.firstName}</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="testest">
                <Link className="nav-link" to="/cart">
                  <div id="shopBar" style={{ display: "flex", height: "10px" }}>
                    <ShoppingCartOutlinedIcon size="12px" />
                    <p> {cartItems.length} </p>
                  </div>
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <div className="testest">
                <Link className="nav-link" to="/" onClick={handleSignOut}>
                  Sign out
                </Link>
              </div>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

// class Navbar extends Component {
//   handleSignOut = () => {
//     if (localStorage.getItem("token")) this.props.handleLogin("user");
//     localStorage.removeItem("token");
//   };

//   render() {
//     const { userRole, firstName } = this.props;
//     return (
//       <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
//         {/* <div className="container"  > */}
//         <div className="collapse navbar-collapse" id="mobile-nav">
//           <ul className="navbar-nav mr-auto" id="navBar">
//             {/* <Link class="navbar-brand" to="/">
//                             <div class="logo-image">
//                                 <img src="" class="img-fluid">
//                                 </img>
//                             </div>
//                         </Link> */}
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/products">
//                 Products
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/orders">
//                 Orders
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About
//               </Link>
//             </li>
//             {localStorage.getItem("token") && userRole == "admin" ? ( //TODO: Check if role = admin
//               <div class="dropdown show">
//                 <a
//                   class="btn btn-secondary dropdown-toggle"
//                   href="#"
//                   role="button"
//                   id="dropdownMenuLink"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   Dashboard
//                 </a>

//                 <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
//                   <a class="dropdown-item" href="#">
//                     Edit Users
//                   </a>
//                   <a class="dropdown-item" href="#">
//                     Edit Products
//                   </a>
//                   <a class="dropdown-item" href="#">
//                     Edit Orders
//                   </a>
//                   <a class="dropdown-item" href="#">
//                     Statistics
//                   </a>
//                 </div>
//               </div>
//             ) : (
//               <></>
//             )}
//           </ul>
//         </div>

//         {!localStorage.getItem("token") ? (
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/register">
//                 Sign Up
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/login" id="login_btn">
//                 Login
//               </Link>
//             </li>
//           </ul>
//         ) : (
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <div className="testest">
//                 <div className="nav-link">
//                   <div id="userBar" style={{ display: "flex", height: "10px" }}>
//                     <AccountCircleIcon />
//                     <p>{firstName}</p>
//                   </div>
//                 </div>
//               </div>
//             </li>
//             <li className="nav-item">
//               <div className="testest">
//                 <Link className="nav-link" to="/">
//                   <div id="shopBar" style={{ display: "flex", height: "10px" }}>
//                     <ShoppingCartOutlinedIcon size="12px" />
//                     <p> (0) </p>
//                   </div>
//                 </Link>
//               </div>
//             </li>
//             <li className="nav-item">
//               <div className="testest">
//                 <Link className="nav-link" to="/" onClick={this.handleSignOut}>
//                   Sign out
//                 </Link>
//               </div>
//             </li>
//           </ul>
//         )}
//       </nav>
//     );
//   }
// }

export default Navbar;

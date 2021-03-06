import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

import Products from "./components/layout/Products";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import OrdersList from "./components/order/OrdersList";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { loadUser } from "./actions/authActions";
import store from "./store";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ForgotPassword from "./components/auth/ForgotPassword";
import NewPassword from "./components/auth/NewPassword";
import { useSelector } from "react-redux";
import Payment from "./components/cart/Payment";
import ProductDetails from "./components/layout/ProductDetails";
import About from "./components/layout/About";
import "./App.css";
import OrderDetails from "./components/order/OrderDetails";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={() => <Register />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/password/forgot" component={ForgotPassword} />
          <Route path="/password/reset/:token" component={NewPassword} exact />
        </div>

        <ProtectedRoute exact path="/shipping" component={Shipping} />
        <ProtectedRoute exact path="/confirm" component={ConfirmOrder} />
        <ProtectedRoute exact path="/payment" component={Payment} />

        <Route exact path="/products" component={Products} />
        <Route exact path="/products/search/:keyword" component={Products} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/orders/me" component={OrdersList} />
        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

// class App extends React.Component {
//   // componentDidMount() {
//   //   store.dispatch(loadUser());
//   // }

//   // componentWillUnmount() {
//   //   store.dispatch([]);
//   // }

//   state = {
//     loggedIn: false,
//     userRole: "user",
//     firstName: "",
//   };

//   handleLogin = (userRole, firstName) => {
//     const loggedIn = !this.state.loggedIn;
//     this.setState({ loggedIn, userRole, firstName });
//   };
//   render() {
//     const { userRole, loggedIn, firstName } = this.state;

//     return (
//       <Router>
//         <div className="App">
//           <Navbar
//             handleLogin={this.handleLogin}
//             userRole={userRole}
//             firstName={firstName}
//           />
//           <Route exact path="/" component={Landing} />
//           <div className="container">
//             <Route
//               exact
//               path="/register"
//               component={() => <Register loggedIn={loggedIn} />}
//             />
//             <Route
//               exact
//               path="/login"
//               component={() => (
//                 <Login handleLogin={this.handleLogin} loggedIn={loggedIn} />
//               )}
//             />
//           </div>
//           <Route exact path="/shipping" component={Shipping} />
//           <Route exact path="/order/confirm" component={ConfirmOrder} />
//           <Route exact path="/products" component={Products} />
//           <Route exact path="/products/search/:keyword" component={Products} />
//           <Route exact path="/product/:id" component={ProductDetails} />
//           <Route exact path="/cart" component={Cart} />
//           <Footer />
//         </div>
//       </Router>
//     );
//   }
// }
export default App;

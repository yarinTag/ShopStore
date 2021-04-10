import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Products from "./components/layout/Products";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import ProductDetails from "./components/layout/ProductDetails";
import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: false,
    userRole: "user",
  };

  handleLogin = (userRole) => {
    const loggedIn = !this.state.loggedIn;
    console.log(userRole);
    this.setState({ loggedIn, userRole });
  };
  render() {
    const { userRole, loggedIn } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar handleLogin={this.handleLogin} userRole={userRole} />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route
              exact
              path="/register"
              component={() => <Register loggedIn={loggedIn} />}
            />
            <Route
              exact
              path="/login"
              component={() => (
                <Login handleLogin={this.handleLogin} loggedIn={loggedIn} />
              )}
            />
          </div>
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/search/:keyword" component={Products} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;

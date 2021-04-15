import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Electronic Store</h1>
                <p className="lead">
                  Buy the cheapest Electronic stuff in here, we got the best prices and the newest products
                </p>
                <p className="lead">be sure to sign up and be alert for discounts!</p>
                <hr />
                <Link to="/login" className="btn btn-lg btn-info mr-2">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

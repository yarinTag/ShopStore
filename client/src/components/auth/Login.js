import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { serverApi } from "../../config";
import { Link, Redirect } from "react-router-dom";
import { login, clearErrors } from "../../actions/authActions";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    const { message, ...rest } = this.state;
    axios
      .post(`${serverApi}/api/v1/login`, rest)
      .then((res) => {
        this.setState({ message: res.data.message });
        if (res.data.token) localStorage.setItem("token", res.data.token);
        const token = localStorage.getItem("token");

        if (token) {
          this.props.handleLogin(res.data.user.role);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.props.loggedIn || localStorage.getItem("token"))
      return <Redirect to="/" />;
    const { message } = this.state;

    return (
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Log In</h1>
            <p class="lead text-center">Sign in to your account</p>
            <form action="dashboard.html">
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
              <span style={{ color: "red" }}>{message}</span>
              <button
                type="button"
                class="btn btn-info btn-block mt-4"
                onClick={this.onSubmit}
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

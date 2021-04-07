import React from 'react';
import axios from 'axios';
import { serverApi } from '../../config'
import { Link, Redirect } from "react-router-dom"

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(`${serverApi}/api/v1/login`, user)
            .then(res => {

                localStorage.setItem("token", res.data.token);
                const token = localStorage.getItem("token");
                if (token) {
                    this.props.handleLogin()
                    return (<Redirect to="/" />)
                }

            })



    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <h1 class="display-4 text-center">Log In</h1>
                        <p class="lead text-center">Sign in to your account</p>
                        <form action="dashboard.html">
                            <div class="form-group">
                                <input type="email" class="form-control form-control-lg" placeholder="Email Address" name="email" onChange={this.onChange} value={this.state.email} />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control form-control-lg" placeholder="Password" name="password" onChange={this.onChange} value={this.state.password} />
                            </div>
                            <input type="submit" class="btn btn-info btn-block mt-4" onClick={this.onSubmit} />
                        </form>
                    </div>
                </div>
            </div>

        );

    };
};

export default Login
import React from 'react';
import axios from 'axios';
import { serverApi } from '../../config'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSumbit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSumbit(e) {
        e.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };
        console.log(newUser);
        axios.post(`${serverApi}/api/v1/register`, newUser)
            .then(res => console.log(res.data))

    }


    render() {
        return (
            <div class="register">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 m-auto">
                            <h1 class="display-4 text-center">Sign Up</h1>
                            <p class="lead text-center">Create your account</p>
                            <form action="create-profile.html">
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-lg" placeholder="first name" name="firstName" onChange={this.onChange} value={this.state.firstName} />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-lg" placeholder="last name" name="lastName" onChange={this.onChange} value={this.state.lastName} />
                                </div>
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
            </div>
        );
    }


}



export default Register
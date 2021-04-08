import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    handleSignOut = () => {
        if (localStorage.getItem("token")) this.props.handleLogin("user")
        localStorage.removeItem("token");
    }
    
    render() {
        const {userRole} = this.props;
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                {/* <div className="container"  > */}
                <div className="collapse navbar-collapse" id="mobile-nav">

                    <ul className="navbar-nav mr-auto" id="navBar">
                        {/* <Link class="navbar-brand" to="/">
                            <div class="logo-image">
                                <img src="" class="img-fluid">
                                </img>
                            </div>
                        </Link> */}
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
                        {(localStorage.getItem("token") && (userRole=="admin")) ? //TODO: Check if role = admin
                            <div class="dropdown show">
                             <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dashboard
                            </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Edit Users</a>
                                    <a class="dropdown-item" href="#">Edit Products</a>
                                    <a class="dropdown-item" href="#">Edit Orders</a>
                                    <a class="dropdown-item" href="#">Statistics</a>
                                </div>
                            </div>

                            :
                            <></>
                        }
                    </ul>
                </div>



                {
                    !localStorage.getItem("token")?
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    Sign Up
                                    </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                    </Link>
                            </li>

                        </ul>
                        :
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={this.handleSignOut}>
                                    Sign out
                                    </Link>
                            </li>
                        </ul>

                }


            </nav >
        )
    }
}


export default Navbar
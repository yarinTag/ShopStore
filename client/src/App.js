import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Home from './components/layout/Home'

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';



class App extends React.Component {
  state = {
    
    loggedIn: false,
     userRole: "user"
  }

  handleLogin = (userRole) => {
    const loggedIn = !this.state.loggedIn
    console.log(userRole)
    this.setState({ loggedIn, userRole })
  }
  render() {
    const { userRole, loggedIn } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar handleLogin={this.handleLogin} userRole={userRole} />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={()=><Register loggedIn={loggedIn}/>} />
            <Route exact path="/login" component={() => <Login handleLogin={this.handleLogin} loggedIn={loggedIn} />} />
          </div>
          <Route exact path="/products" component={Home}/>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;

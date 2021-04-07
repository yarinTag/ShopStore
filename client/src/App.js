import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';

class App extends React.Component {
  state = {
    loggedIn: false
  }

  handleLogin = () => {
    const loggedIn = !this.state.loggedIn 
    this.setState({ loggedIn })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar handleLogin={this.handleLogin} />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={() => <Login handleLogin={this.handleLogin} />} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;

import React, { Component, Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import NavBar from './components/commons/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'

class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      showLogin: false,
      showRegister: false,
      username: ""
    }
    this.baseState = this.state
  }

  handleChange = obj => {
    if (obj instanceof Object) {
      this.setState({ ...obj })
    }
  }

  handleLogout = () => {
    this.setState(this.baseState)
  }

  handleLoginShow = () => {
    this.setState({ showLogin: true })
  }

  handleLoginClose = () => {
    this.setState({ showLogin: false })
  }

  handleRegisterShow = () => {
    this.setState({ showRegister: true })
  }

  handleRegisterClose = () => {
    this.setState({ showRegister: false })
  }

  render() {

    return (
      <>
        <NavBar
          handleLoginShow={this.handleLoginShow}
          handleRegisterShow={this.handleRegisterShow}
          logout={this.handleLogout}
          {...this.state}
        />

        <Login
          showLogin={this.state.showLogin}
          handleShow={this.handleLoginShow}
          handleClose={this.handleLoginClose}
          handleChange={this.handleChange}
          handleRegisterShow={this.handleRegisterShow}
        />

        <Register
          showRegister={this.state.showRegister}
          handleShow={this.handleRegisterShow}
          handleClose={this.handleRegisterClose}
          handleChange={this.handleChange}
          handleLoginShow={this.handleLoginShow}
        />

        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Suspense>
        </Router>

        <ToastContainer
          autoClose={3000}
          position="bottom-right"
        // hideProgressBar={true}
        />
      </>
    );
  }
}

export default App;

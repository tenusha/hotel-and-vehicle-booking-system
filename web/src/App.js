import React, { Component, Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
// import { hello, post } from "./actions/services";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import NavBar from './components/commons/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'

class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      showLogin: false,
      username: ""
    }
  }

  componentWillMount() {
    // hello("http://localhost:4567/hello")
    //   .then(res => this.setState({ data: res }));

    // post("http://localhost:4567/post", { a: 10, b: 100 })
    //   .then(res => this.setState({ post: res }));
  }

  handleLoginShow = () => {
    this.setState({ showLogin: true })
  }

  handleLoginClose = () => {
    this.setState({ showLogin: false })
  }

  render() {

    return (
      <>
        <NavBar handleShow={this.handleLoginShow} {...this.state} />
        <Login
          showLogin={this.state.showLogin}
          handleShow={this.handleLoginShow}
          handleClose={this.handleLoginClose}
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
          autoClose={2000}
          // hideProgressBar={true}
          
        />
      </>
    );
  }
}

export default App;

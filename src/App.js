import React, { Component } from 'react';
import Navbar from './home/Navbar';
import Sidebar from './home/Sidebar';
import Home from './home/Home';
import Splash from './home/Splash'
//import Auth from './auth/Auth'
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token })
  }

  logout = () => {
    this.setState({ sessionToken: '' });
    localStorage.clear();
  }

  protectedViews = () => {
    if(this.state.sessionToken === localStorage.getItem('token')) {
      return(
        <Switch>
          <Route path='/' exact>
            <Splash sessionToken = {this.state.sessionToken} />
          </Route>
        </Switch>
      )
    } else {
      return (
        <Switch>
          <Route path='/home' exact>
            <Home sessionToken ={this.setSessionState} />
          </Route>
        </Switch>
      )
    }
  }
    
 
  render() {
    return (
      <div className="App">
        <Router>
           <div> 
            <Navbar setToken={this.setSessionState} />
            {this.protectedViews()}
           </div> 
        </Router>
        <Sidebar />

      </div>
    );
  }
}

export default App;

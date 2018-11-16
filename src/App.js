import React, { Component } from 'react';
import Sidebar from './home/Sidebar';
import Home from './home/Home';
import Splash from './home/Splash'
import Auth from './auth/Auth';
import Logo from "./assets/facebook_cover_photo_1.png";
import Adopt from "./Pages/Adopt";
import Cats from './Pages/Cats';
import Dogs from './Pages/Dogs';
import Signup from './auth/Signup';
import Add from './Updates/Add';
import Footer from './home/Footer';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: ''
    }
    this.setSessionState = this.setSessionState.bind(this)
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
    // if(this.state.sessionToken === localStorage.getItem('token')) {
    if (localStorage.getItem('token') === null) {  
    return(
        <div>
          <div>                    
            <ul className="navbar">
              <li><Link to='/' id="home"><img src={Logo} alt="logo" id="logo"/></Link></li>
              <li><Link to='/adopt' id="adopt">Adopt</Link></li>  
              <li><Link to='/cats' id="cats" >Cats</Link></li>
              <li><Link to='/dogs' id="dogs">Dogs</Link></li>
              <li><Link to='/auth' id='auth'>Login</Link></li>
            </ul>
          </div>
          <div>   
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/adopt"><Adopt /></Route>
              <Route exact path='/cats'><Cats /></Route>
              <Route exact path='/dogs'><Dogs /></Route>
              <Route exact path='/auth'><Auth setToken={this.setSessionState} /></Route>
            </Switch>
          </div>  
        </div>
    
        )} else {
            return(
                <div>
                <div>                    
                  <ul className="navbar">
                    <li><Link to='/' id="home"><img src={Logo} alt="logo" id="logo"/></Link></li>
                    <li><Link to='/createuser'>Create New User</Link></li>
                    <li><Link to='/add'>New Animal</Link></li>  
                    <li><Link to='/auth' onClick={this.logout} >Logout</Link ></li>
                  </ul>
                </div>
                <div>   
                  <Switch>
                    <Route exact path="/"><Splash /></Route>
                    <Route exact path='/createuser'><Signup setToken={this.setSessionState}/></Route>
                    <Route exact path="/add"><Add setToken={this.props.setToken}/></Route>
                    <Route exact path='/auth'><Splash /></Route>
                  </Switch>
                </div>
            </div>
            )
        }
    }

    
 
  render() {
    return (
      <div className="App">
        <Router>
           <div className="protectedView"> 
            {this.protectedViews()}
           </div> 
        
        </Router>
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;

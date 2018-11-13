import React from 'react';
import { Route, Switch, Link, } from 'react-router-dom';
import Logo from "../assets/facebook_cover_photo_1.png";
import Adopt from "../Pages/Adopt";
import Cats from '../Pages/Cats';
import Dogs from '../Pages/Dogs';
import Auth from '../auth/Auth';
import Home from "./Home";
import Add from '../Updates/Add';
import Signup from '../auth/Signup';
import Splash from '../home/Splash'
import './navbar.css';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: true
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    logout = () => {
        this.setState({ sessionToken: '' });
        localStorage.clear();
      }

    render() {
        if (localStorage.getItem('token') === null) {
        return(
            <div>
                <div>                    
                    <ul className="navbar">
                        <li><Link to='/home' id="home"><img src={Logo} alt="logo" id="logo"/></Link></li>
                        <li><Link to='/adopt' id="adopt">Adopt</Link></li>  
                        <li><Link to='/cats' id="cats" >Cats</Link></li>
                        <li><Link to='/dogs' id="dogs">Dogs</Link></li>
                        <li><Link to='/auth' id='auth'>Login</Link></li>
                    </ul>
                </div>
                <div>   
                    <Switch>
                        <Route exact path="/home"><Home /></Route>
                        <Route exact path="/adopt"><Adopt /></Route>
                        <Route exact path='/cats'><Cats /></Route>
                        <Route exact path='/dogs'><Dogs /></Route>
                        <Route exact path='/auth'><Auth setToken={this.props.setToken} /></Route>
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
                        {/* <li><Link to='/edit' id="edit" >Edit Animal</Link></li> */}
                        <li><Link to='/auth' onClick={this.logout} >Logout</Link ></li>
                    </ul>
                </div>
                <div>   
                    <Switch>
                        {/* <Route exact path="/"><Splash /></Route> */}
                        <Route exact path='/createuser'><Signup setToken={this.props.setToken}/></Route>
                        <Route exact path="/add"><Add setToken={this.props.setToken}/></Route>
                        {/* <Route exact path='/edit'><Edit /></Route> */}
                        <Route exact path='/auth'><Splash /></Route>
                    </Switch>
                </div>
            </div>
            )
        }
    }
}

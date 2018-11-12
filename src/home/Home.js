import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import "./home.css"

export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1> About Us</h1>
                    <p>Welcome to Cuddle Co! Our mission is to help support the animals in our care with some
                        much needed love and cuddles from our members.  Cuddle Co was founded 4 years ago by 
                        Emily Perkins, since then it has grown to include 12 furbabies, each available for
                        adoption, even though it breaks our hearts. While we strive to give the best home
                        life possible to each animal in our care, we do understand that have a home with an
                        individual family is much less stressful on our babies. </p>
                </div>
            </div>
        )
    }
}
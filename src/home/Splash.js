import React from 'react';
import AnimalIndex from '../Updates/Index';
import './splash.css'

const Splash = (props) => {
    return(
        <div className="splashDiv">
            <AnimalIndex token={props.sessionToken} />
        </div>
    )
}

export default Splash;
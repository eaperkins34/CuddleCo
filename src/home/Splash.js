import React from 'react';
import AnimalIndex from '../Updates/Index';

const Splash = (props) => {
    return(
        <div className="mainDiv">
            <AnimalIndex token={props.sessionToken} />
        </div>
    )
}

export default Splash;
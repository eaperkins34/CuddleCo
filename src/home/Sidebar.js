import React from 'react';
import { Container, NavLink } from 'reactstrap';
import './sidebar.css'

const SideBar = () => {
        return(
            <div>
                <Container md="3" id="humaneSoc">
                    <h1 id="title">Local Humane Societies</h1>
                    <NavLink className="rescue" href="http://www.hamiltonhumane.com/" target="_blank">Hamilton Co Humane Society</NavLink>< br />
                    <NavLink className="rescue" href="https://indyhumane.org/wp-content/cache/all//index.html" target="_blank">Indianapolis Humane Society</NavLink>< br />
                    <NavLink className="rescue" href="http://heavenafterhellrescue.org/" target="_blank">Heaven After Hell Rescue</NavLink>< br />
                    <NavLink className="rescue" href="https://www.ldrrescue.org/" target="_blank">Lucky Dog Rescue</NavLink>< br />
                </Container>
            </div>
        )
    }


export default SideBar;
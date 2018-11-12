import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//import Signup from '../auth/Signup';
import Login from '../auth/Login';
import './auth.css';

const Auth = (props) => {
    return (
        <div className="mainDiv">
        <Container className="auth-container">
            <Row>
                <Col md="6">
                <div className="login">
                    <div><Login setToken={props.setToken} /></div>
                </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Auth;

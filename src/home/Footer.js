import React from 'react';
import './footer.css'
import { Container, Row, Col } from 'reactstrap';
import Logo from '../assets/logo_transparent.png'

const Footer = () => {
    return(
        <Container id="container">
            <Row id="links">
                <Col sm="3"id="brand">
                    <img id="logofooter" src={Logo} alt="logo"/>
                </Col>
                <Col sm="6">
                    <p><a href="/">Contact Us</a></p>
                    <p><a href="/">Adopt</a></p>
                    <p><a href="/">Rental Contract</a></p>
                    <p><a href="/">Terms of Service</a></p>
                    <p><a href="/">Other Stuff</a></p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
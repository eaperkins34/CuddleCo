import React from 'react';
import './footer.css'
import { Container, Row, Col } from 'reactstrap';
import Logo from '../assets/logo_transparent.png';
// import Facebook from '../assets/facebook.svg';
// import Twitter from '../assets/twitter.svg';
// import Instagram from '../assets/instagram.svg';


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
                    {/* <img className="icon" src={Facebook} alt="facebook" />
                    <img className="icon" src={Twitter} alt="twitter" />
                    <img className="icon" src={Instagram} alt="instagram" /> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
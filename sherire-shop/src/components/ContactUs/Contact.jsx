import React from "react";
import { useState } from "react";
import { Col, Row,Container } from "react-bootstrap";
import './contactus.css';
const ContactUs = () => {

    return (
        <div className="container">
            <Container>
                <Row>
                    <div className="slanting-contact-div"></div>

                </Row>
                <Row className="contact-main">
                    <Col ms={6} md={6}>
                        <div className="contact-left">
                            <div className="heading">
                                <p>Help & Support</p>
                                
                            </div>
                            <div className="support-overlay">
                                <p>24 Hours</p>
                            </div>
                        </div>
                            <div >
                                <form action="" className="form-contact">
                                    <input type="text" placeholder="Name" name="" id="" />
                                    <input type="text" placeholder="Email" name="" id="" />
                                    <input type="text" placeholder="Subject" name="" id="" />
                                    <textarea name="" id="" cols="30" rows="2" placeholder="Message"></textarea>
                                    <button>Send</button>
                                </form>
                            </div>
                        

                    </Col>
                    <Col ms={6} md={6}>
                        <div className="contact-right">
                            <img src="https://sherise.vercel.app/static/media/Contact.411fe596bada1e8b499a1414f538a7d2.svg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    
    )
}

export default ContactUs;
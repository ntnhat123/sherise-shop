import React from "react";
import {Row,Col,Container} from "react-bootstrap";
import "./sholarship.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Sholarship = () => {

    return (
        <div>
           <Container>

                <Row className="main">
                    <Col ms={6} md={6}>
                        <div className="sholarship-left">
                            <div className="support-overlay">
                                <p>Donate</p>
                            </div>
                            <div className="heading">
                                <p>Be The Reason Someone Smiles Today </p>
                                <p>We at SheRise want to give the opportunity to all the underprivileged girls, to come and explore the STEM field and excel their career in tech. Donate now and help to shape their futures!</p>
                            </div>
                            <button>Donate Now <FontAwesomeIcon className="icon" icon={faArrowRight} /></button>
                        </div>
                            
                        

                    </Col>
                    <Col ms={6} md={6}>
                        <div className="contact-right">
                            <img src="https://sherise.vercel.app/static/media/Donation.71edebfb86df5143bbaea0a1728642a7.svg" alt="" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} ms={12} >
                        <h1>Scholarship Form</h1>
                        <form action="" className="form-scholarship">
                            {/* <div></div> */}
                            <input type="text" placeholder="Name" name="" id="" />
                            <input type="text" placeholder="Email" name="" id="" />
                            <input type="text" placeholder="Your 10th Board Marks" name="" id="" />
                            <input type="text" placeholder="Your 12th Board Marks" name="" id="" />
                            <input type="text" placeholder="Your College Name" name="" id="" />
                            <textarea name="" placeholder="Why you need this Scholarship?" id="" cols="30" rows="6"></textarea>
                            <button>Send</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Sholarship;
import React from "react";
import { Col, Row,Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {

    return (
        <div>
            <Container>
                
                <Row className="footer">
                    <Col>
                        {/* <div className="left"><p>@ 2023 <span >SheRise</span> - All Rights Reserved</p></div> */}
                        <div style={{textAlign:'left'}}><p>@ 2023 <span>SheRise </span>All Rights Reserved</p></div>

                        
                    </Col>
                    <Col>
                        <div className="right-footer"><p>Developed by <span>PokemonCodes </span>Team</p></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
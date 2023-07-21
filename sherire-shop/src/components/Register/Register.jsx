import React from "react";
import { useState } from "react";

import { Col, Row,Container } from "react-bootstrap";

import './register.css'

const Register = () => {

    return(
        <div>
            <Container>
                <Row>
                    <Col md={12} ms={12} xl={12}>
                        <form>
                            <h1 className="name-login">Register</h1>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter your name" />
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter email" />
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    placeholder="Password" />
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    placeholder="Confirm Password" />
                                <button>Register</button>
                                <p>Already have an account?</p>
                                <a href="/login">Login</a>

                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
          
        </div>

    )
}

export default Register;
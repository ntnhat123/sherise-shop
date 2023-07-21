import React from "react";
import { useState } from "react";
import { Col,Row,Container } from "react-bootstrap";
import "./login.css";

const Login = () => {

    return (
        <div className="container">
            <Container>
                <Row>
                    <Col md={12} ms={12} xl={12}>
                        <form>
                            <h1 className="name-login">Login</h1>
                            <div className="form-group">
                                
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter email" />
                                <button>Login</button>
                                <p>Not registered yet?</p>
                                <a href="/register">Create an account</a>
                            </div>
                            
                        </form>
                    </Col>
                </Row>

            </Container>
            
            
        </div>
    );
}

export default Login;
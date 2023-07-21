import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping,faPersonDress,faHeartCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Col, Row,Container } from "react-bootstrap";
import './banner.css'
import companyLogo1 from "../../assets/image/company-logo1.png";
import companyLogo2 from "../../assets/image/company-logo2.png";
import companyLogo3 from "../../assets/image/company-logo3.png";
import companyLogo4 from "../../assets/image/company-logo4.png";
import companyLogo5 from "../../assets/image/company-logo5.png";
import companyLogo6 from "../../assets/image/company-logo6.png";
import companyLogo7 from "../../assets/image/microsoft-logo.png";

const Baner = () => {

    const service = [
        {
            id: 1,
            title: 'AI Assistant',
            img:'https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service1.webp?updatedAt=1689492296241',
            description:' Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos snap.'
        },
        {
            id: 2,
            title: 'One-2-One Mentorship',
            img:'https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service1.webp?updatedAt=1689492296241',
            description:' Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos snap.'

        },
        {
            id: 3,
            title: 'Career Counselling',
            img:'https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service1.webp?updatedAt=1689492296241',

            description:' Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos snap.'
        },
        {
            id: 4,
            title: 'Resume Builder',
            img:'https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service1.webp?updatedAt=1689492296241',
            description:' Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos snap.'
        },
        {
            id: 5,
            title: 'Interview Preparation',
            img:'https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service1.webp?updatedAt=1689492296241',
            description:' Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos snap.'
        },
        {
            id: 6,
            title: 'Job Search',
            img:'https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service1.webp?updatedAt=1689492296241',
            description:' Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos snap.'

        },
        {
            id: 7,
            title: 'Career Guidance',
            img:'https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service1.webp?updatedAt=1689492296241',
            description:' Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos snap.'

        },
        {
            id: 8,
            title: 'Career Assessment',
            img:'https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service1.webp?updatedAt=1689492296241',
            description:' Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos snap.'

        }
    ]
    const mentor = [
        {
            id: 1,
            name: 'Sayan Chandra',
            img:'https://sherise.vercel.app/static/media/mentor3.91b77fad3c01016e08dc.png',
            description:'Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos snap.'
        },
        {
            id: 2,
            name: 'Sayan Chandra',
            img:'https://sherise.vercel.app/static/media/mentor5.d3d29668457db3c97d8c.png',
            description:'Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos snap.'
        }
        ,{
            id: 3,
            name: 'Sayan Chandra',
            img:'https://sherise.vercel.app/static/media/mentor6.3a30a9072e17fcfe90e6.png',
            description:'Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos snap.'

        }
    ]
    return (
        <div className="landingPage">
            <section>
                <Container>
                    <Row>
                        <Col ms={6} md={6} className="landingPage-main">
                            <p>LADIES, ARE YOU MISSING OPPORTUNITIES ?</p>
                            <p>
                                Climb the Career Ladder on <span>SheRise </span>
                            </p>
                            <p>
                                SheRise is the premier job portal for women, offering a wide
                                range of job opportunities in a variety of industries. Our
                                mission is to empower women in the workforce by connecting them
                                with female-friendly employers and providing resources for
                                career advancement.{" "}
                            </p>
                            <button>Get Start</button>
                        </Col>
                        <Col ms={6} md={6}  className="img-col">
                            <Row className="img-row1">
                                
                                <Col>
                                    <img src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl13.jpg?updatedAt=1689504272833" alt="Group-1" border="0" />
                                </Col>
                                <Col>
                                    <img  src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl11.jpeg?updatedAt=1689504268533" alt="Group-1" border="0" />
                                </Col>
                            </Row>
                            <Row className="img-row2">
                                <Col>
                                    <img src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl15.jpg?updatedAt=1689504269740" alt="Group-1" border="0" />
                                </Col>
                                <Col>
                                    <img src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl14.jpg?updatedAt=1689504273280" alt="Group-1" border="0" />
                                </Col>
                                <Col>
                                    <img src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl2.jpg?updatedAt=1689504273895" alt="Group-1" border="0" />
                                </Col>

                            </Row>
                            <Row className="img-row3" >
                                
                                <Col>
                                    <img src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl16.jpg?updatedAt=1689504272980" alt="" border="0" />
                                </Col>
                            </Row>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col className="company-logo">
                            <img src={companyLogo1} alt="company-logo1" />
                            <img src={companyLogo2} alt="company-logo2" />
                            <img src={companyLogo3} alt="company-logo3" />
                            <img src={companyLogo4} alt="company-logo4" />
                            <img src={companyLogo5} alt="company-logo5" />
                            <img src={companyLogo6} alt="company-logo6" />
                            <img src={companyLogo7} alt="company-logo7" />
                        </Col>
                    </Row>
                    {/* ================================  Our Service  ================================ */}
                    <Row>
                        <Col >
                            <h2>Our Service</h2>
                        </Col>
                        <Row className="our-service"> 
                            
                                {
                                    service.map((item) => {
                                        return (
                                            <Col ms={2} className="service-card">
                                                <img src={item.img} alt={item.title} />
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </Col>
                                        )
                                    }
                                    )
                                }
                                {/* <Col className="servire-card">
                                    <img src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service1.webp?updatedAt=1689492296241" alt="service1" />
                                    <h3>Resume Builder</h3>
                                    <p>Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos snap.</p>

                                </Col> */}
                            
                        </Row>
                    </Row>
      {/* ================================  Why SheRise  ================================= */}
                    <Row>
                        <Col ms={6} md={6} className="left">
                            <img className="" src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/whysherise.svg?updatedAt=1689503441644"
                            alt=""
                            />
                        </Col>
                        <Col ms={6} md={6}>
                            <div className="right">
                                <div className="heading">
                                    <p>Reasons for choosing us</p>
                                    <p>Why SheRise ?</p>
                                </div>
                                <div className="all-reasons">
                                <div className="reason1 reason-common">
                                    <div className="heading">
                                    <p>
                                        {" "}
                                        <FontAwesomeIcon icon={faBagShopping} />
                                        <span>  Passwordless Authentication</span>{" "}
                                    </p>
                                    </div>
                                    <div className="desc">
                                    <p>
                                        Passwordless authentication is an authentication method in
                                        which a user can log in to any particular product or system
                                        without entering (and having to remember) a password or any
                                        other knowledge-based secret. SheRise provides you with this
                                        feature which will help the users to login to their profile
                                        seamlessly by eliminating the forget password process from
                                        the system.{" "}
                                    </p>
                                    </div>
                                </div>
                                <div className="reason2 reason-common">
                                    <div className="heading">
                                    <p>
                                        {" "}
                                        <FontAwesomeIcon icon={faPersonDress} />
                                        <span> Female Oriented Jobs</span>{" "}
                                    </p>
                                    </div>
                                    <div className="desc">
                                    <p>
                                        We are the first one to come up with the onestop job portal
                                        only for the females. Here all the jobs which are listed are
                                        at first verified by our very own recruiters to eliminate
                                        false listings and we are providing the job listings under 5
                                        main criteria i.e, Conferences, Hackathons, Hirings,
                                        Internships and Workshops.{" "}
                                    </p>
                                    </div>
                                </div>
                                <div className="reason2 reason-common">
                                    <div className="heading">
                                    <p>
                                        {" "}
                                        <FontAwesomeIcon icon={faHeartCircleCheck} />
                                        <span> Supporting Underprivileged</span>{" "}
                                    </p>
                                    </div>
                                    <div className="desc">
                                    <p>
                                        Since we are non-profit organization, we are raising funds
                                        to directly help those female childrens who are not able to
                                        pursue their career in tech due to financial or any other
                                        reasons.{" "}
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Col>

                    </Row>

                    {/* ================================  What our Mentor says ?  ================================= */}
                    <Row>
                            <h2>What our Mentor says ?</h2>
                        {/* <Col ms={4} md={4}>
                            
                                <div className="mentor-img">
                                    <img src="https://sherise.vercel.app/static/media/mentor3.91b77fad3c01016e08dc.png" alt="mentor" />
                                </div>
                                
                        </Col>
                        <Col ms={4} md={4}>
                            <div className="mentor-img">
                                    <img src="https://sherise.vercel.app/static/media/mentor5.d3d29668457db3c97d8c.png" alt="mentor" />
                            </div>
                        </Col>
                        <Col ms={4} md={4}>
                                
                                <div className="mentor-img">
                                    <img src="https://sherise.vercel.app/static/media/mentor6.3a30a9072e17fcfe90e6.png" alt="mentor" />
                                </div>
                        </Col> */}


                        
                            {
                                mentor.map((item) => {
                                    return (
                                            <Col ms={4} md={4}>
                                                <div className="mentor-img">
                                                    <img src={item.img} alt={item.name} />
                                                    <p>{item.description}</p>
                                                    
                                                    <p><i>{item.name}</i></p>
                                                    
                                                </div>
                                            </Col>
                                        )
                                    }
                                    )
                                }
                                
                       

                    </Row>
                </Container>

            </section>
              
        </div>
    )
}   
export default Baner;
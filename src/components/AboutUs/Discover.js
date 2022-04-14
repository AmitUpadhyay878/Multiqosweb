import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Discover.css';

const Discover = () => {

    const [cycle] = useState(["DISCOVER", "DESIGN", "DEVELOP", "DELIVER"]);

    return (

        <div className="discover_box">
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className='d-flex mt-5'>
                            {cycle.map((e, i) => {
                                return (
                                    <div className='d-flex mx-4 align-center'><span className='newdis'>00{i + 1}</span><h4>{e}</h4></div>
                                )
                            })}
                        </div>
                    </Col>
                    <Col lg={4}></Col>
                </Row>
                <Row>
                    <Col lg={8}>

                    </Col>
                    <Col lg={4}>
                        <div>
                            <h1>DISCOVER</h1>
                            <p1>Lorem Ipsum is simply dummy.</p1>
                            <h5>We plan a series of discussion session to know the exact requirements and discover your needs We plan a series of discussion session to know the exact requirements and discover your needs We plan a series of discussion session to know the exact requirements and discover your needs</h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={7}></Col>
                    <Col lg={5}>
                        <div>
                            <h1>DISCOVER</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}
export default Discover;
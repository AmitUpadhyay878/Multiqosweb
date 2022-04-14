import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ReactComponent as MQlogo } from "../../assets/MULTIQOSICON.svg";
import "./banner.css";
const Banner = () => {
  return (
    <>

      <div class="maindiv">
        {/* <Card.Img variant="top" src="holder.js/100px180" />  */}
        <Card.Body>
          <Container>
            <Row>
              <Col sm={8}>
                <Card.Text class="text">
                  With the power of strategy, design and technology, we software
                  programmers break the records of problem solving and bring the
                  best thing on desk for clients.
                </Card.Text>
              </Col>
              <Col sm={4}>
                <span class="mqlogo">
                  <MQlogo />
                </span>
              </Col>
            </Row>
          </Container>

          <Card.Title class="title">SERVICES</Card.Title>
        </Card.Body>
      </div>
    </>
  );
};

export default Banner;

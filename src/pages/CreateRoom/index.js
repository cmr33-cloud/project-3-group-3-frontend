import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function CreateRoom() {
  return (
    <div className="d-flex align-items-center mt-5">
      <Container>
          <h1>select options</h1>
        {/* <Container className= 'customBox border border-dark'>
                    <Row>
                        <Col className="box border border-dark">1</Col>
                        <Col className="box border border-dark">2</Col>
                    </Row>
                    <Row>
                        <Col className="box border border-dark">3</Col>
                        <Col className="box border border-dark">4</Col>
                    </Row>

                </Container> */}
        <div className="row p-2 m-2">
          <div className="col options-box card">classic</div>
          <div className= "col options-box card">knockout</div>
        </div>
        <div className="row p-2 m-2">
          <div className="col options-box card">quickfire</div>
          <div className="col options-box card">custom</div>
        </div>
      </Container>
    </div>
  );
}

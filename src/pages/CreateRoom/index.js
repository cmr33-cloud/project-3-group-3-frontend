import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addConfig } from "../../actions";
export default function CreateRoom() {
    const dispatch = useDispatch()
    function handleClick(e) {
        dispatch(addConfig({gameMode: e.target.id}))
    }


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
          <div className="col options-box card" onClick={handleClick} id='classic'>classic</div>
          <div className= "col options-box card" onClick={handleClick} id='knockout'>knockout</div>
        </div>
        <div className="row p-2 m-2">
          <div className="col options-box card" onClick={handleClick} id='quickfire'>quickfire</div>
          <div className="col options-box card" onClick={handleClick} id='custom'>custom</div>
        </div>
      </Container>
    </div>
  );
}

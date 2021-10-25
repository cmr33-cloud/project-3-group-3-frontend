import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addConfig } from "../../actions";
export default function SelectCategory() {
  const dispatch = useDispatch();
  function handleClick(e) {
    dispatch(addConfig({ gameMode: e.target.id }));
    window.location.href = "/selectOptions";
  }

  return (
    <div className="d-flex align-items-center mt-5">
      <Container>
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
            
          <div className="col options-box card">
          <h1>select category</h1>
            <div className="row">
              <div className="col category-box card">category</div>
              <div className="col category-box card">category</div>
            </div>
            <div className="row">
              <div className="col category-box card">category</div>
              <div className="col category-box card">category</div>
            </div>
            <div className="row">
              <div className="col category-box card">category</div>
              <div className="col category-box card">category</div>
            </div>
            <div className="row">
            <div className = 'col category-box card'>category</div>
                  <div className = 'col category-box card'>category</div>
            </div>
            <div className="row">
            <div className = 'col category-box card'>custom</div>
                  
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
}

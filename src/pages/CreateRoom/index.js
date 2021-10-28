import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { addGamemode } from "../../actions";
export default function CreateRoom() {


    
    const [redirect, setRedirect] = useState(false)
    
    const dispatch = useDispatch()
    function handleClick(e) {
        
        dispatch(addGamemode(e.target.id))
        setRedirect(true)
        
    }



  return (
   
      !redirect ? <div className="d-flex align-items-center pt-5 game-mode-page">
      <Container>
          <h1 className="game-mode">Select Game Mode</h1>
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
          <div className="col options-box card game-mode-options-classic border-4 border-primary" onClick={handleClick} id='classic'>Classic</div>
          <div className= "col options-box card game-mode-options-knockout border-4 border-primary" onClick={handleClick} id='knockout'>Knockout</div>
        </div>
        <div className="row p-2 m-2">
          <div className="col options-box card game-mode-options-quickfire border-4 border-primary " onClick={handleClick} id='quickfire'>Quickfire</div>
          <div className="col options-box card game-mode-options-custom border-4 border-primary" onClick={handleClick} id='custom'>Custom</div>
        </div>
      </Container>
    </div> : <Redirect to='/selectCategory'/>
    
  );
}

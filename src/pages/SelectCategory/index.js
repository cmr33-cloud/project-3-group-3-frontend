import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../actions";
import { Redirect } from "react-router";
import { getQuestions } from "../../actions";
export default function SelectCategory() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false)
  
  
 
  function handleClick(e) {
    dispatch(addCategory(e.target.id ))
    setRedirect(true)
    
  }
  


  return (
    !redirect ? 
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
            
          <div className="col options-box-categories card">
          <h1>select category</h1>
            <div className="row">
              <div className="col category-box card" id='9' onClick={handleClick}>General Knowledge</div>
              <div className="col category-box card" id='17' onClick={handleClick}>Science & Nature</div>
            </div>
            <div className="row">
              <div className="col category-box card" id='18' onClick={handleClick}>Science: Computers</div>
              <div className="col category-box card" id='21' onClick={handleClick}>Sports</div>
            </div>
            <div className="row">
              <div className="col category-box card" id='27' onClick={handleClick}>Animals</div>
              <div className="col category-box card" id='22' onClick={handleClick}>Geography</div>
            </div>
            <div className="row">
            <div className = 'col category-box card ' id='23' onClick={handleClick}>History</div>
                  <div className = 'col category-box card' id='24' onClick={handleClick}>Politics</div>
            </div>
            <div className="row">
            <div className = 'col category-box card'>custom</div>
                  
            </div>
          </div>
          
        </div>
      </Container>
    </div> : <Redirect to='/selectDifficulty'/>
  );
}

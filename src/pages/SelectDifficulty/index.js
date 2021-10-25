import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addDifficulty } from "../../actions";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { getQuestions } from "../../actions";
export default function SelectDifficulty() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false)
  const category = useSelector(state => state.category)
  
  const search = (searchTerm) => dispatch(getQuestions(searchTerm))
  function handleClick(e) {
    console.log('clicked')
    dispatch(addDifficulty(e.target.id ))
    const difficulty = e.target.id
    const amount = 10;
    const type = 'multiple'
    const searchTerm = {
      amount,
      category,
      difficulty,
      type
    }
    search(searchTerm)
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
              <div className="col difficulty-box card" id='easy' onClick={handleClick}>easy</div>
              
            </div>
            <div className="row">
              <div className="col difficulty-box card" id='medium' onClick={handleClick}>medium</div>
              
            </div>
            <div className="row">
              <div className="col difficulty-box card" id='hard' onClick={handleClick}>hard</div>
            
            </div>
            <div className="row">
            <div className = 'col difficulty-box card ' id='custom' onClick={handleClick}>custom</div>
                  
            </div>
            
            
          </div>
          
        </div>
      </Container>
    </div> : <Redirect to='/lobby'/>
  );
}

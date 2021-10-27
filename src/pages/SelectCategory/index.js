import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../actions";
import { Redirect } from "react-router";
import { getQuestions } from "../../actions";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faAtlas } from '@fortawesome/free-solid-svg-icons'
import { faFlask } from '@fortawesome/free-solid-svg-icons'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'



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
          <h1>Select Category</h1>
            <div className="row">
              <div className="col category-box card border-white" id='9' onClick={handleClick}>
                <div><FontAwesomeIcon icon={faSearch} size="4x" className="search"/></div> 
                  General Knowledge</div>
              <div className="col category-box card border-white" id='17' onClick={handleClick}>
                <div><FontAwesomeIcon icon={faFlask} size="4x" className="science"/></div>
                Science</div>
            </div>
            <div className="row">
              <div className="col category-box card border-white" id='18' onClick={handleClick}>
                <div><FontAwesomeIcon icon={faLaptop} size="4x" className="computers"/></div>
                Computers</div>
              <div className="col category-box card border-white" id='21' onClick={handleClick}>
                <div><FontAwesomeIcon icon={faDumbbell} size="4x" className="sports"/></div>
              Sports</div>
            </div>
            <div className="row">
              <div className="col category-box card border-white" id='27' onClick={handleClick}>
                <div><FontAwesomeIcon className="fa-lg" icon={faPaw} size="4x" className="animals"/></div>
                Animals</div>
              <div className="col category-box card border-white" id='22' onClick={handleClick}>
                <div><FontAwesomeIcon icon={faAtlas} size="4x" className="geography"/></div>
                Geography</div>
            </div>
            <div className="row">
            <div className = 'col category-box card border-white' id='23' onClick={handleClick}>
              <div><FontAwesomeIcon icon={faHistory} size="4x" className="history"/></div>
            History</div>
                  <div className = 'col category-box card border-white' id='24' onClick={handleClick}>
                    <div><FontAwesomeIcon icon={faLandmark} size="4x" className="politics"/></div>
                    Politics</div>
            </div>
            <div className="row">
            <div className = 'col category-box card'>Custom</div>
                  
            </div>
          </div>
          
        </div>
      </Container>
    </div> : <Redirect to='/selectDifficulty'/>
  );
}

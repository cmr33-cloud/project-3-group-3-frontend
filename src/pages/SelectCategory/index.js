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
    <div className="d-flex align-items-center pt-5 game-mode-page">
      <Container>
        {/* <Container className= 'customBox border border-dark'>
                    <Row>
                        <Col className="box border border-dark">1</Col>
                        <Col className="box border border-dark">2</Col>
                    </Row>
                    <Row>
                        <Col className="box border border-dark">4</Col>
                        <Col className="box border border-dark">4</Col>
                    </Row>

                </Container> */}
        <div className="row p-2 m-2">
            
          <div className="col options-box-categories card border-4 border-primary">
          <h1 className="select-category">Select Category</h1>
            <div className="row justify-content-center">
              <div className="col-4 category-box card border-white text-search" id='9' onClick={handleClick}>
                <div><FontAwesomeIcon icon={faSearch} size="4x"/></div> 
                  General Knowledge</div>
              <div className="col-4 category-box card border-white text-science" id='17' onClick={handleClick}>
                <div><FontAwesomeIcon icon={faFlask} size="4x"/></div>
                Science</div>
            </div>
            <div className="row justify-content-center  mt-4">
              <div className="col-4 category-box card border-white text-computers" id='18' onClick={handleClick}>
                <div><FontAwesomeIcon icon={faLaptop} size="4x" /></div>
                Computers</div>
              <div className="col-4 category-box card border-white text-sports" id='21' onClick={handleClick}>
                <div><FontAwesomeIcon icon={faDumbbell} size="4x"/></div>
              Sports</div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-4 category-box card border-white text-animals" id='27' onClick={handleClick}>
                <div><FontAwesomeIcon className="fa-lg" icon={faPaw} size="4x"/></div>
                Animals</div>
              <div className="col-4 category-box card border-white text-geography" id='22' onClick={handleClick}>
                <div><FontAwesomeIcon icon={faAtlas} size="4x"/></div>
                Geography</div>
            </div>
            <div className="row justify-content-center mt-4">
            <div className = 'col-4 category-box card border-white text-history' id='23' onClick={handleClick}>
              <div><FontAwesomeIcon icon={faHistory} size="4x"/></div>
            History</div>
                  <div className = 'col-4 category-box card border-white text-politics' id='24' onClick={handleClick}>
                    <div><FontAwesomeIcon icon={faLandmark} size="4x"/></div>
                    Politics</div>
            </div>
            <div className="row justify-content-center mt-4">
            <div className = 'col-3 category-box card border-3 mt-4 custom-button border-primary rounded-3 custom-button'>Custom</div>
                  
            </div>
          </div>
          
        </div>
      </Container>
    </div> : <Redirect to='/selectDifficulty'/>
  );
}

import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addDifficulty, addSocket } from "../../actions";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { getQuestions } from "../../actions";
import { io } from "socket.io-client";
import { addRoom } from "../../actions";
export default function SelectDifficulty() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false)
  const category = useSelector(state => state.category)
  const existingSocket = useSelector(state => state.socket)
  
  const search = (searchTerm) => dispatch(getQuestions(searchTerm))
  
  
  function createRoom() {
    let socket;
    if (!existingSocket) {
      socket = io("https://quiz-app-project-3.herokuapp.com/", {
      withCredentials: true})
      socket.connect()
    }
    else {
      socket = existingSocket
    }
    
    const username = localStorage.getItem('username')
    
    const roomName = `${username}-room-${Math.floor(Math.random()*100)}`
    dispatch(addRoom(roomName))
    dispatch(addSocket(socket))
    socket.emit('create-room',roomName)
    
  }
  
  function handleClick(e) {
    console.log('clicked')
    dispatch(addDifficulty(e.target.id ))
    const difficulty = e.target.id
    const amount = 3;
    const type = 'multiple'
    const searchTerm = {
      amount,
      category,
      difficulty,
      type
    }
    search(searchTerm)
    createRoom()
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

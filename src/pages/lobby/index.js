import React, {useEffect, useRef, useState} from 'react'

import { Container, Button } from 'react-bootstrap'
import io from 'socket.io-client'
import Chat from './Chat'
import WaitingRoom from './WaitingRoom'
export default function Lobby() {
  const socketRef = useRef()
  const [currentRoom, setCurrentRoom] = useState(socketRef.current ? socketRef.current.id : "")
  
  let messages= {}

  function sendMessage(e) {
    e.preventDefault();
    console.log(`attempting to send message: ${e.target[0].value} to ${currentRoom}`)
    const message = e.target[0].value;
    socketRef.current.emit('send-message',{room: currentRoom, message: message})
  }


  function connect() {
    const username = localStorage.getItem('username')
    const socket = io("https://quiz-app-project-3.herokuapp.com/", {
      withCredentials: true})
    socket.connect()
    socketRef.current = socket;
    setTimeout(() => {
      setCurrentRoom(socketRef.current.id)
    }, 100);
    socketRef.current.emit('join-room',username)
    socketRef.current.on('send-message', payload => {
      console.log('message receieved')
      messages[payload.room] = []
      console.log('message is',payload.message, 'sent to', payload.room)
      messages[payload.room].push(payload.message)
      console.log(messages[payload.room])
    })
  }

  
  

  useEffect(() => {
    connect()
  }, [])

    
  
  function handleClick() {

  }

    return (
        <Container>
          <h1>welcome to the lobby</h1>
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
          <div className="col options-box card" id='chat'>
            <Chat roomId={socketRef.current ? socketRef.current.id : ""} messages={messages} currentRoom = {currentRoom} setCurrentRoom={setCurrentRoom} sendMessage={sendMessage}/>
          </div>
          <div className="col options-box card" id='waiting-room'>
            <WaitingRoom/>
          </div>
        </div>
        <div className="row p-2 m-2">
          <div className="col">
              <Button  id='invite'>Invite</Button>
          </div>
          <div className="col" id='start-game'>
          <Button  id='start-game' onClick = {handleClick}>start game</Button>
          </div>
        </div>
        
      </Container>
    )
}

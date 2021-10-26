import React, {useEffect, useRef, useState} from 'react'

import { Container, Button } from 'react-bootstrap'
import io from 'socket.io-client'
import Chat from './Chat'
import { useSelector } from 'react-redux'
import WaitingRoom from './WaitingRoom'
export default function Lobby() {
  const existingSocket = useSelector(state => state.socket)
  const socketRef = useRef()
  const [currentRoom, setCurrentRoom] = useState('test-room')
  const [messages, setMessages] = useState([])
  

  function sendMessage(e) {
    e.preventDefault();
    console.log(`attempting to send message: ${e.target[0].value} to ${currentRoom}`)
    const message = e.target[0].value;
    const username = localStorage.getItem('username')
    socketRef.current.emit('send-message',{username: username, room: currentRoom, message: message})
  }


  function connect() {
    let socket;
    if (!existingSocket) {
      socket = io("https://quiz-app-project-3.herokuapp.com/", {
      withCredentials: true})
      socket.connect()
    }
    else {
      socket = existingSocket
    }
    socketRef.current = socket;
    const username = localStorage.getItem('username')
    const roomName = `${username}-room`
    setCurrentRoom(roomName)
    socketRef.current.emit('create-room',roomName)
    socketRef.current.on('display-messages', payload => {
      console.log('messages receieved')
      console.log(payload.messages, payload.room)
      // setCurrentRoom(payload.room)
      setMessages(payload.messages)
      console.log(messages)
      
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
            <Chat roomId={'test-room'} messages={messages} currentRoom = {currentRoom} setCurrentRoom={setCurrentRoom} sendMessage={sendMessage}/>
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

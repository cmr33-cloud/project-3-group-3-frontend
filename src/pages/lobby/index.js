import React, {useEffect, useRef, useState} from 'react'

import { Container, Button } from 'react-bootstrap'
import io from 'socket.io-client'
import Chat from './Chat'
import { useSelector, useDispatch } from 'react-redux'
import WaitingRoom from './WaitingRoom'
import { addSocket, addRoom } from '../../actions'
export default function Lobby() {
  const dispatch = useDispatch()
  const socket = useSelector(state => state.socket)
  const room = useSelector(state => state.room)
  const socketRef = useRef()
  const [currentRoom, setCurrentRoom] = useState(room)
  const [messages, setMessages] = useState([])
  function init() {
    socket.emit('join-room',room)
  socket.on('display-messages', payload => {
    console.log('messages receieved')
    console.log(payload.messages, payload.room)
    // setCurrentRoom(payload.room)
    setMessages(payload.messages)
    console.log(messages)
  })
  }
  useEffect(() => {
    init()
  },[])
  

  function sendMessage(e) {
    e.preventDefault();
    console.log(`attempting to send message: ${e.target[0].value} to ${room}`)
    const message = e.target[0].value;
    const username = localStorage.getItem('username')
    socket.emit('send-message',{username: username, room: room, message: message})
  }



  

    
  
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
            <Chat roomId={room} messages={messages} currentRoom = {currentRoom} setCurrentRoom={setCurrentRoom} sendMessage={sendMessage}/>
          </div>
          <div className="col options-box card" id='waiting-room'>
            <WaitingRoom roomId={room}/>
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

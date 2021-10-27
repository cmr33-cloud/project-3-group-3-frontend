import React, { useEffect, useRef, useState } from "react";
import moment from 'moment'
import { Container, Button } from "react-bootstrap";
import io from "socket.io-client";
import Chat from "./Chat";
import { useSelector, useDispatch } from "react-redux";
import WaitingRoom from "./WaitingRoom";
import { addSocket, addRoom, loadQuestions } from "../../actions";
import { Redirect } from "react-router";
export default function Lobby() {
  const username = localStorage.getItem("username");
  const dispatch = useDispatch();
  const questions = useSelector((state)=>state.questions)
  const socket = useSelector((state) => state.socket);
  const room = useSelector((state) => state.room);
  const socketRef = useRef();
  const [currentRoom, setCurrentRoom] = useState(room);
  const [messages, setMessages] = useState([]);
  const [participants, setParticipants] = useState([])
  const [redirect, setRedirect] = useState(false);
  function init() {
    socket.emit("join-room", room);
    socket.on("display-messages", (payload) => {
      console.log("messages receieved");
      console.log(payload.messages, payload.room, payload.participants);
      // setCurrentRoom(payload.room)
      
      setMessages(payload.messages);
      setParticipants(payload.participants)
      console.log(messages);
      socket.on("game-start", (questions) => {
        console.log("game starting");
        dispatch(loadQuestions(questions));
        setRedirect(true)
      });
    });
  }
  useEffect(() => {
    init();
  }, []);

  function sendMessage(e) {
    e.preventDefault();
    console.log(`attempting to send message: ${e.target[0].value} to ${room}`);
    const message = e.target[0].value;
    const username = localStorage.getItem("username");
    socket.emit("send-message", {
      timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
      username: username,
      room: room,
      message: message,
      participants: participants
    });
  }

  function handleClick(e) {
    e.preventDefault();
    //check if the host started the game
    if (username === room.split("-")[0]) {
      console.log('you are the host')
      socket.emit('start-game', {questions: questions, room: room})
    }
    else {
      console.log('only the host can start the game')
      return
    }
    
  }

  return !redirect ? (
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
        <div className="col options-box card" id="chat">
          <Chat
            roomId={room}
            messages={messages}
            currentRoom={currentRoom}
            setCurrentRoom={setCurrentRoom}
            sendMessage={sendMessage}
          />
        </div>
        <div className="col options-box card" id="waiting-room">
          <WaitingRoom roomId={room} participants={participants}/>
        </div>
      </div>
      <div className="row p-2 m-2">
        <div className="col">
          <Button id="invite">Invite</Button>
        </div>
        <div className="col" id="start-game">
          <Button id="start-game" onClick={handleClick}>
            start game
          </Button>
        </div>
      </div>
    </Container>
  ) : (
    <Redirect to="/questions" />
  );
}

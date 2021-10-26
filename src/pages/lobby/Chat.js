import React, {useEffect} from "react";
import { Form, Button } from "react-bootstrap";

export default function Chat(props) {
    console.log(props.messages[props.currentRoom])
    props.setCurrentRoom(props.roomId)
    useEffect(() => {
        renderMessages()
    },[props])

    function renderMessages() {
        console.log(props.messages[props.currentRoom])
        return props.messages[props.currentRoom] &&
            props.messages[props.currentRoom].map((message, index) => (
              <p key={index}>{message}</p>
            ))}
    

  return (
    <div>
      <div className = 'messages-box'>
        {renderMessages()}
      </div>
      <Form onSubmit={props.sendMessage}>
        <Form.Group>
          <Form.Label>write a message</Form.Label>
          <Form.Control
            type="text"
            placeholder="say something..."
          ></Form.Control>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

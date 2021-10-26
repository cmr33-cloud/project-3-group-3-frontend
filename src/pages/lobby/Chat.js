import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function Chat(props) {
  const { messages, roomId } = props;

  useEffect(() => {
    renderMessages();
  }, [handleSubmit]);

  function handleSubmit(e) {
    e.preventDefault();
    props.sendMessage(e);
    if (!messages[roomId]) {
      messages[roomId] = [];
    }
    messages[roomId].push(e.target[0].value);
  }

  function renderMessages() {
    console.log(props.messages);
    return;
  }

  return (
    <div>
      <div className="messages-box">
        {props.messages &&
          props.messages.map((obj, index) => (
            <>
              <h2>{obj.username}</h2>
              <p className="m-2" key={index}>
                {obj.message}
              </p>
            </>
          ))}
      </div>
      <Form onSubmit={handleSubmit}>
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

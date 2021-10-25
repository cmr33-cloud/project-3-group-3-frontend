import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { getQuestions } from "../../actions";
import { useDispatch } from "react-redux";

export default function Testing() {

const dispatch = useDispatch();
const search = (searchTerm) => dispatch(getQuestions(searchTerm))

  function handleSubmit(e) {
    e.preventDefault();
    const searchTerm = {
      amount: e.target[0].value,
      category: e.target[1].value,
      difficulty: e.target[2].value,
      type: e.target[3].value,
    };
    search(searchTerm)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> number of questions</Form.Label>
          <Form.Control
            type="number"
            placeholder="number of questions..."
          ></Form.Control>

          <Form.Label> category </Form.Label>
          <Form.Control type="number" placeholder="e.g. 9"></Form.Control>

          <Form.Label> difficulty </Form.Label>
          <Form.Control
            type="text"
            placeholder="easy/medium/hard"
          ></Form.Control>

          <Form.Label> type </Form.Label>
          <Form.Control
            type="text"
            placeholder="multiple/boolean"
          ></Form.Control>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

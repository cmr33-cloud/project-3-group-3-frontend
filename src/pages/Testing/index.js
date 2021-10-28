import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { getQuestions } from "../../actions";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router";

export default function Testing() {
  const history = useHistory();
  const dispatch = useDispatch();
  const search = (searchTerm) => dispatch(getQuestions(searchTerm));
  //const allQuestions = (searchTerm) => dispatch(fetchQuestions(searchTerm))
  console.log(search);
  function handleSubmit(e) {
    e.preventDefault();
    // const searchTerm = {
    //   amount: e.target[0].value,
    //   category: e.target[1].value,
    //   difficulty: e.target[2].value,
    //   type: e.target[3].value,
    // };
    const searchTerm = {
      amount: 4,
      category: 9,
      difficulty: "easy",
      type: "multiple"
    };
    search(searchTerm);
    // Questions(searchTerm)
  }

  // function handleClick(){
  //   // window.location.href = 'http://localhost:3000/questions'
  //    <Redirect from='/testing' to='/questions'/>

  // }

  return (
    <div>
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

          {/* searchQ={search} */}
        </Form.Group>
      </Form>
      <br />

      <Button type="button" onClick={() => history.push("./questions")}>
        Start Quiz
      </Button>
      {/* <Redirect from='/testing' to='/questions'/> */}
    </div>
  );
}

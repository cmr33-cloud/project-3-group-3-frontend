import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { getQuestions } from "../../actions";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router";
import Select from "react-select";

export default function Testing() {
  const history = useHistory();
  const dispatch = useDispatch();
  const search = (searchTerm) => dispatch(getQuestions(searchTerm));
  //const allQuestions = (searchTerm) => dispatch(fetchQuestions(searchTerm))
  console.log(search);
  function handleSubmit(e) {
    e.preventDefault();
    const searchTerm = {
      amount: e.target[0].value,
      category: e.target[1].value,
      difficulty: e.target[2].value,
      type: e.target[3].value,
    };
    search(searchTerm);
    // Questions(searchTerm)
  }

  // function handleClick(){
  //   // window.location.href = 'http://localhost:3000/questions'
  //    <Redirect from='/testing' to='/questions'/>

  // }

  const style = { margin: "auto", width: 300 };
  const typeOptions = [
    { value: "multiple", label: "Multiple choice" },
    { value: "boolean", label: "True or False" },
  ];

  const difficultyOptions = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  const categoryOptions = [
    { value: 9, label: "General Knowledge" },
    { value: 10, label: "Entertainment: Books" },
    { value: 11, label: "Entertainment: Film" },
    { value: 12, label: "Entertainment: Music" },
    { value: 13, label: "Entertainment: Musicals & Theatres" },
    { value: 14, label: "Entertainment: Television" },
    { value: 15, label: "Entertainment: Vvalueeo Games" },
    { value: 16, label: "Entertainment: Board Games" },
    { value: 17, label: "Science & Nature" },
    { value: 18, label: "Science: Computers" },
    { value: 19, label: "Science: Mathematics" },
    { value: 20, label: "Mythology" },
    { value: 21, label: "Sports" },
    { value: 22, label: "Geography" },
    { value: 23, label: "History" },
    { value: 24, label: "Politics" },
    { value: 25, label: "Art" },
    { value: 26, label: "Celebrities" },
    { value: 27, label: "Animals" },
    { value: 28, label: "Vehicles" },
    { value: 29, label: "Entertainment: Comics" },
    { value: 30, label: "Science: Gadgets" },
    { value: 31, label: "Entertainment: Japanese Anime & Manga" },
    { value: 32, label: "Entertainment: Cartoon & Animations" }
  ];

  return (
    <div style={style}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> number of questions</Form.Label>
          <Form.Control
            type="number"
            placeholder="number of questions..."
          ></Form.Control>

          <Form.Label> Category </Form.Label>
          <Select options={categoryOptions} />

          <Form.Label> Difficulty </Form.Label>
          <Select options={difficultyOptions} />

          <Form.Label> Type </Form.Label>
          <Select options={typeOptions} />
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

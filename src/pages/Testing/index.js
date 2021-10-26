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
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value
    ); 
    const searchTerm = await {
      amount: e.target[0].value,
      category: e.target[1].value,
      difficulty: e.target[2].value,
      type: e.target[3].value,
    };
    await search(searchTerm);
    await history.push("./questions")
    // Questions(searchTerm)
  }

  // function handleClick(){
  //   // window.location.href = 'http://localhost:3000/questions'
  //    <Redirect from='/testing' to='/questions'/>

  // }

  const style = { margin: "auto", width: 400 };

  return (
    <div style={style}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Number of questions</Form.Label>
          <Form.Control
            type="number"
            placeholder="number of questions..."
          ></Form.Control>
          
          <Form.Label> Category </Form.Label>
          <Form.Select>
            <option value="9"> General Knowledge </option>
            <option value="10"> Entertainment: Books </option>
            <option value="11"> Entertainment: Film </option>
            <option value="12"> Entertainment: Music </option>
            <option value="13"> Entertainment: Musicals & Theatres </option>
            <option value="14"> Entertainment: Television </option>
            <option value="15"> Entertainment: Video Games </option>
            <option value="16"> Entertainment: Board Games </option>
            <option value="17"> Science & Nature </option>
            <option value="18"> Science: Computers </option>
            <option value="19"> Science: Mathematics </option>
            <option value="20"> Mythology </option>
            <option value="21"> Sports </option>
            <option value="22"> Geography </option>
            <option value="23"> History </option>
            <option value="24"> Politics </option>
            <option value="25"> Art </option>
            <option value="26"> Celebrities </option>
            <option value="27"> Animals </option>
            <option value="28"> Vehicles </option>
            <option value="29"> Entertainment: Comics </option>
            <option value="30"> Science: Gadgets </option>
            <option value="31"> Entertainment: Japanese Anime & Manga </option>
            <option value="32">Entertainment: Cartoon & Animations</option>
          </Form.Select>

          <Form.Label> Difficulty </Form.Label>
          <Form.Select>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Form.Select>

          <Form.Label> Type </Form.Label>
          <Form.Select>
          <option value="multiple">Multiple choice</option>
            <option value="boolean">True or False</option></Form.Select>.
          <Button type="submit">Start quiz</Button>

          {/* searchQ={search} */}
        </Form.Group>
      </Form>
      <br />
      {/* <Redirect from='/testing' to='/questions'/> */}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "../../styles/questions.css";
import { Col, Container, Row } from "react-bootstrap";

const Questions = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswer] = useState([null, null, null, null]);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=1")
      .then((res) => res.json())
      .then((def) => def.results[0])
      .then(question => {
          setQuestion(question);
        const indices = [0, 1, 2, 3];
        const sortedindices = [];
        while (indices.length > 0) {
          const index = Math.round(Math.random() * [indices.length]);
          sortedindices.push(indices[index]);
          indices.splice(index, 1);
        }
        const resps = [null, null, null, null];
        resps[sortedindices[0]] = question.correct_answer;
        resps[sortedindices[1]] = question.incorrect_answers[0];
        resps[sortedindices[2]] = question.incorrect_answers[1];
        resps[sortedindices[3]] = question.incorrect_answers[2];
        setAnswer(resps);
      });
  });

  const [width, setWidth] = useState(500);
  const [colour, setColour] = useState("lime");

  useEffect(() => {
    const scale = chroma.scale(["red", "lime"]);
    setInterval(() => {
      setWidth(width - 1);
      setColour(scale(width / 500).hex());
    }, 100);
  }, []);

//   const choose = function (e) {
//     e.preventDefault();
//     e.target.chosen = true;
//     e.target.style.backgroundColor = "blue";
//     document.querySelectorAll("box border border-dark").forEach((p) => {
//       if (p !== e.target) {
//         p.chosen = false;
//         p.style.backgroundColor = "white";
//       }
//     });
//   };

  const style = { width: String(width) + "px", backgroundColor: colour };

  return (
    <div>
      <div id="bigBar">
        <div id="littleBar" style={style}>
          <text>{question.question}</text>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <Container>
          <Container className="customBox border border-dark">
            <Row>
              <Col className="box border border-dark" onClick={choose}>
                {answers[0]}
              </Col>
              <Col className="box border border-dark" onClick={choose}>
                {answers[1]}
              </Col>
            </Row>
            <Row>
              <Col className="box border border-dark" onClick={choose}>
                {answers[2]}
              </Col>
              <Col className="box border border-dark" onClick={choose}>
                {answers[3]}
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default Questions;

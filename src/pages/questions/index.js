import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import chroma from "chroma-js";
import { Redirect } from "react-router";
import { addScore } from "../../actions";

import { addAnswer } from "../../actions";

const Questions = () => {
  const questions = useSelector((state) => state.questions);
  const noOfQuestions = questions.length-1;
  const [questNo, setQuestNo] = useState(0);
  const [answers, setAnswers] = useState([null, null, null, null]);
  const [redirect, setRedirect] = useState(false);
  const [selected, setSelected] = useState([false, null]);
  const [width, setWidth] = useState(700);
  const [colour, setColour] = useState("lime");

  const [correct, setCorrect] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [wheelHidden, setWheelHidden] = useState(true);
  const [allHidden, setAllHidden] = useState(false);

  // const fail = new Audio("./fail-buzzer-04.mp3");
  // const alarm = function(){fail.play()}

  useEffect(() => {
    if (
      selected[1] &&
      selected[1].innerText === questions[questNo].correct_answer
    ) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }, [selected]);

  const dispatch = useDispatch();
  const updateScore = (score) => dispatch(addScore(score));
  const storeScore = useSelector((state) => state.score);

  //BEGIN
  // const answer = useSelector((state) => state.answer);
  // const updateAnswer = (answer) => dispatch(addAnswer(answer));
  //END

  useEffect(() => {
    setHidden(true);
    if (questNo === noOfQuestions) {
      setAllHidden(true);
      setWheelHidden(false);
      if (correct) {
        // setScore((c) => c + 1);
        updateScore(storeScore + 1);
      }
      setTimeout(() => {
        setRedirect(true);
      }, 1000);
    }
    else{
    if (selected[0]) {
      selected[1].classList.remove('selectedStyle');
    }
    setSelected([false, null]);
    setCorrect(false);

    const indices = [0, 1, 2, 3];
    const sortedindices = [];
    while (indices.length > 0) {
      const index = Math.floor(Math.random() * [indices.length]);
      sortedindices.push(indices[index]);
      indices.splice(index, 1);
    }
    const resps = [null, null, null, null];
    resps[sortedindices[0]] = questions[questNo].correct_answer.replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é").replace(/&uuml;/g, 'ü').replace(/&Uuml;/g, 'Ü');
    resps[sortedindices[1]] = questions[questNo].incorrect_answers[0].replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é").replace(/&uuml;/g, 'ü').replace(/&Uuml;/g, 'Ü');
    resps[sortedindices[2]] = questions[questNo].incorrect_answers[1].replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é").replace(/&uuml;/g, 'ü').replace(/&Uuml;/g, 'Ü');
    resps[sortedindices[3]] = questions[questNo].incorrect_answers[2].replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é").replace(/&uuml;/g, 'ü').replace(/&Uuml;/g, 'Ü');
    setAnswers(resps);

    const scale = chroma.scale(["lime", "red"]);
    const currentTime = new Date().getTime();
    console.log(currentTime);
    const inter = setInterval(() => {
      const intervalTime = new Date().getTime() - currentTime;
      setWidth((w) => w - 7);
      setColour(scale(intervalTime / 10000).hex());
      //console.log(width)

      if (intervalTime >= 10000) {
        clearInterval(inter);
        setHidden(false);

        //check if answer is right
        if (selected[0]) {
          const answer = selected[1].innerText;
          console.log("selected answer" + answer);
          console.log("correct answer" + questions[questNo].correct_answer);
          if (correct) {
            // setScore((c) => c + 1);
            updateScore(storeScore + 1);
          }
        }
          setTimeout(() => {
            setWidth(700);
            setColour("lime");
            setQuestNo((questNo) => questNo + 1);
          }, 1000);
      }

    }, 100)
  }
  }, [questNo]);


  function dispatchScore(selected) {
    console.log(selected);
  }


  function createScore(e) {
    e.preventDefault();
    if (selected[0]) {
      
      selected[1].classList.remove('selectedStyle')
      // const answer = selected[1].innerText;
      // console.log("selcted answer" + answer);
      // console.log("correct answer" + questions[questNo].correct_answer);
      // if (
      //   selected[1].innerText === questions[questNo].correct_answer &&
      //   storeScore <= questNo
      // ) {
      //   console.log("previous score", storeScore);
      //   // setScore((c) => c + 1);
      //   updateScore(storeScore + 1);
      //   console.log("current score", storeScore);
      // }
      // console.log("final score", storeScore);
    }
    const card = e.target;
    if (selected[1] != card) {
      // card.style.backgroundColor = "#00BFFF";
      card.classList.add('selectedStyle')
      console.log(card.classList)
      const newSelected = [true, card];
      setSelected(newSelected);
      console.log(card.innerText);
      //BEGIN updateAnswer(card.innerText)
      // console.log("NEW ANSWER IS " + answer)
      // END
    } else {
      const newSelected = [false, null];
      setSelected(newSelected);
      //BEGIN updateAnswer("") END
    }
    // console.log(card.parentNode.parentNode.children)
    // console.log(card.innerText)

    // setSelected(card)

    // new from master from puja

  }
  const style = {
    width: String(width) + "px",
    backgroundColor: colour,
    height: 20,
    float: "right",
    borderRadius: "25px",
  };
  const bigStyle = {
    height: 20,
    width: 700,

    margin: "auto",
  };
  const overallStyle = {
    outline: "2px solid black",
    height: 150,
    width: 700,
    margin: "auto",
    borderRadius: "25px",
  };
  const textStyle = { float: "center", margin: "auto" };
  const answerStyle = {borderRadius: "25px"}

  return !redirect ? (
    <div className="card mt-5">
    <div hidden = {wheelHidden}>Calculating your score...</div>
    <div hidden = {allHidden}>
      <h1>
        Question {questNo + 1} of {noOfQuestions}
      </h1>
      <div  className = 'overallStyle'>
        <div id="textdiv"  className = 'bigStyle'>
          <h2>
            {questions[questNo] && questions[questNo].question.replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é").replace(/&uuml;/g, 'ü').replace(/&Uuml;/g, 'Ü')}
          </h2>
        </div>

        <div id="bigBar"  className = 'bigStyle' style={bigStyle}>
          <div id="littleBar"  className = 'style' style={style}></div>
        </div>
      </div>
      <div
        className="d-flex align-items-center"
        onClick={(e) => createScore(e)}
      >
        <Container>
          <Container className="customBox border">
            <Row>
              <Col className="box border border-dark" id="0"  className = 'answerStyle'>
                {answers[0]}
              </Col>
              <Col className="box border border-dark" id="1"  className = 'answerStyle'>
                {answers[1]}
              </Col>
            </Row>
            <Row>
              <Col className="box border border-dark" id="2"  className = 'answerStyle'>
                {answers[2]}
              </Col>
              <Col className="box border border-dark" id="3"  className = 'answerStyle'>
                {answers[3]}
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
      <text className="correctAnswerHere" hidden={hidden}>
        Correct answer: {questions[questNo].correct_answer}
      </text>
      </div>
    </div>
  ) : (
    <Redirect to="/results" />
  );
};
export default Questions;
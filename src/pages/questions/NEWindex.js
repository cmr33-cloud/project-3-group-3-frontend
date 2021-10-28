import React,{useEffect, useLayoutEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import chroma from "chroma-js";
import { Redirect } from "react-router";
import { addScore } from "../../actions";
import {addSelected} from '../../actions'

const Questions = () => {
  const questions = useSelector((state) => state.questions);
  const score = useSelector((state) => state.score)
  const selected = useSelector(state => state.selected)
  // const socket = useSelector(state => state.socket)
  const noOfQuestions = questions.length
  const [questNo, setQuestNo] = useState(0)
  //const [questions, setQuestions] = useState("");
  const [answers, setAnswers] = useState([null, null, null, null]);
  const [redirect, setRedirect] = useState(false);
  const [selected, setSelected] = useState([false,null])
  const [width, setWidth] = useState(700);
  const [colour, setColour] = useState("lime");
  // const [score, setScore] = useState(0)


  //socket
  
  function increaseScore() {
    dispatch(addScore(score+1))
  }

  const dispatch = useDispatch()
  const updateScore = (score) => dispatch(addScore(score))

  useEffect(()=>{
    
    const indices = [0, 1, 2, 3];
    const sortedindices = [];
    while (indices.length > 0) {
      const index = Math.floor(Math.random() * [indices.length]);
      sortedindices.push(indices[index]);
      indices.splice(index, 1);
    }
    const resps = [null, null, null, null];
    resps[sortedindices[0]] = questions[questNo].correct_answer;
    resps[sortedindices[1]] = questions[questNo].incorrect_answers[0];
    resps[sortedindices[2]] = questions[questNo].incorrect_answers[1];
    resps[sortedindices[3]] = questions[questNo].incorrect_answers[2];
    setAnswers(resps);
  }, [questNo])

  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     if(questNo<noOfQuestions-1)
  //         { 
  //           setQuestNo(questNo=>questNo+1)
  //         dispatch(addSelected(null))}
  //         else {setRedirect(true)}
      
  //   }, 10000);
  //   return () => {
  //     dispatchScore()
  //   };
  // }, [questNo])

  

  useEffect(() => {
    const scale = chroma.scale(["lime", "red"]);
    const currentTime = new Date().getTime()
    const inter = setInterval(() => {
      const intervalTime = new Date().getTime() - currentTime
      setWidth((w) => w - 7);
      setColour(scale(intervalTime / 10000).hex());
      //console.log(width)
      if(intervalTime>=10000){
       
        
        //check if answer is right
        dispatchScore()
        clearInterval(inter)
        
        setWidth(700)
        setColour("lime")
        if(questNo<noOfQuestions-1)
        {setQuestNo(questNo=>questNo+1)}
        else {setRedirect(true)}
      }

    }, 100);
  },[questNo])
    
  // },[questNo]);

  function dispatchScore() {
    console.log(selected)
    console.log(score)
    if (selected[0]){
      const answer = selected[2]
      console.log("selcted answer" + answer)
      console.log("correct answer" + questions[questNo].correct_answer)
      if (selected[2] == questions[questNo].correct_answer && score <= questNo+1) {
        console.log('got here')
          // setScore((c) => c + 1);
          dispatch(addScore(score+1))
          console.log(score)
      }
    }
  }

  
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

  function createScore(e){
    e.preventDefault();
    
    if (selected[0]===true){
      selected[1].style.backgroundColor = "#FFFFFF"
    }
    const card = e.target;
    // console.log(card.parentNode.parentNode.children)
    // console.log(card.innerText)
    
    // setSelected(card)
    card.style.backgroundColor = "#00BFFF"
    dispatch(addSelected([true,card,card.textContent]))
    console.log(selected[0],selected[2])
    // new from master from puja
    
    
// if(card.parentNode.parentNode.children[0].children[0]!==selected){card.parentNode.parentNode.children[0].children[0].style.backgroundColor = "white"}
// if(card.parentNode.parentNode.children[0].children[1]!==selected){card.parentNode.parentNode.children[0].children[1].style.backgroundColor = "white"}
// if(card.parentNode.parentNode.children[1].children[0]!==selected){card.parentNode.parentNode.children[1].children[0].style.backgroundColor = "white"}
// if(card.parentNode.parentNode.children[1].children[1]!==selected){card.parentNode.parentNode.children[1].children[1].style.backgroundColor = "white"}
  }
  const style = {
    width: String(width) + "px",
    backgroundColor: colour,
    height: 75,
    float: "right",
  }
  const bigStyle = {
    outline: "2px solid black",
    height: 75,
    width: 700,
    margin: "auto"
  }
  const textStyle = {float: "center", margin: "auto"}

  return (!redirect ? 
    <div className = 'card mt-5' >
      <Container className = 'mt-5'>
        <div id="bigBar" style={bigStyle}>
          <div id="littleBar" style={style}>
            <text style = {textStyle}>{questions[questNo] && questions[questNo].question}</text>
          </div>
        </div>
      </Container>
      <div className="d-flex align-items-center" onClick={(e) => createScore(e)}>
        <Container>
          <Container className="customBox border border-dark">
            <Row>
              <Col className="box border border-dark" id="0"  >{answers[0]}</Col>
              <Col className="box border border-dark" id="1"  >{answers[1]}</Col>
            </Row>
            <Row>
              <Col className="box border border-dark" id="2"  >{answers[2]}</Col>
              <Col className="box border border-dark" id="3"  >{answers[3]}</Col>
            </Row>
          </Container>
        </Container>
      </div>
      <Button onClick={increaseScore}>
        increase score
      </Button>
    </div>
   : <Redirect to='/results'/>);
}

export default Questions

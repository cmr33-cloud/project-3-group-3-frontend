// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import chroma from "chroma-js";
// import { Redirect } from "react-router";
// const Questions = () => {
//   const questions = useSelector((state) => state.questions);
//   const noOfQuestions = questions.length;
//   const [questNo, setQuestNo] = useState(0);
//   //const [questions, setQuestions] = useState("");
//   const [answers, setAnswers] = useState([null, null, null, null]);
//   const [redirect, setRedirect] = useState(false);
//   const [selected, setSelected] = useState([false, null]);
//   const [width, setWidth] = useState(700);
//   const [colour, setColour] = useState("lime");
//   const [score, setScore] = useState(0);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const indices = [0, 1, 2, 3];
//     const sortedindices = [];
//     while (indices.length > 0) {
//       const index = Math.floor(Math.random() * [indices.length]);
//       sortedindices.push(indices[index]);
//       indices.splice(index, 1);
//     }
//     const resps = [null, null, null, null];
//     resps[sortedindices[0]] = questions[questNo].correct_answer;
//     resps[sortedindices[1]] = questions[questNo].incorrect_answers[0];
//     resps[sortedindices[2]] = questions[questNo].incorrect_answers[1];
//     resps[sortedindices[3]] = questions[questNo].incorrect_answers[2];
//     setAnswers(resps);
//   }, [questNo]);

//   useEffect(() => {
//     const scale = chroma.scale(["lime", "red"]);
//     const currentTime = new Date().getTime();
//     console.log(currentTime);
//     const inter = setInterval(() => {
//       const intervalTime = new Date().getTime() - currentTime;
//       setWidth((w) => w - 7);
//       setColour(scale(intervalTime / 10000).hex());
//       //console.log(width)
//       if (intervalTime >= 10000) {
//         clearInterval(inter);
//         if (selected[1].innerText === questions[questNo].correct_answer) {
//           setScore((c) => c + 1);
//           selected[1].style.backgroundColor = "green";
//         }
//         else {selected[1].style.backgroundColor = "red";}
//         //check if answer is right

//         if (questNo < noOfQuestions - 1) {
//           setQuestNo((questNo) => questNo + 1);
//         } else {
//           setRedirect(true);
//         }
//       }
//       dispatchScore(selected);
//       setWidth(700);
//       setColour("lime");
//     }, 100);
//   }, [questNo]);

//   function dispatchScore(selected) {
//     console.log(selected);
//   }

//   //   const choose = function (e) {
//   //     e.preventDefault();
//   //     e.target.chosen = true;
//   //     e.target.style.backgroundColor = "blue";
//   //     document.querySelectorAll("box border border-dark").forEach((p) => {
//   //       if (p !== e.target) {
//   //         p.chosen = false;
//   //         p.style.backgroundColor = "white";
//   //       }
//   //     });
//   //   };

//   function createScore(e) {
//     e.preventDefault();
//     console.log(selected[0], selected[1]);
//     if (selected[0]) {
//       selected[1].style.backgroundColor = "#FFFFFF";
//     }
//     const card = e.target;
//     // console.log(card.parentNode.parentNode.children)
//     // console.log(card.innerText)

//     // setSelected(card)
//     card.style.backgroundColor = "#00BFFF";
//     setSelected([true, card]);
//     if (selected[1]) {
//       const answer = selected[1].innerText;
//       console.log(answer)
//       if (answer === questions[questNo].correct_answer) {

//         setScore((c) => c + 1);
//       }
//       console.log(score)
//   }
// }
//   const style = {
//     width: String(width) + "px",
//     backgroundColor: colour,
//     height: 75,
//     float: "right",
//   };
//   const bigStyle = {
//     outline: "2px solid black",
//     height: 75,
//     width: 700,
//     margin: "auto",
//   };
//   const textStyle = { float: "center", margin: "auto" };

//   return !redirect ? (
//     <div className="card mt-5">
//       <Container className="mt-5">
//         <div id="bigBar" style={bigStyle}>
//           <div id="littleBar" style={style}>
//             <text style={textStyle}>
//               {questions[questNo] && questions[questNo].question}
//             </text>
//           </div>
//         </div>
//       </Container>
//       <div
//         className="d-flex align-items-center"
//         onClick={(e) => createScore(e)}
//       >
//         <Container>
//           <Container className="customBox border border-dark">
//             <Row>
//               <Col className="box border border-dark" id="0">
//                 {answers[0]}
//               </Col>
//               <Col className="box border border-dark" id="1">
//                 {answers[1]}
//               </Col>
//             </Row>
//             <Row>
//               <Col className="box border border-dark" id="2">
//                 {answers[2]}
//               </Col>
//               <Col className="box border border-dark" id="3">
//                 {answers[3]}
//               </Col>
//             </Row>
//           </Container>
//         </Container>
//       </div>
//     </div>
//   ) : (
//     <Redirect to="/results" />
//   );
// }

// export default Questions;

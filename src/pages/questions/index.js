import React,{useEffect}from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getQuestions } from "../../actions";
import { Container } from "react-bootstrap";
const Questions = () => {
  const questions = useSelector((state) => state.questions);
  const noOfQuestions = questions.length;
  console.log(questions);

  const [currentQuestNo, setCurrentQuestNo] = useState(0);
  const [newAnswersArr,setNewAnswerArr] = useState(questions[currentQuestNo].incorrect_answers)
//   console.log(currentQuestNo)
//   console.log(questions[currentQuestNo].incorrect_answers.length);

  useEffect(() => {
    // let newAnswersArr = questions[currentQuestNo].incorrect_answers;
    // console.log(newAnswersArr)
    const randomNumber =Math.floor(Math.random() * newAnswersArr.length) +1;
    console.log(randomNumber);
    newAnswersArr.splice(randomNumber,0,questions[currentQuestNo].correct_answer);
    setNewAnswerArr(newAnswersArr)
    console.log(newAnswersArr);
      return () => {
        
      }
  },[])
  
      

  
  const handleClick = () => {
    if (currentQuestNo < noOfQuestions - 1) {
      const updatedQuestNo = currentQuestNo + 1;
      setCurrentQuestNo(updatedQuestNo);
    }
  };

  

  return (
    <div>
      <Container>
        <div className="card">
          <h4>
            Question {currentQuestNo + 1} / {noOfQuestions} <br />
            {questions[currentQuestNo].question}
          </h4>

          {newAnswersArr.map((answer) => {
            return <h4>{answer}</h4>;
          })}
          <button
            className="center"
            style={{ width: "100px" }}
            onClick={handleClick}
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Questions;

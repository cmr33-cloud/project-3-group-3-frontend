const initialState = {
    //questions: ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10"]
    questions: [
        {category: "General Knowledge",
        correct_answer: "Green",
        difficulty: "easy",
        incorrect_answers: ['Red', 'Blue', 'Yellow'],
        question: "When someone is inexperienced they are said to be what color?",
        type: "multiple"},
        {category: "Music",
        correct_answer: "Green",
        difficulty: "easy",
        incorrect_answers: ['Red', 'Blue', 'Yellow'],
        question: "When someone is inexperienced they are said to be what color?",
        type: "multiple"}
    ]
}

const resultsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'LOAD_QUESTIONS':
        return {...state, questions: payload }

    default:
        return state
    }
}
export default resultsReducer
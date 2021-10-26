const initialState = {
    questions: []
    // questions: [
    //     {category: "General Knowledge",
    //     correct_answer: "Green",
    //     difficulty: "easy",
    //     incorrect_answers: ['Red', 'Blue', 'Yellow'],
    //     question: "When someone is inexperienced they are said to be what color?",
    //     type: "multiple"},
    //     {category: "Music",
    //     correct_answer: "Madonna",
    //     difficulty: "easy",
    //     incorrect_answers: ['Britney Spears', 'Jennifer Lopez', 'Beyonce'],
    //     question: "Who is the best-selling female artist of all time?",
    //     type: "multiple"}
    // ]

}

const resultsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'LOAD_QUESTIONS':
        return {...state, questions: payload }

    case 'ADD_GAMEMODE':
        return {...state, gameMode: payload}

    case 'ADD_CATEGORY':
        return {...state, category: payload}

    case 'ADD_DIFFICULTY':
        return {...state, difficulty: payload}

    case 'ADD_MESSAGE':
        return {...state, messages: [...state.messages, payload]}

    case 'ADD_SOCKET':
        return {...state, socket: payload}
    
    case 'ADD_ROOM':
        return {...state, room: payload}

    default:
        return state
    }
}
export default resultsReducer
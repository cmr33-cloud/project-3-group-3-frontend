const initialState = {

    answer: "",
    score: 0,
    questions: [],

   

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

    case 'ADD_SCORE':
        return {...state, score: payload}


    case 'CHANGE_ANSWER':
        return {...state, answer: payload}


    case 'ADD_SELECTED':
        return {...state, selected: payload}

    case 'ADD_GAMEID':
        return {...state, gameId: payload}
    
    default:
        return state
    }
}
export default resultsReducer
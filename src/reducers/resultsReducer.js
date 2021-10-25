const initialState = {
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

    default:
        return state
    }
}
export default resultsReducer
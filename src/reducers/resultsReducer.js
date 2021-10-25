const initialState = {
    questions: [],
    configuration: {}
}

const resultsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'LOAD_QUESTIONS':
        return {...state, questions: payload }

    case 'ADD_CONFIG':
        return {...state, configuration: payload}

    default:
        return state
    }
}
export default resultsReducer
const initialState = {
    questions: []
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
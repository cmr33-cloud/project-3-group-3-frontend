export const loadQuestions = (questionsData) => ({
    type: 'LOAD_QUESTIONS',
    payload: questionsData
});

export const addGamemode = (payload) => ({
    type: 'ADD_GAMEMODE',
    payload
})

export const addCategory = (payload) => ({
    type: 'ADD_CATEGORY',
    payload
})


export const addDifficulty = (payload) => ({
    type: 'ADD_DIFFICULTY',
    payload
})

export const addMessage = (payload) => ({
  type: 'ADD_MESSAGE',
  payload
})
export const addSocket = (payload) => ({
  type: 'ADD_SOCKET',
  payload
})
export const addRoom = (payload) => ({
  type: 'ADD_ROOM',
  payload
})
export const addScore = (payload) => ({
  type: 'ADD_SCORE',
  payload
})






export const getQuestions = (searchTerm) => {
    return async (dispatch) => {
      try {
          console.log(searchTerm)
        const results = await fetchQuestions(searchTerm);
        await dispatch(loadQuestions(results));
      } catch (err) {
        console.warn(err.message);
      }
    };
  };

export const fetchQuestions = async (searchTerm) => {
    //need to retrieve amount, category, difficulty, type from search term
    const {amount, category, difficulty, type} = searchTerm
    console.log(amount, category, difficulty, type)
    try {
        const resp = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
        console.log(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
        const data = await resp.json();
        console.log(data)
        console.log(data.results)
        return data.results
    } catch (err) {
        throw new Error(err.message)
    }
}
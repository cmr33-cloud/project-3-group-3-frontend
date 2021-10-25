const loadQuestions = (questionsData) => ({
    type: 'LOAD_QUESTIONS',
    payload: questionsData
});

export const addConfig = (payload) => ({
    type: 'ADD_CONFIG',
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

const fetchQuestions = async (searchTerm) => {
    //need to retrieve amount, category, difficulty, type from search term
    const {amount, category, difficulty, type} = searchTerm
    console.log(amount, category, difficulty, type)
    try {
        const resp = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
        console.log()
        const data = await resp.json();
        console.log(data)
        console.log(data.results)
        return data.results
    } catch (err) {
        throw new Error(err.message)
    }
}
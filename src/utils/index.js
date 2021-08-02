import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveAnsweredQuestion
  } from "./_DATA";
  
  export const getInitialData = () => {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => ({
        users,
        questions
      })
    );
  }
  
  export const saveQuestion = (question) => {
    return Promise.all([_saveQuestion(question)]).then(([question]) => question);
  }
  
  export const saveAnsweredQuestion = (info) => {
    return _saveAnsweredQuestion(info);
  }
  
import * as actions from './../actionTypes/action-types'

export const receiveQuestions = questions => {
  return {
    type : actions.RECEIVE_QUESTIONS,
    questions
  }
}

export const addQuestion = question => {
  return {
    type : actions.ADD_QUESTION,
    question
  }
}

export const addAnsweredQuestion = answer => {
  return{
    type : actions.ADD_QUESTION_ANSWER,
    answer
  }
}

import * as actions from './../actionTypes/action-types'

export const receiveUsers = (users) => {
  return {
    type: actions.RECEIVE_USERS,
    users
  }
}

export const addQuestionToUser = (question) => {
  return {
    type: actions.ADD_QUESTION_TO_USER,
    question
  }
}

export const addAnswerToUser = (answer) => {
  return{
    type : actions.ADD_ANSWER_TO_USER,
    answer
  }
}

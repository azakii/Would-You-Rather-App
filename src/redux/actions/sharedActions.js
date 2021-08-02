import { getInitialData, saveQuestion, saveAnsweredQuestion  } from '../../utils'
import { receiveUsers, addQuestionToUser, addAnswerToUser } from './userActions'
import { receiveQuestions, addQuestion, addAnsweredQuestion } from './questionsActions'
import { showLoading, hideLoading } from 'react-redux-loading'


export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({users, questions}) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(hideLoading())
    })
  }
}

export const handleAddQuestion = (optionOneText, optionTwoText, author) => {
  return(dispatch) => {
    dispatch(showLoading())
    saveQuestion({
      optionOneText,
      optionTwoText,
      author
    }).then((question) => {
      dispatch(addQuestion(question))
      dispatch(addQuestionToUser(question))
    }).then(() => dispatch(hideLoading()))
  }
}

export const handleAddAnsweredQuestion = (authedUser, qid, answer) => {
  return(dispatch) => {
    dispatch(showLoading())
    saveAnsweredQuestion({
      authedUser,
      qid,
      answer
    }).then(() => {
      dispatch(addAnsweredQuestion({authedUser,qid,answer}))
      dispatch(addAnswerToUser({authedUser,qid,answer}))
    }).then(() => dispatch(hideLoading()))
  }
}

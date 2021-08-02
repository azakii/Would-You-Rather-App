import * as actions from "../actionTypes/action-types";

export default function users(state = {}, action) {
  switch (action.type) {

    case actions.RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case actions.ADD_QUESTION_TO_USER:
      const { question } = action;

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
    };

      case actions.ADD_ANSWER_TO_USER:
        const { answer } = action;

        return {
          ...state,
          [answer.authedUser]: {
              ...state[answer.authedUser],
              answers: {
              ...state[answer.authedUser].answers,
              [answer.qid]: answer.answer
              }
            }
          }

    default:
      return state;
  }
}

import * as actions from "../actionTypes/action-types";

const questions = (state = {}, action) => {
  switch (action.type) {
    case actions.RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case actions.ADD_QUESTION_ANSWER:
      const { answer } = action;

      return {
        ...state,
        [answer.qid]: {
          ...state[answer.qid],
          [answer.answer]: {
            ...state[answer.qid][answer.answer],
            votes: state[answer.qid][answer.answer].votes.concat([
              answer.authedUser,
            ]),
          },
        },
      };
    case actions.ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question,
      };
    default:
      return state;
  }
};

export default questions;

import * as actions from "../actionTypes/action-types";

const authedUser = (state = null, action) => {
  switch (action.type) {
    case actions.SET_AUTHED_USER:
      return action.id;
    case actions.NOT_AUTHED_USER:
      return null;
    default:
      return state;
  }
};

export default authedUser;

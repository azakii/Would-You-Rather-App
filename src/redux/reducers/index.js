import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

import authedUser from './authReducers';
import questions from './questionsReducers';
import users from './usersReducers';

const reducers = combineReducers({
  authedUser,
  loadingBar: loadingBarReducer,
  questions,
  users
});

export default reducers;

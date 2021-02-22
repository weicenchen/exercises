import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import LoadingReducer from './LoadingReducer';
import TestCaseListReducer from './TestCaseListReducer';
// import SignInReducer from './SignInReducer';

export const RootReducer = (history) => combineReducers({
  router: connectRouter(history),
  LoadingReducer,
  TestCaseListReducer,
  // SignInReducer,
});

export default RootReducer;

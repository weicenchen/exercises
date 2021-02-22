import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import StaffSkillListReducer from './StaffSkillListReducer';

export const RootReducer = (history) => combineReducers({
  router: connectRouter(history),
  StaffSkillListReducer,
});

export default RootReducer;

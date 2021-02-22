import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const testCaseListInitialState = Immutable.fromJS({
  testCaseList: null,
});

const SET_TEST_CASE_LIST = 'SET_TEST_CASE_LIST';

export const setTestCaseList = createAction(SET_TEST_CASE_LIST);

const TestCaseListReducer = handleActions(
  {
    [SET_TEST_CASE_LIST]: (state, { payload }) => (
      state.set('testCaseList', payload)
    ),
  },
  testCaseListInitialState,
);

export default TestCaseListReducer;

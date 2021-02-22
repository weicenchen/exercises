import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const loadingInitialState = Immutable.fromJS({
  isLoading: false,
});

const SET_LOADING = 'SET_LOADING';

export const setLoading = createAction(SET_LOADING);

const LoadingReducer = handleActions(
  {
    [SET_LOADING]: (state, { payload }) => (
      state.set('isLoading', payload)
    ),
  },
  loadingInitialState,
);

export default LoadingReducer;

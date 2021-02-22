import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import Immutable from 'immutable';
import thunk from 'redux-thunk';
// import todoApp from '../reducers/index';
import RootReducer from '../reducers/RootReducer';

const initialState = Immutable.Map();

// Middleware

// const logger = (store) => (next) => (action) => {
//   console.log('dispatching', action);
//   const result = next(action);
//   console.log('next state', store.getState());
//   return result;
// };

// const thunk = (store) => (next) => (action) => (typeof action === 'function'
//   ? action(store.dispatch, store.getState)
//   : next(action));

const middleWares = [
  thunk,
];

const stateTransformer = (state) => {
  if (Immutable.Iterable.isIterable(state)) return state.toJS();
  return state;
};

if (process.env.NODE_ENV === 'development') {
  middleWares.push(createLogger({ stateTransformer }));
}

const store = createStore(
  // todoApp(),
  RootReducer,
  initialState,
  applyMiddleware(
    ...middleWares,
  ),
);

export default store;

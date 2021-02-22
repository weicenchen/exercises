import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router/immutable';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import Immutable from 'immutable';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import { RootReducer } from '../reducers/RootReducer';

export const history = createBrowserHistory({
  basename: `${process.env.WEB_ROOT_NAME}`,
  getUserConfirmation: (message, callback) => callback(false),
});

const initialState = Immutable.Map();

const middleWares = [
  routerMiddleware(history),
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
  RootReducer(history),
  initialState,
  applyMiddleware(
    ...middleWares,
  ),
);

export default store;

import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';

import SignInPage from './js/SignInPage';
import PrivateRouter from './js/PrivateRouter';
import HomePage from './js/HomePage';
import store, { history } from './store/configureStore';

import '../../css/reset.css';
import '../../css/style.css';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/sign-in" component={SignInPage} />
        <PrivateRouter path="/" component={HomePage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;

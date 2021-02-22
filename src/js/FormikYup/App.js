import React from 'react';
import { Provider } from 'react-redux';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';

import store, { history } from './store/configureStore';

import StringFormPage from './js/StringFormPage';
import AddStaffPage from './js/AddStaffPage/AddStaffPage.container';
import PrivateRouter from './js/PrivateRouter.container';
import EditStaffSkillPage from './js/EditStaffSkillPage/EditStaffSkillPage';

import '../../css/reset.css';
import '../../css/style.css';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ul>
        <li>
          <Link to="/string-form">String Form</Link>
        </li>
        <li>
          <Link to="/add-staff">Add Staff Page</Link>
        </li>
        <li>
          <Link to="/edit-staff-skill">Staff Skill List Page</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/string-form" component={StringFormPage} />
        <Route path="/add-staff" component={AddStaffPage} />
        <PrivateRouter path="/edit-staff-skill" component={EditStaffSkillPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;

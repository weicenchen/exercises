import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import ReduxShop from './js/page/container/ReduxShop.container';

import '../../css/reset.css';
import '../../css/style.css';

const App = () => (
  <Provider store={store}>
    <ReduxShop />
  </Provider>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
// import App from './js/FormikYup/App';
import App from './js/RouterStyled/App';
// import MixedForm from './js/MixedForm/MixedForm';

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../mockServiceWorker.js')
//     .then(() => {
//       // registration worked
//       console.log('Registration succeeded. Scope is');
//     }).catch((error) => {
//       // registration failed
//       console.log(`Registration failed with ${error}`);
//     });
// }
// import worker from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable global-require */
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  // <MixedForm />,
  <App />,
  document.getElementById('root'),
);

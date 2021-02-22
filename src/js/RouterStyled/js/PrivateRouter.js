import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

const propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

class PrivateRouter extends React.Component {
  renderPageFunc = (prop) => {
    const {
      component: Home,
    } = this.props;

    const isSignIn = JSON.parse(localStorage.getItem('userName')); // According to localStorage to determine whether there is login

    if (isSignIn) {
      return (
        <Home
          history={prop.history}
          userName={isSignIn}
          replaceToSignInPage={this.handleReplaceToSignInPage}
        />
      );
    }
    return (
      <Redirect to="/sign-in" />
    );
  }

  render() {
    const {
      path,
    } = this.props;
    return (
      <Route
        path={path}
        render={(prop) => this.renderPageFunc(prop)}
      />
    );
  }
}

PrivateRouter.propTypes = propTypes;

export default PrivateRouter;

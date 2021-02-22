import React from 'react';
import PropTypes from 'prop-types';

import LoadingOverlay from 'react-loading-overlay';
import ShowAllProductHeader from './ShowAllProductHeader';
import ShowAllProductContent from './container/ShowAllProductContent.container';
import SignInPage from './container/SignInPage.container';

function ReduxShop(props) {
  const { isLoading, isSignInPageShow } = props;
  if (!isSignInPageShow) {
    return (
      <LoadingOverlay
        active={isLoading}
        spinner
        text="Loading..."
      >
        <ShowAllProductHeader />
        <ShowAllProductContent />
      </LoadingOverlay>
    );
  }
  return (
    <SignInPage />
  );
}

ReduxShop.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isSignInPageShow: PropTypes.bool.isRequired,
};

export default ReduxShop;

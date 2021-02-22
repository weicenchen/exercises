import React from 'react';
import PropTypes from 'prop-types';

function UserName(props) {
  const {
    isSignIn, userName, handleSignInPageOpen, handleSignOutModal,
  } = props;

  const openSignInPage = (isShow) => {
    handleSignInPageOpen(isShow);
  };

  const openSignOutModal = (isShow) => {
    handleSignOutModal(isShow);
  };
  if (!isSignIn) {
    return (
      <button type="button" onClick={() => openSignInPage(true)}>SignIn</button>
    );
  }
  return (
    <span>
      <span>
        Hi,
        {' '}
        {userName}
      </span>
      <button type="button" onClick={() => openSignOutModal(true)}>SignOut</button>
    </span>
  );
}

UserName.propTypes = {
  isSignIn: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  handleSignInPageOpen: PropTypes.func.isRequired,
  handleSignOutModal: PropTypes.func.isRequired,
};

export default UserName;

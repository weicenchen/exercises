import React from 'react';
import PropTypes from 'prop-types';

function SignOutModal(props) {
  const {
    handleSignOut,
    handleQueryProductListAction,
    handleClearCartList,
    handleClearProductModal,
    handleSignOutModal,
  } = props;

  const signOut = () => {
    handleSignOut();
    handleClearProductModal();
    handleQueryProductListAction();
    handleClearCartList();
  };

  const closeSignOutModal = (isShow) => {
    handleSignOutModal(isShow);
  };

  return (
    <div className="sign-out-modal modal-fix">
      <h2 className="title">Are you sure to sign out?</h2>
      <button type="button" onClick={signOut}>YES</button>
      <button type="button" onClick={() => closeSignOutModal(false)}>CANCEL</button>
    </div>
  );
}

SignOutModal.propTypes = {
  handleSignOut: PropTypes.func.isRequired,
  handleQueryProductListAction: PropTypes.func.isRequired,
  handleClearCartList: PropTypes.func.isRequired,
  handleClearProductModal: PropTypes.func.isRequired,
  handleSignOutModal: PropTypes.func.isRequired,
};

export default SignOutModal;

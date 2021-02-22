import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Color from './Color';

const SignOutModalWrapper = styled.div`
  position: fixed;
  top: 15%;
  bottom: 15%;
  left: 20%;
  right: 20%;
  text-align: center;
  padding-top: 10%;
  line-height: 200%;
  background: ${Color.gray};
  color: ${Color.citrus};
`;

const PromptText = styled.h2`
  font-size: 1.5em;
  margin-bottom: 1.5em;
`;

const SignOutButton = styled.button`
  padding: 0.7em 1.2em;
  margin-left: 0.4em;
  background: #fff;
  color: ${Color.gray};
  font-size: 1em;
  border: none;
  margin: 0 1.5em;
  :hover {
    color: ${Color.citrus};
  }
`;

const CancelButton = styled(SignOutButton)`
  background: ${Color.citrus};
  color: ${Color.gray};
  :hover {
    color: #fff;
  }
`;

const propTypes = {
  handleSignOutModal: PropTypes.func.isRequired,
  replaceToSignInPage: PropTypes.func.isRequired,
};

function SignOutModal(props) {
  const {
    handleSignOutModal,
    replaceToSignInPage,
  } = props;

  const closeSignOutModal = () => {
    handleSignOutModal();
  };

  const signOut = () => {
    closeSignOutModal();
    replaceToSignInPage();
    localStorage.removeItem('userName');
  };

  return (
    <SignOutModalWrapper>
      <PromptText>Are you sure to sign out?</PromptText>
      <SignOutButton type="button" onClick={signOut}>YES</SignOutButton>
      <CancelButton type="button" onClick={closeSignOutModal}>CANCEL</CancelButton>
    </SignOutModalWrapper>
  );
}

SignOutModal.propTypes = propTypes;

export default SignOutModal;

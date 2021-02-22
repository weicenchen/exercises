import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Color from './Color';

import SignOutModal from './SignOutModal';

const UserNameWrapper = styled.div`
  position: fixed;
  bottom: 2em;
  left: 2em;
  z-index: 10;
`;

const Name = styled.span`
  padding: 15px;
  font-weight: bold;
  color: ${Color.gray};
  font-size: 1.3em;
`;

const SignOutButton = styled.button`
  padding: 1em 2em;
  margin-left: 0.4em;
  background: ${Color.gray};
  color: white;
  font-size: 1em;
  border: none;
  :hover {
    background: rgba(255,255,255,0.7);
    border: 1px solid ${Color.gray};
    color: ${Color.gray};
  }
`;

const propTypes = {
  userName: PropTypes.string.isRequired,
  handleReplaceToSignInPage: PropTypes.func.isRequired,
};

class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignOutModalShow: false,
    };
  }

  handleSignOutModal = () => {
    const { isSignOutModalShow } = this.state;
    this.setState({ isSignOutModalShow: !isSignOutModalShow });
  }

  render() {
    const { isSignOutModalShow } = this.state;
    const { userName, handleReplaceToSignInPage } = this.props;

    return (
      <UserNameWrapper>
        {isSignOutModalShow
          && (
            <SignOutModal
              handleSignOutModal={this.handleSignOutModal}
              replaceToSignInPage={handleReplaceToSignInPage}
            />
          )}
        <Name>
          {`Hi, ${userName}`}
        </Name>
        <SignOutButton type="button" onClick={this.handleSignOutModal}>SignOut</SignOutButton>
      </UserNameWrapper>
    );
  }
}

UserName.propTypes = propTypes;

export default UserName;

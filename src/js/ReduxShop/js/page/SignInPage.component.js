import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SignInPageWrapper = styled.div`
  text-align: center;
  margin-top: 10%;
  line-height: 300%;
`;

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  inputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  signIn = (value, isShow) => {
    const { handleUserName, handleClearCartList } = this.props;
    this.closeSignInPage(isShow);
    if (value !== '') {
      handleUserName(value);
      handleClearCartList();
    }
  }

  closeSignInPage = (isShow) => {
    const { handleSignInPageClose, handleClearProductModal } = this.props;
    handleSignInPageClose(isShow);
    handleClearProductModal();
  };

  render() {
    const { inputValue } = this.state;
    return (
      <SignInPageWrapper>
        <h1 className="title">Sign In Page</h1>
        <input
          type="text"
          placeholder="Fill your name"
          onChange={this.inputChange}
          value={inputValue}
        />
        <div>
          <button type="button" onClick={() => this.signIn(inputValue, false)}>Sign In</button>
          <button type="button" onClick={() => this.closeSignInPage(false)}>Cancel</button>
        </div>
      </SignInPageWrapper>
    );
  }
}

SignInPage.propTypes = {
  handleUserName: PropTypes.func.isRequired,
  handleClearCartList: PropTypes.func.isRequired,
  handleSignInPageClose: PropTypes.func.isRequired,
  handleClearProductModal: PropTypes.func.isRequired,
};

export default SignInPage;

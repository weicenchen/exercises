import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Color from './Color';

const SignInPageWrapper = styled.div`
  text-align: center;
  height: 100vh;
  width: 100%;
  background: ${Color.citrus};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInBlock = styled.div`
  padding: 8% 0;
  width: 30%;
  height: 25%;
  background: ${Color.gray};
  color: ${Color.citrus};
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
`;

const UserNameInput = styled.input`
  font-size: 1em;
  padding: 0.5em;
  display: block;
  width: 50%;
  margin: 3em auto;
  border: none;
`;

const SignInButton = styled(UserNameInput)`
  width: 53%;
  margin: 0 auto;
  padding: 1em;
  background: ${Color.citrus};
  color: ${Color.gray};
  font-weight: bold;
  :hover {
    background: white;
    color: ${Color.citrus};
  }
`;

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

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

  signIn = (value) => {
    const { history } = this.props;
    if (value !== '') {
      localStorage.setItem('userName', JSON.stringify(value));
      history.push('/');
    }
  }

  render() {
    const { inputValue } = this.state;

    return (
      <SignInPageWrapper>
        <SignInBlock>
          <Title>
            Sign In
          </Title>
          <UserNameInput
            type="text"
            placeholder="Fill your name"
            onChange={this.inputChange}
            value={inputValue}
          />
          <SignInButton as="button" type="button" onClick={() => this.signIn(inputValue)}>
            Submit
          </SignInButton>
        </SignInBlock>
      </SignInPageWrapper>
    );
  }
}

SignInPage.propTypes = propTypes;

export default SignInPage;

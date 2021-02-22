import React from 'react';
import styled from 'styled-components';

import Color from './Color';

const WelcomePageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const WelcomeContainer = styled.div`
  margin: 0 auto;
  width: 18em;
  height: 18em;
  line-height: 18em;
  color: #fff;
  border-radius: 50%;
  background: ${Color.citrus};
  text-align: center;
  margin-bottom: 3em;
`;

const WelcomeText = styled.span`
  font-size: 2em;
`;

function Welcome() {
  return (
    <WelcomePageWrapper>
      <WelcomeContainer>
        <WelcomeText>Welcome !</WelcomeText>
      </WelcomeContainer>
    </WelcomePageWrapper>

  );
}

export default Welcome;

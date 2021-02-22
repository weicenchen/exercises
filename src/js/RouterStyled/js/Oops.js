import React from 'react';
import styled from 'styled-components';

import Color from './Color';

const OopsPageWrapper = styled.div`
  height: 100vh;
  background: ${Color.citrus};
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
`;

const OopsContainer = styled.div`
  margin: 0 auto;
  width: 20em;
  height: 20em;
  line-height: 20em;
  color: #fff;
  border-radius: 50%;
  background: ${Color.gray};
  text-align: center;
`;

const OopsText = styled.span`
  font-size: 2em;
`;

function Oops() {
  return (
    <OopsPageWrapper>
      <OopsContainer>
        <OopsText>Oops !</OopsText>
      </OopsContainer>
    </OopsPageWrapper>
  );
}

export default Oops;

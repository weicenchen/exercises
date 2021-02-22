import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Color from '../Color';

const propTypes = {
  itemIn: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    lastUpdate: PropTypes.string,
  }).isRequired,
};

const StyledFormItem = styled.tr`
  background: 'white';
  :nth-child(even) {
    background: ${Color.citrus};
  }
  color: ${Color.gray};
  font-weight: lighter;
`;

const StyledFormTd = styled.td`
  padding-left: 1em;
`;

function AnnouncementFormItem(props) {
  const { itemIn } = props;
  return (
    <StyledFormItem>
      <StyledFormTd>{itemIn.type}</StyledFormTd>
      <td>{itemIn.title}</td>
      <td>{itemIn.lastUpdate}</td>
    </StyledFormItem>
  );
}

AnnouncementFormItem.propTypes = propTypes;

export default AnnouncementFormItem;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';

import Color from '../Color';

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

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

const propTypes = {
  itemIn: PropTypes.shape({
    visibility: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    owner: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

function TestCaseFormItem(props) {
  const { itemIn } = props;
  const { url } = useRouteMatch();
  const urlOwner = `${url}?owner=${itemIn.owner}`;
  return (
    <StyledFormItem>
      <StyledFormTd>
        <StyledLink to={urlOwner}>{itemIn.visibility}</StyledLink>
      </StyledFormTd>
      <td>
        <StyledLink to={urlOwner}>{itemIn.category}</StyledLink>
      </td>
      <td>
        <StyledLink to={urlOwner}>{itemIn.title}</StyledLink>
      </td>
      <td>
        <StyledLink to={urlOwner}>{itemIn.owner}</StyledLink>
      </td>
      <td>
        <StyledLink to={urlOwner}>{itemIn.date}</StyledLink>
      </td>
    </StyledFormItem>

  );
}

TestCaseFormItem.propTypes = propTypes;

export default TestCaseFormItem;

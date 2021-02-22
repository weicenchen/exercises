import React from 'react';
import styled from 'styled-components';
import {
  Link,
  useLocation,
} from 'react-router-dom';

import Color from '../Color';

const AnnouncementLinkList = styled.ul`
  margin: 15px 20px;
  padding-left: 10px;
  border-left: 3px solid ${Color.gray};
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 10px;
  color: ${Color.gray};
  font-size: 1.3em;
  :hover {
    background: ${Color.gray};
    color: ${Color.citrus};
  }
`;

function AnnouncementList() {
  const location = useLocation();
  if (location.pathname === '/announcement/all' || location.pathname === '/announcement/driver') {
    return (
      <AnnouncementLinkList>
        <li>
          <StyledLink to="/announcement/all">
            All
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/announcement/driver">
            Driver
          </StyledLink>
        </li>
      </AnnouncementLinkList>
    );
  }
  return null;
}

export default AnnouncementList;

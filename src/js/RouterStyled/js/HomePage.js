import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import UserName from './UserName';
import Welcome from './Welcome';
import TestCase from './TestCase/TestCasePage.container';
import Announcement from './Announcement/Announcement';
import AnnouncementList from './Announcement/AnnouncementList';
import Oops from './Oops';

import Color from './Color';

const HomeWrapper = styled.div`
  display:flex;
  height: 100vh;
`;

const LinkList = styled.ul`
  background: ${Color.citrus};
  width: 23%;
  padding: 2em;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 15px;
  font-weight: bold;
  color: ${Color.gray};
  font-size: 1.3em;
  :hover {
    background: ${Color.gray};
    color: ${Color.citrus};
  }
`;

const SwitchContent = styled.div`
  width: 77%;
  color: ${Color.gray};
  padding: 2em;
  font-size: 1.3em;
`;

const propTypes = {
  userName: PropTypes.string.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

function HomePage(props) {
  const { userName } = props;

  const replaceToSignInPage = () => {
    const { history } = props;
    history.replace('/sign-in');
  };

  return (
    <HomeWrapper>
      <LinkList>
        <li>
          <StyledLink to="/">
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/test-case">
            Test case
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/announcement">Announcement</StyledLink>
        </li>
        <AnnouncementList />
        <UserName userName={userName} handleReplaceToSignInPage={replaceToSignInPage} />
      </LinkList>
      <SwitchContent>
        <Switch>
          <Route exact strict path="/" component={Welcome} />
          <Route path="/test-case" component={TestCase} />
          <Route path="/announcement" component={Announcement} />
          <Route component={Oops} />
        </Switch>
      </SwitchContent>
    </HomeWrapper>
  );
}

HomePage.propTypes = propTypes;

export default HomePage;

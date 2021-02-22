import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import AnnouncementForm from './AnnouncementForm';

const propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

function Announcement(props) {
  const { match } = props;
  return (
    <Switch>
      <Redirect exact strict from={match.path} to={`${match.path}/all`} />
      <Route path={`${match.path}/:id`} component={AnnouncementForm} />
    </Switch>
  );
}

Announcement.propTypes = propTypes;

export default Announcement;

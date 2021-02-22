import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  Route,
} from 'react-router-dom';
import Oops from '../Oops';

import AnnouncementFormItem from './AnnouncementFormItem';

import Color from '../Color';

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1.5em;
`;

const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  line-height: 2.2em;
`;

const StyledFormHead = styled.tr`
  border-bottom: 2px solid ${Color.citrus};
`;

const StyledFormTh = styled.th`
  padding-left: 1em;
`;

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    key: PropTypes.string,
  }).isRequired,
};

class AnnouncementForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcementList: [],
    };
  }

  componentDidMount() {
    this.fetchAnnouncement();
  }

  fetchAnnouncement = () => {
    fetch('/announcement', { method: 'GET' })
      .then((response) => response.json()).then((res) => {
        this.setState({ announcementList: res.announcement });
      })
      .catch((error) => {
        console.log(`error${error}`);
      })
      .finally(() => {
        console.log('fetch finally');
      });
  }

  createDriverList = () => {
    const announcementDriverList = [];
    const { announcementList } = this.state;
    announcementList.forEach((item) => {
      if (item.type === 'Driver') {
        announcementDriverList.push(item);
      }
    });
    return announcementDriverList;
  }

  renderFormBody = (list) => {
    let formBodyElement;
    if (list.length === 0) {
      formBodyElement = (
        <tr>
          <td colSpan="3">Loading.</td>
        </tr>
      );
    } else {
      formBodyElement = list.map((item) => (
        <AnnouncementFormItem
          key={item.lastUpdate}
          itemIn={item}
        />
      ));
    }
    return formBodyElement;
  }

  renderAnnouncementForm = () => {
    const { match } = this.props;
    const { announcementList } = this.state;
    let formBodyElement;
    if (match.params.id === 'all') {
      formBodyElement = this.renderFormBody(announcementList);
    } if (match.params.id === 'driver') {
      formBodyElement = this.renderFormBody(this.createDriverList());
    }
    return (
      <tbody>
        {formBodyElement}
      </tbody>
    );
  }

  render() {
    const { match, location } = this.props;

    if (location.key) {
      return (
        <div>
          <Title>
            {`Announcement / ${match.params.id}`}
          </Title>
          <StyledTable>
            <thead>
              <StyledFormHead>
                <StyledFormTh>
                  Type
                </StyledFormTh>
                <th>Title</th>
                <th>LastUpdate</th>
              </StyledFormHead>
            </thead>
            {this.renderAnnouncementForm()}
          </StyledTable>
        </div>
      );
    }
    return (
      <Route component={Oops} />
    );
  }
}

AnnouncementForm.propTypes = propTypes;

export default AnnouncementForm;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoadingOverlay from 'react-loading-overlay';

import SingleTestCaseModal from './SingleTestCaseModal.container';
import TestCaseFormItem from './TestCaseFormItem';

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
  testCaseList: PropTypes.arrayOf(
    PropTypes.shape({
      visibility: PropTypes.string,
      category: PropTypes.string,
      title: PropTypes.string,
      owner: PropTypes.string,
      date: PropTypes.string,
    }),
  ),
  handleQueryTestCaseListAction: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

const defaultProps = {
  testCaseList: null,
};

class TestCasePage extends React.Component {
  componentDidMount() {
    const { testCaseList, handleQueryTestCaseListAction } = this.props;
    if (!testCaseList) {
      handleQueryTestCaseListAction();
    }
  }

  renderTestCaseForm = () => {
    const { testCaseList } = this.props;
    let formBodyElement;

    const tempTestCaseList = testCaseList === null ? null : testCaseList.toJS();

    if (tempTestCaseList === null) {
      formBodyElement = (
        <tr>
          <td colSpan="5">Loading.</td>
        </tr>
      );
    } else if (tempTestCaseList.length === 0) {
      formBodyElement = (
        <tr>
          <td colSpan="5">There is nothing.</td>
        </tr>
      );
    } else {
      formBodyElement = tempTestCaseList.map((item) => (
        <TestCaseFormItem
          key={item.owner}
          itemIn={item}
        />
      ));
    }
    return (
      <tbody>
        {formBodyElement}
      </tbody>
    );
  }

  closeSingleTestCaseModal = () => {
    const { history } = this.props;
    history.replace('/test-case');
  };

  render() {
    const { isLoading, location, testCaseList } = this.props;
    return (
      <LoadingOverlay
        active={isLoading}
        spinner
        text="Loading..."
      >
        {location.search && testCaseList && <SingleTestCaseModal search={location.search} onModalClose={this.closeSingleTestCaseModal} />}
        <Title>TestCase</Title>
        <StyledTable>
          <thead>
            <StyledFormHead>
              <StyledFormTh>Visibility</StyledFormTh>
              <th>Category</th>
              <th>Title</th>
              <th>Owner</th>
              <th>Date</th>
            </StyledFormHead>
          </thead>
          {this.renderTestCaseForm()}
        </StyledTable>
      </LoadingOverlay>
    );
  }
}

TestCasePage.propTypes = propTypes;

TestCasePage.defaultProps = defaultProps;

export default TestCasePage;

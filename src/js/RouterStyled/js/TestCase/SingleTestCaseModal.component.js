import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Redirect,
} from 'react-router-dom';

import Color from '../Color';

const SingleTestCaseModalWrapper = styled.div`
  position: fixed;
  top: 15%;
  bottom: 15%;
  left: 20%;
  right: 20%;
  z-index: 30;
  text-align: center;
  padding-top: 5%;
  line-height: 200%;
  background: ${Color.gray};
  color: ${Color.citrus};
`;

const PromptText = styled.p`
  font-size: 1.5em;
  line-height: 1.5em;
`;

const SignOutButton = styled.button`
  padding: 0.7em 1.2em;
  margin-left: 0.4em;
  background: #fff;
  color: ${Color.gray};
  font-size: 1em;
  border: none;
  margin: 0 1.5em;
  :hover {
    color: ${Color.citrus};
  }
`;

const CloseButton = styled(SignOutButton)`
  background: ${Color.citrus};
  color: ${Color.gray};
  :hover {
    color: #fff;
  }
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
  onModalClose: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

const defaultProps = {
  testCaseList: null,
};

function SingleTestCaseModal(props) {
  const {
    search,
    onModalClose,
    testCaseList,
  } = props;

  const owner = search.substr(7);

  const isOwner = (item) => item.owner === owner;

  const findTestCaseItemByOwner = testCaseList.toJS().find(isOwner);

  const closeSingleTestCaseModal = () => {
    onModalClose();
  };

  if (findTestCaseItemByOwner) {
    return (
      <SingleTestCaseModalWrapper>
        <PromptText>{`Owner : ${owner}`}</PromptText>
        <PromptText>{`Visibility : ${findTestCaseItemByOwner.visibility}`}</PromptText>
        <PromptText>{`Category : ${findTestCaseItemByOwner.category}`}</PromptText>
        <PromptText>{`Date : ${findTestCaseItemByOwner.date}`}</PromptText>
        <CloseButton type="button" onClick={closeSingleTestCaseModal}>CLOSE</CloseButton>
      </SingleTestCaseModalWrapper>
    );
  }
  return (<Redirect to="oops" />);
}

SingleTestCaseModal.propTypes = propTypes;

SingleTestCaseModal.defaultProps = defaultProps;

export default SingleTestCaseModal;

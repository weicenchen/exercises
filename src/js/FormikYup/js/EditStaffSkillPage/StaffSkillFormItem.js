import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFormItem = styled.tr`
  :nth-child(even) {
    background: gray;
    color: white;
  }
  font-weight: lighter;
`;

const StyledFormTd = styled.td`
  padding-left: 1em;
`;

const propTypes = {
  itemIn: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        skill: PropTypes.string,
      }),
    ),
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleModalDetail: PropTypes.func.isRequired,
};

function StaffSkillFormItem(props) {
  const { itemIn, handleModalDetail, index } = props;

  const renderSkillTag = (skillList) => {
    let tagGroupElement;
    if (skillList.length === 0) {
      tagGroupElement = null;
    } else {
      tagGroupElement = skillList.map((item) => (
        <button
          type="button"
          key={item.skill}
        >
          {item.skill}
        </button>
      ));
    }
    return (
      <div>
        {tagGroupElement}
      </div>
    );
  };

  const openModal = (isOpen, item, indexNumber) => {
    handleModalDetail(isOpen, item, indexNumber);
  };

  return (
    <StyledFormItem>
      <StyledFormTd>{itemIn.name}</StyledFormTd>
      <td>{itemIn.email}</td>
      <td>{itemIn.age}</td>
      <td>
        {renderSkillTag(itemIn.skills)}
      </td>
      <td>
        <button type="button" onClick={() => openModal(true, itemIn, index)}>Edit</button>
      </td>
    </StyledFormItem>
  );
}

StaffSkillFormItem.propTypes = propTypes;

export default StaffSkillFormItem;

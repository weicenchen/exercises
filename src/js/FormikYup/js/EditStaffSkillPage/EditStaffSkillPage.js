import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import StaffSkillFormItem from './StaffSkillFormItem';
import StaffSkillItemModal from './StaffSkillItemModal.container';

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
  border-bottom: 2px solid gray;
`;

const StyledFormTh = styled.th`
  padding-left: 1em;
`;

const propTypes = {
  staffSkillList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          skill: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
};

class EditStaffSkillPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      modalItem: {},
      modalIndex: null,
    };
  }

  handleModalDetail = (isOpen, item = {}, index = null) => {
    this.setState({
      isModalOpen: isOpen,
      modalItem: item,
      modalIndex: index,
    });
  }

  renderStaffSkillForm = () => {
    const { staffSkillList } = this.props;
    let formBodyElement;
    if (staffSkillList.length > 0) {
      formBodyElement = staffSkillList.map((item, index) => (
        <StaffSkillFormItem
          key={item.name}
          itemIn={item}
          index={index}
          handleModalDetail={this.handleModalDetail}
        />
      ));
    }
    return (
      <tbody>
        {formBodyElement}
      </tbody>
    );
  }

  render() {
    const { isModalOpen, modalItem, modalIndex } = this.state;

    return (
      <div>
        {isModalOpen
          && (
            <StaffSkillItemModal
              handleModalDetail={this.handleModalDetail}
              modalItem={modalItem}
              modalIndex={modalIndex}
            />
          )}
        <Title>
          Staff Skill List
        </Title>
        <StyledTable>
          <thead>
            <StyledFormHead>
              <StyledFormTh>
                Name
              </StyledFormTh>
              <th>Email</th>
              <th>Age</th>
              <th>Skills</th>
            </StyledFormHead>
          </thead>
          {this.renderStaffSkillForm()}
        </StyledTable>
      </div>
    );
  }
}

EditStaffSkillPage.propTypes = propTypes;

export default EditStaffSkillPage;

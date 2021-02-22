import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

const propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
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

function PrivateRouter(props) {
  const {
    component: EditStaffSkillPage,
    staffSkillList,
    path,
  } = props;

  const renderPageFunc = () => {
    if (staffSkillList.length === 0) {
      return (
        <Redirect to="/add-staff" />
      );
    }
    return (
      <EditStaffSkillPage
        staffSkillList={staffSkillList}
      />
    );
  };

  return (
    <Route
      path={path}
      render={() => renderPageFunc()}
    />
  );
}

PrivateRouter.propTypes = propTypes;

export default PrivateRouter;

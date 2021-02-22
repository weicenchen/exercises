import { connect } from 'react-redux';
import Immutable from 'immutable';

import { addToStaffSkillList } from '../../reducers/StaffSkillListReducer';

import AddStaffPage from './AddStaffPage.component';

const mapDispatchToProps = (dispatch) => ({
  handleAddToStaffSkillList: (staffSkillItems) => {
    dispatch(addToStaffSkillList(Immutable.fromJS(staffSkillItems)));
  },
});

export default connect(null, mapDispatchToProps)(AddStaffPage);

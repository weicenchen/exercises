import { connect } from 'react-redux';
import Immutable from 'immutable';

import { editStaffSkill } from '../../reducers/StaffSkillListReducer';

import StaffSkillItemModal from './StaffSkillItemModal.component';

const mapDispatchToProps = (dispatch) => ({
  handleEditStaffSkillList: (index, item) => {
    dispatch(editStaffSkill(index, Immutable.fromJS(item)));
  },
});

export default connect(null, mapDispatchToProps)(StaffSkillItemModal);

import { connect } from 'react-redux';

import PrivateRouter from './PrivateRouter.component';

const mapStateToProps = (state) => ({
  staffSkillList: state.getIn(['StaffSkillListReducer', 'staffSkillList']).toJS(),
});

export default connect(mapStateToProps)(PrivateRouter);

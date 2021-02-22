import { connect } from 'react-redux';

import SingleTestCaseModal from './SingleTestCaseModal.component';

const mapStateToProps = (state) => ({
  testCaseList: state.getIn(['TestCaseListReducer', 'testCaseList']),
});

export default connect(mapStateToProps)(SingleTestCaseModal);

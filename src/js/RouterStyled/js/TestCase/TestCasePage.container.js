import { connect } from 'react-redux';

import { queryTestCaseListAction } from '../../actions/queryTestCaseListAction';

import TestCasePage from './TestCasePage.component';

const mapStateToProps = (state) => ({
  testCaseList: state.getIn(['TestCaseListReducer', 'testCaseList']),
  isLoading: state.getIn(['LoadingReducer', 'isLoading']),
});

const mapDispatchToProps = (dispatch) => ({
  handleQueryTestCaseListAction: () => {
    dispatch(queryTestCaseListAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TestCasePage);

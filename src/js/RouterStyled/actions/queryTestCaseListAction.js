import Immutable from 'immutable';
import { setLoading } from '../reducers/LoadingReducer';
import { setTestCaseList } from '../reducers/TestCaseListReducer';

export const queryTestCaseListAction = () => (dispatch) => {
  // const productListFromState = state.getIn(['ProductListReducer', 'productList']);
  dispatch(setLoading(true));
  fetch('/test_case', { method: 'GET' })
    .then((response) => response.json()).then((res) => {
      dispatch(setTestCaseList(Immutable.fromJS(res.testCaseList)));
    })
    .catch((error) => {
      console.log(`error${error}`);
    })
    .finally(() => {
      dispatch(setLoading(false));
      console.log('fetch finally');
    });
};

export default queryTestCaseListAction;

import { connect } from 'react-redux';
import Immutable from 'immutable';

import { toggleUserName, toggleSignInPage } from '../../../reducers/SignInReducer';
import { clearCartList } from '../../../reducers/CartReducer';
import { clearModalProduct } from '../../../reducers/SingleProductReducer';

import SignInPage from '../SignInPage.component';

const mapDispatchToProps = (dispatch) => ({
  handleUserName: (name) => {
    dispatch(toggleUserName(Immutable.fromJS(name)));
  },
  handleSignInPageClose: (isShow) => {
    dispatch(toggleSignInPage(isShow));
  },
  handleClearCartList: () => {
    dispatch(clearCartList());
  },
  handleClearProductModal: () => {
    dispatch(clearModalProduct());
  },
});

export default connect(null, mapDispatchToProps)(SignInPage);

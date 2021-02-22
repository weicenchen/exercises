import { connect } from 'react-redux';

import { toggleSignOut, toggleSignOutModal } from '../../../reducers/SignInReducer';
import { queryProductListAction } from '../../../actions/queryProductListAction';
import { clearCartList } from '../../../reducers/CartReducer';
import { clearModalProduct } from '../../../reducers/SingleProductReducer';

import SignOutModal from '../SignOutModal.component';

const mapDispatchToProps = (dispatch) => ({
  handleSignOut: () => {
    dispatch(toggleSignOut());
  },
  handleQueryProductListAction: () => {
    dispatch(queryProductListAction());
  },
  handleClearCartList: () => {
    dispatch(clearCartList());
  },
  handleClearProductModal: () => {
    dispatch(clearModalProduct());
  },
  handleSignOutModal: (isShow) => {
    dispatch(toggleSignOutModal(isShow));
  },
});

export default connect(null, mapDispatchToProps)(SignOutModal);

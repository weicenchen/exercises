import { connect } from 'react-redux';

import { removeItemFromCart, toggleCartModal } from '../../../reducers/CartReducer';

import CartModal from '../CartModal.component';

const mapStateToProps = (state) => ({
  cartList: state.getIn(['CartReducer', 'cartList']).toJS(),
});

const mapDispatchToProps = (dispatch) => ({
  handleRemoveItemFromCart: (index) => {
    dispatch(removeItemFromCart(index));
  },
  handleCartModalClose: (isShow) => {
    dispatch(toggleCartModal(isShow));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);

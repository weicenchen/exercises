import { connect } from 'react-redux';

import { toggleCartModal } from '../../../reducers/CartReducer';

import Cart from '../Cart.component';

const getCartAmount = (cartList) => {
  let cartAmount = 0;
  cartList.forEach((item) => {
    cartAmount += item.qty;
  });
  return cartAmount;
};

const mapStateToProps = (state) => ({
  cartAmount: getCartAmount(state.getIn(['CartReducer', 'cartList']).toJS()),
});

const mapDispatchToProps = (dispatch) => ({
  handleCartModalOpen: (isShow) => {
    dispatch(toggleCartModal(isShow));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

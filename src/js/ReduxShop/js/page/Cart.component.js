import React from 'react';
import PropTypes from 'prop-types';

function Cart(props) {
  const { cartAmount, handleCartModalOpen } = props;

  const openCartModal = (isShow) => {
    handleCartModalOpen(isShow);
  };

  return (
    <button type="button" onClick={() => openCartModal(true)}>
      Cart
      { (cartAmount > 0) ? (
        <span>
          {' '}
          /
          {' '}
          Amount:
          {cartAmount}
        </span>
      ) : ''}
    </button>
  );
}

Cart.propTypes = {
  cartAmount: PropTypes.number,
  handleCartModalOpen: PropTypes.func.isRequired,
};

Cart.defaultProps = {
  cartAmount: 0,
};

export default Cart;

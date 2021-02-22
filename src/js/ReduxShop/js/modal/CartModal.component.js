import React from 'react';
import PropTypes from 'prop-types';
import CartItemCard from '../page/CartItemCard';

function CartModal(props) {
  const {
    cartList,
    handleRemoveItemFromCart,
    handleCartModalClose,
  } = props;

  const removeItemFromCart = (index) => {
    handleRemoveItemFromCart(index);
  };

  const closeCartModal = (isShow) => {
    handleCartModalClose(isShow);
  };

  const renderAllCartItem = () => {
    let cartListElement;

    if (cartList.length === 0) {
      cartListElement = (
        <p>There is nothing in cart.</p>
      );
    } else {
      cartListElement = cartList.map((item, index) => (
        <CartItemCard
          key={item.product.name + item.qty}
          itemIn={item}
          index={index}
          onItemRemove={removeItemFromCart}
        />
      ));
    }
    return (
      <div>
        {cartListElement}
      </div>
    );
  };
  return (
    <div className="cart-modal modal-fix">
      <h2 className="title">Cart Detail</h2>
      {renderAllCartItem()}
      <button type="button" onClick={() => closeCartModal(false)}>Close</button>
    </div>
  );
}

CartModal.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      product:
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          imageUrl: PropTypes.string,
          price: PropTypes.number,
        }),
      qty: PropTypes.number,
    }),
  ),
  handleRemoveItemFromCart: PropTypes.func.isRequired,
  handleCartModalClose: PropTypes.func.isRequired,
};

CartModal.defaultProps = {
  cartList: [],
};

export default CartModal;

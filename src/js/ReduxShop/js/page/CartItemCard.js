import React from 'react';
import PropTypes from 'prop-types';

function CartItemCard(props) {
  const { itemIn, index, onItemRemove } = props;

  const removeCartItem = (number) => {
    onItemRemove(number);
  };
  return (
    <div>
      <p>
        Product Name:
        {itemIn.product.name}
      </p>
      <p>
        Price:
        {itemIn.product.price}
      </p>
      <p>
        Qty:
        {itemIn.qty}
      </p>
      <button type="button" onClick={() => removeCartItem(index)}>Remove</button>
      <p>_____________________________________</p>
    </div>
  );
}

CartItemCard.propTypes = {
  itemIn: PropTypes.shape({
    product:
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        imageUrl: PropTypes.string,
        price: PropTypes.number,
      }),
    qty: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onItemRemove: PropTypes.func.isRequired,
};

export default CartItemCard;

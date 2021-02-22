import React from 'react';
import PropTypes from 'prop-types';

function ProductCard(props) {
  const {
    itemIn,
    // cartList,
    onAddCart,
    onModalOpen,
  } = props;

  const addToCart = (item, num) => {
    onAddCart(item, num);
  };

  const openSingleProductModal = (item, isShow) => {
    onModalOpen(item, isShow);
  };

  return (
    <div className="product-card">
      <img width="200" src={itemIn.imageUrl} alt={itemIn.name} />
      <p>
        Product Name:
        {itemIn.name}
      </p>
      <p>
        Price:
        {itemIn.price}
      </p>
      <button type="button" onClick={() => addToCart(itemIn, 1)}>Add To Cart</button>
      <button type="button" onClick={() => openSingleProductModal(itemIn, true)}>More Details</button>
    </div>
  );
}

ProductCard.propTypes = {
  itemIn: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAddCart: PropTypes.func.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

export default ProductCard;

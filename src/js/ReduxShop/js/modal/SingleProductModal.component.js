import React from 'react';
import PropTypes from 'prop-types';

import UserName from '../page/container/UserName.container';

function SingleProductModal(props) {
  const {
    modalProduct,
    qtyToAdd,
    handleQtyToAdd,
    addItemToCartList,
    handleClearProductModal,
  } = props;

  const editQtyToAdd = (number) => {
    const qtyToSet = qtyToAdd + number;
    handleQtyToAdd(qtyToSet);
  };
  const addToCart = (item, num) => {
    addItemToCartList(item, num);
  };
  const closeModal = () => {
    handleClearProductModal();
  };

  return (
    <div className="single-product-modal modal-fix">
      <h2 className="title">Product Detail</h2>
      <img width="200" src={modalProduct.imageUrl} alt={modalProduct.name} />
      <p>
        Product Name:
        {modalProduct.name}
      </p>
      <p>
        Price:
        {modalProduct.price}
      </p>
      <div>
        <button type="button" onClick={() => editQtyToAdd(-1)}>-</button>
        <span>{qtyToAdd}</span>
        <button type="button" onClick={() => editQtyToAdd(1)}>+</button>
      </div>
      <UserName />
      <div>
        <button type="button" onClick={() => addToCart(modalProduct, qtyToAdd)}>Add To Cart</button>
        <button type="button" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

SingleProductModal.propTypes = {
  modalProduct: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  qtyToAdd: PropTypes.number.isRequired,
  handleQtyToAdd: PropTypes.func.isRequired,
  addItemToCartList: PropTypes.func.isRequired,
  handleClearProductModal: PropTypes.func.isRequired,
};

export default SingleProductModal;

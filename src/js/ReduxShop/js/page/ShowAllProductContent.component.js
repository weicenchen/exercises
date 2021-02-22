import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import SingleProductModal from '../modal/container/SingleProductModal.container';
import CartModal from '../modal/container/CartModal.container';
import SignOutModal from '../modal/container/SignOutModal.container';

class ShowAllProductContent extends React.Component {
  componentDidMount() {
    const { userName, handleQueryProductListAction } = this.props;
    handleQueryProductListAction(userName);
  }

  componentWillUnmount() {
    const { clearProductList } = this.props;
    clearProductList();
  }

  renderAllProductCard = () => {
    const {
      productList,
      addItemToCartList,
      handleSingleProductModal,
    } = this.props;
    let productListElement;

    if (productList.length === 0) {
      productListElement = (
        <span>loading</span>
      );
    } else {
      productListElement = productList.map((item) => (
        <ProductCard
          key={item.id}
          itemIn={item}
          onAddCart={addItemToCartList}
          onModalOpen={handleSingleProductModal}
        />
      ));
    }
    return (
      <div className="product-card-wrapper">
        {productListElement}
      </div>
    );
  }

  // fetch = () => {
  //   fetch('/user', {
  //     body: JSON.stringify({ data: 'fff', hihi: 'YUYU' }), // must match 'Content-Type' header
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, same-origin, *omit
  //     headers: {
  //       'user-agent': 'Mozilla/4.0 MDN Example',
  //       'content-type': 'application/json',
  //     },
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, cors, *same-origin
  //     redirect: 'follow', // manual, *follow, error
  //     referrer: 'no-referrer', // *client, no-referrer
  //   });
  // }

  render() {
    const {
      isSingleProductModalShow,
      isCartModalShow,
      isSignOutModalShow,
    } = this.props;

    return (
      <div>
        {this.renderAllProductCard()}
        {isSingleProductModalShow && <SingleProductModal />}
        {isCartModalShow && <CartModal />}
        {isSignOutModalShow && <SignOutModal />}
        {/* <button type="button" onClick={this.fetch}>fetch</button> */}
      </div>
    );
  }
}

ShowAllProductContent.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      imageUrl: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
  userName: PropTypes.string.isRequired,
  isSingleProductModalShow: PropTypes.bool.isRequired,
  isCartModalShow: PropTypes.bool.isRequired,
  isSignOutModalShow: PropTypes.bool.isRequired,
  handleQueryProductListAction: PropTypes.func.isRequired,
  clearProductList: PropTypes.func.isRequired,
  addItemToCartList: PropTypes.func.isRequired,
  handleSingleProductModal: PropTypes.func.isRequired,
};

ShowAllProductContent.defaultProps = {
  productList: [],
};

export default ShowAllProductContent;

import { connect } from 'react-redux';
import Immutable from 'immutable';

import { addItemToCartList } from '../../../reducers/CartReducer';
import { toggleQtyToAdd, clearModalProduct } from '../../../reducers/SingleProductReducer';

import SingleProductModal from '../SingleProductModal.component';

const mapStateToProps = (state) => ({
  modalProduct: state.getIn(['SingleProductReducer', 'product']).toJS(),
  qtyToAdd: state.getIn(['SingleProductReducer', 'qtyToAdd']),
});

const mapDispatchToProps = (dispatch) => ({
  handleQtyToAdd: (qty) => {
    dispatch(toggleQtyToAdd(qty));
  },
  addItemToCartList: (item, num) => {
    const itemToPush = { product: item, qty: num };
    dispatch(addItemToCartList(Immutable.fromJS(itemToPush)));
  },
  handleClearProductModal: () => {
    dispatch(clearModalProduct());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductModal);

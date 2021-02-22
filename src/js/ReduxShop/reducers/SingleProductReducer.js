import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const singleProductInitialState = Immutable.fromJS({
  product: {},
  isModalShow: false,
  qtyToAdd: 1,
});

const TOGGLE_PRODUCT_MODAL = 'TOGGLE_PRODUCT_MODAL';
const TOGGLE_QTY_TO_ADD = 'TOGGLE_QTY_TO_ADD';
const CLEAR_MODAL_PRODUCT = 'CLEAR_MODAL_PRODUCT';

export const toggleProductModal = createAction(TOGGLE_PRODUCT_MODAL, (product = undefined, isShow) => ({ product, isShow }));
export const toggleQtyToAdd = createAction(TOGGLE_QTY_TO_ADD);
export const clearModalProduct = createAction(CLEAR_MODAL_PRODUCT);

const SingleProductReducer = handleActions(
  {
    [TOGGLE_PRODUCT_MODAL]: (state, { payload: { product, isShow } }) => (
      state.set('product', product).set('isModalShow', isShow)
    ),
    [TOGGLE_QTY_TO_ADD]: (state, { payload }) => (
      state.set('qtyToAdd', payload)
    ),
    [CLEAR_MODAL_PRODUCT]: () => singleProductInitialState,
  },
  singleProductInitialState,
);

export default SingleProductReducer;

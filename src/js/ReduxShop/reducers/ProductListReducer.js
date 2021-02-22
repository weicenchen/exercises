import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const productListInitialState = Immutable.fromJS({
  productList: [],
});

const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
const CLEAR_PRODUCT_LIST = 'CLEAR_PRODUCT_LIST';

export const setProductList = createAction(SET_PRODUCT_LIST);
export const clearProductList = createAction(CLEAR_PRODUCT_LIST);

const ProductListReducer = handleActions(
  {
    [SET_PRODUCT_LIST]: (state, { payload }) => (
      state.set('productList', (payload))
    ),
    [CLEAR_PRODUCT_LIST]: () => productListInitialState,
  },
  productListInitialState,
);

export default ProductListReducer;

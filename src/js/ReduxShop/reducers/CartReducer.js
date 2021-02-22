import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const cartInitialState = Immutable.fromJS({
  cartList: [],
  isModalShow: false,
});

const ADD_ITEM_TO_CART_LIST = 'ADD_ITEM_TO_CART_LIST';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
const TOGGLE_CART_MODAL = 'TOGGLE_CART_MODAL';
const CLEAR_CART_LIST = 'CLEAR_CART_LIST';

export const addItemToCartList = createAction(ADD_ITEM_TO_CART_LIST);
export const removeItemFromCart = createAction(REMOVE_ITEM_FROM_CART, (index) => ({ index }));
export const toggleCartModal = createAction(TOGGLE_CART_MODAL, (isShow) => ({ isShow }));
export const clearCartList = createAction(CLEAR_CART_LIST);

const CartReducer = handleActions(
  {
    [ADD_ITEM_TO_CART_LIST]: (state, { payload }) => {
      const lastCartList = state.get('cartList');
      const cartListToSet = lastCartList.push(payload);
      return state.set('cartList', cartListToSet);
    },
    [REMOVE_ITEM_FROM_CART]: (state, { payload: { index } }) => {
      const lastCartList = state.get('cartList');
      const cartListToSet = lastCartList.splice(index, 1);
      return state.set('cartList', cartListToSet);
    },
    [TOGGLE_CART_MODAL]: (state, { payload: { isShow } }) => (
      state.set('isModalShow', isShow)
    ),
    [CLEAR_CART_LIST]: () => cartInitialState,
  },
  cartInitialState,
);

export default CartReducer;

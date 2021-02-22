import { combineReducers } from 'redux-immutable';

import LoadingReducer from './LoadingReducer';
import ProductListReducer from './ProductListReducer';
import SingleProductReducer from './SingleProductReducer';
import CartReducer from './CartReducer';
import SignInReducer from './SignInReducer';

const RootReducer = combineReducers({
  LoadingReducer,
  ProductListReducer,
  SingleProductReducer,
  CartReducer,
  SignInReducer,
});

export default RootReducer;

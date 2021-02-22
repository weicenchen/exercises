import { connect } from 'react-redux';
import Immutable from 'immutable';

// import { setLoading } from '../../../reducers/LoadingReducer';
import { clearProductList } from '../../../reducers/ProductListReducer';
import { queryProductListAction } from '../../../actions/queryProductListAction';
import { addItemToCartList } from '../../../reducers/CartReducer';
import { toggleProductModal } from '../../../reducers/SingleProductReducer';

import ShowAllProductContent from '../ShowAllProductContent.component';

const mapStateToProps = (state) => ({
  productList: state.getIn(['ProductListReducer', 'productList']).toJS(),
  userName: state.getIn(['SignInReducer', 'userName']),
  isSingleProductModalShow: state.getIn(['SingleProductReducer', 'isModalShow']),
  isCartModalShow: state.getIn(['CartReducer', 'isModalShow']),
  isSignOutModalShow: state.getIn(['SignInReducer', 'isSignOutModalShow']),
});

const mapDispatchToProps = (dispatch) => ({
  handleQueryProductListAction: (userName) => {
    dispatch(queryProductListAction(userName));
  },
  clearProductList: () => {
    dispatch(clearProductList());
  },
  addItemToCartList: (item, num) => {
    const itemToPush = { product: item, qty: num };
    dispatch(addItemToCartList(Immutable.fromJS(itemToPush)));
  },
  handleSingleProductModal: (product, isShow) => {
    dispatch(toggleProductModal(Immutable.fromJS(product), isShow));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllProductContent);

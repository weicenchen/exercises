import { connect } from 'react-redux';

import ReduxShop from '../ReduxShop.component';

const mapStateToProps = (state) => ({
  isLoading: state.getIn(['LoadingReducer', 'isLoading']),
  isSignInPageShow: state.getIn(['SignInReducer', 'isSignInPageShow']),
});

export default connect(mapStateToProps)(ReduxShop);

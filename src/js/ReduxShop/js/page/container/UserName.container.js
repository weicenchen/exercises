import { connect } from 'react-redux';

import { toggleSignInPage, toggleSignOutModal } from '../../../reducers/SignInReducer';

import UserName from '../UserName.component';

const getIsSignIn = (userName) => {
  if (userName === '') {
    return false;
  }
  return true;
};

const mapStateToProps = (state) => ({
  isSignIn: getIsSignIn(state.getIn(['SignInReducer', 'userName'])),
  userName: state.getIn(['SignInReducer', 'userName']),
});

const mapDispatchToProps = (dispatch) => ({
  handleSignInPageOpen: (isShow) => {
    dispatch(toggleSignInPage(isShow));
  },
  handleSignOutModal: (isShow) => {
    dispatch(toggleSignOutModal(isShow));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserName);

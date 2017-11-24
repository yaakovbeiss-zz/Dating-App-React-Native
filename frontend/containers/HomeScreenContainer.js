import { connect } from 'react-redux';

import { login, signup } from '../actions/session_actions';

import HomeScreen from '../screens/HomeScreen';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

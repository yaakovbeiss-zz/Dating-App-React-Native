import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';

import SignupDetails from '../screens/SignupDetails';

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
)(SignupDetails);

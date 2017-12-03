import { connect } from 'react-redux';
import { signin } from '../actions/session_actions';


import Signup from '../screens/Signup';

const mapStateToProps = ({ session }) => {
  return {
    errors: session.errors,
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    signin: (user) => dispatch(signin(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

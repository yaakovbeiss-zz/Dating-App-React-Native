import { connect } from 'react-redux';
import { requestUsers } from '../actions/user_actions';

import ContactsScreen from '../screens/ContactsScreen';

const mapStateToProps = ({ user }) => ({
  users: user.users
})

const mapDispatchToProps = ( dispatch ) => {
  return {
    requestUsers: () => dispatch(requestUsers()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsScreen);

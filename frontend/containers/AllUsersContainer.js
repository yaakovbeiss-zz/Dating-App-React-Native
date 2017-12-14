import { connect } from 'react-redux';
import { requestUsers } from '../actions/user_actions';
import { requestConnections } from '../actions/connection_actions';
import { selectAllUsers } from '../reducers/selectors';

import ContactsScreen from '../screens/ContactsScreen';

const mapStateToProps = ({ users, connection }) => ({
  users: selectAllUsers(users),
  connection: connection.entities.you_requested,
  allUsers: selectAllUsers(users),
})

const mapDispatchToProps = ( dispatch ) => {
  return {
    requestUsers: () => dispatch(requestUsers()),
    requestConnections: () => dispatch(requestConnections()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsScreen);

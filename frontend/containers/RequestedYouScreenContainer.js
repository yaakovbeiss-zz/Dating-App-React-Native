import { connect } from 'react-redux';
import { requestUsers } from '../actions/user_actions';
import { requestConnections } from '../actions/connection_actions';
import { requestRatings } from '../actions/rating_actions';
import { selectAllUsers } from '../reducers/selectors';

import ContactsScreen from '../screens/ContactsScreen';

const mapStateToProps = ({ users, connection }) => ({
  users: selectAllUsers(users),
  connection: connection.entities.requested_you,
})

const mapDispatchToProps = ( dispatch ) => {
  return {
    requestUsers: () => dispatch(requestUsers()),
    requestConnections: () => dispatch(requestConnections()),
    requestRatings: () => dispatch(requestRatings()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsScreen);

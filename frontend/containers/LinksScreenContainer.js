import { connect } from 'react-redux';
import { requestUsers } from '../actions/user_actions';

import LinksScreen from '../screens/LinksScreen';

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
)(LinksScreen);

import { connect } from 'react-redux';

import { signout } from '../actions/session_actions';
import { persistUser } from '../util/auth_util';

import SettingsScreen from '../screens/SettingsScreen';

const mapDispatchToProps = ( dispatch ) => {
  return {
    signout: () => dispatch(signout()),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SettingsScreen);

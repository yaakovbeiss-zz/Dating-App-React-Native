import { connect } from 'react-redux';
import { createUserSettings, updateUserSettings } from '../actions/user_settings_actions';

import UserSettings from '../screens/UserSettings';

const mapStateToProps = ({ session, userSettings }) => ({
  currentUser: session.currentUser,
  userSettings: userSettings,
})

const mapDispatchToProps = ( dispatch ) => ({
  createUserSettings: (user_settings) => dispatch(createUserSettings(user_settings)),
  updateUserSettings: (user_settings) => dispatch(updateUserSettings(user_settings)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettings);

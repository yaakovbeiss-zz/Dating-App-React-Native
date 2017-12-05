import SessionReducer from './session_reducer';
import UserSettingsReducer from './user_settings_reducer';
import UserProfileReducer from './user_profile_reducer';
import NavReducer from './nav_reducer';

export default {
  navigation: NavReducer,
  session: SessionReducer,
  userSettings: UserSettingsReducer,
  userProfile: UserProfileReducer,
}

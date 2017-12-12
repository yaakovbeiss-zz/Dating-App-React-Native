import SessionReducer from './session_reducer';
import UsersReducer from './user_reducer';
import UserSettingsReducer from './user_settings_reducer';
import UserProfileReducer from './user_profile_reducer';
import ProfileImageReducer from './profile_image_reducer';
import ConnectionReducer from './connection_reducer';
import NavReducer from './nav_reducer';

export default {
  // navigation: NavReducer,
  users: UsersReducer,
  session: SessionReducer,
  userSettings: UserSettingsReducer,
  userProfile: UserProfileReducer,
  profileImages: ProfileImageReducer,
  connection: ConnectionReducer,
}

import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import UserSettingsReducer from './user_settings_reducer';
import UserProfileReducer from './user_profile_reducer';
import ProfileImageReducer from './profile_image_reducer';
import NavReducer from './nav_reducer';

export default {
  navigation: NavReducer,
  user: UserReducer,
  session: SessionReducer,
  userSettings: UserSettingsReducer,
  userProfile: UserProfileReducer,
  profileImages: ProfileImageReducer,
}

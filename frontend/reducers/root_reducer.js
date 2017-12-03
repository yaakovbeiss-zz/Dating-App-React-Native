// import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UserSettingsReducer from './user_settings_reducer';

export default {
  session: SessionReducer,
  userSettings: UserSettingsReducer,
}

import merge from 'lodash/merge';

import {
  RECEIVE_USER_SETTINGS,
  RECEIVE_ERRORS
} from '../actions/user_settings_actions';

const defaultState = Object.freeze({
  userSettings: {},
  errors: []
});

const UserSettingsReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch(action.type) {

    case RECEIVE_USER_SETTINGS:
      const userSettings = action.userSettings;
      return merge({}, state, {
        userSettings
      });
      break;

    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
      break;
    default:
      return state;
  }
};

export default UserSettingsReducer;

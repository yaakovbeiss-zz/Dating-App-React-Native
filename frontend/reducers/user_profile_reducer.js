import merge from 'lodash/merge';

import {
  RECEIVE_USER_PROFILE,
  RECEIVE_PROFILE_ERRORS
} from '../actions/user_profile_actions';

const defaultState = Object.freeze({
  userProfile: {},
  errors: []
});

const UserProfileReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch(action.type) {

    case RECEIVE_USER_PROFILE:
      const userProfile = action.userProfile;
      return merge({}, state, {
        userProfile
      });
      break;

    case RECEIVE_PROFILE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
      break;
    default:
      return state;
  }
};

export default UserProfileReducer;

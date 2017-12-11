import merge from 'lodash/merge';

import {
  RECEIVE_USERS
} from '../actions/user_actions';

const nullUser = Object.freeze({
  users: [],
  errors: []
});

export default UserReducer = (state = nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {

    case RECEIVE_USERS:
      const users = action.users;
      return merge({}, state, {
        users
      });
      break;

    default:
      return state;
  }
};

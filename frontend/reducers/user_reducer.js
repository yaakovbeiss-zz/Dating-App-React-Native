import merge from 'lodash/merge';

import {
  RECEIVE_USERS
} from '../actions/user_actions';

const nullUser = Object.freeze({
  entities: {},
  errors: []
});

export default UsersReducer = (state = nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {

    case RECEIVE_USERS:
      const users = action.users;
      return merge({}, state, {
        entities: users
      });
      break;

    default:
      return state;
  }
};

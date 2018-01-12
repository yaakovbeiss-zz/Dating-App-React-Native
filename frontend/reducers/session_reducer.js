'use strict'
import merge from 'lodash/merge';
import axios from 'axios';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

import {
  RECEIVE_MATCHES,
  RECEIVE_MATCH_ERRORS
} from '../actions/match_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  let currentUser;
  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;

      const token = currentUser ? currentUser.session_token : null
      axios.defaults.headers.common['AUTH_TOKEN'] = token;

      return merge({}, state, {
        currentUser
      });
      break;

    case RECEIVE_SESSION_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
      break;

    case RECEIVE_MATCHES:
      const matches = action.matches;
      currentUser = Object.assign({}, state.currentUser, matches)

      return currentUser;
      break;

    default:
      return state;
  }
};

export default SessionReducer;

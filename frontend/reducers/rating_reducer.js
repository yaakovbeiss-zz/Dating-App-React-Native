import merge from 'lodash/merge';

import {
  RECEIVE_RATINGS,
  RECEIVE_RATINGS_ERRORS
} from '../actions/rating_actions';

const defaultState = Object.freeze({
  entities: {},
  errors: []
});

export default RatingReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch(action.type) {

    case RECEIVE_RATINGS:
      const ratings = action.ratings;

      return Object.assign({}, state, {
        entities: ratings
      });
      break;

    case RECEIVE_RATINGS_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
      break;

    default:
      return state;
  }
};

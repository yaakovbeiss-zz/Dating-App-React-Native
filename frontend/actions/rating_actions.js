import * as APIUtil from '../util/rating_api_util'

export const RECEIVE_RATINGS = 'RECEIVE_RATINGS';
export const RECEIVE_RATINGS_ERRORS = 'RECEIVE_RATINGS_ERRORS';


export const receiveRatings = ratings => ({
  type: RECEIVE_RATINGS,
  ratings
});


export const receiveRatingsErrors = errors => ({
  type: RECEIVE_RATINGS_ERRORS,
  errors
});

export const requestRatings = () => dispatch => (
  APIUtil.fetchRatings().then(res => (
     dispatch(receiveRatings(res.data))
   ), err => (
     dispatch(receiveRatingsErrors(err.response.data))
   )
 )
);

export const createRating = rating => dispatch => (
  APIUtil.createRating(rating).then( res => (
    dispatch(receiveRatings(res.data))
  ), err => (
    dispatch(receiveRatingsErrors(err.response.data))
  )
 )
);

export const deleteRating = id => dispatch => (
  APIUtil.deleteRating(id).then( res => (
    dispatch(receiveRatings(res.data))
  ), err => (
    dispatch(receiveRatingsErrors(err.response.data))
  )
 )
);

export const updateRating = rating => dispatch => (
  APIUtil.updateRating(rating).then( res => (
    dispatch(receiveRatings(res.data))
  ), err => (
    dispatch(receiveRatingsErrors(err.response.data))
  )
 )
);

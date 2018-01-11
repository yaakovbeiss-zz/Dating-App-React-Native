import * as APIUtil from '../util/match_api_util'

export const RECEIVE_MATCH = 'RECEIVE_MATCH';
export const RECEIVE_MATCH_ERRORS = 'RECEIVE_MATCH_ERRORS';


export const receiveMatch = match => ({
  type: RECEIVE_MATCH,
  match
});


export const receiveMatchErrors = errors => ({
  type: RECEIVE_MATCH_ERRORS,
  errors
});

export const createMatch = match => dispatch => (
  APIUtil.createMatch(match).then( res => (
    dispatch(receiveMatch(res.data))
  ), err => (
    dispatch(receiveMatchErrors(err.response.data))
  )
 )
);

export const deleteMatch = id => dispatch => (
  APIUtil.deleteMatch(id).then( res => (
    dispatch(receiveMatch(res.data))
  ), err => (
    dispatch(receiveMatchErrors(err.response.data))
  )
 )
);

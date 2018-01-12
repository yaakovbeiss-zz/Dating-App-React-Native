import * as APIUtil from '../util/match_api_util'

export const RECEIVE_MATCHES = 'RECEIVE_MATCHES';
export const RECEIVE_MATCH_ERRORS = 'RECEIVE_MATCH_ERRORS';


export const receiveMatches = match => ({
  type: RECEIVE_MATCHES,
  matches
});


export const receiveMatchErrors = errors => ({
  type: RECEIVE_MATCH_ERRORS,
  errors
});

export const requestMatches = () => dispatch => (
  APIUtil.fetchMatches().then( res => (
    dispatch(receiveMatches(res.data))
  ), err => (
    dispatch(receiveMatchErrors(err.response.data))
  ))
)

export const createMatch = match => dispatch => (
  APIUtil.createMatch(match).then( res => (
    dispatch(receiveMatches(res.data))
  ), err => (
    dispatch(receiveMatchErrors(err.response.data))
  )
 )
);

export const deleteMatch = id => dispatch => (
  APIUtil.deleteMatch(id).then( res => (
    dispatch(receiveMatches(res.data))
  ), err => (
    dispatch(receiveMatchErrors(err.response.data))
  )
 )
);

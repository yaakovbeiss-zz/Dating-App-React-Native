import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then( res => (
      dispatch(receiveCurrentUser(res.data))
    ), err => (
      dispatch(receiveErrors(err.response.data))
    )
  )
);

export const signin = user => dispatch => (
  APIUtil.signin(user).then(res => (
     dispatch(receiveCurrentUser(res.data))
   ), err => (
     dispatch(receiveErrors(err.response.data))
   )
 )
);


export const signout = () => dispatch => (
  APIUtil.signout().then( user => (
    dispatch(receiveCurrentUser(null))
  ), err => (
    dispatch(receiveErrors(err.response.data))
  )
)
);

import * as APIUtil from '../util/user_profile_api_util'

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';

export const receiveUserProfile = userProfile => ({
  type: RECEIVE_USER_PROFILE,
  userProfile
});

export const receiveProfileErrors = errors => ({
  type: RECEIVE_PROFILE_ERRORS,
  errors
});

export const requestUserProfile = (id) => dispatch => (
  APIUtil.fetchUserProfile(id).then( res => (
      dispatch(receiveUserProfile(res.data))
    ), err => (
      dispatch(receiveProfileErrors(err.response.data))
    )
  )
);
export const createUserProfile = userProfile => dispatch => (
  APIUtil.createUserProfile(userProfile).then( res => (
      dispatch(receiveUserProfile(res.data))
    ), err => (
      dispatch(receiveProfileErrors(err.response.data))
    )
  )
);

export const updateUserProfile = userProfile => dispatch => (
  APIUtil.updateUserProfile(userProfile).then(res => (
     dispatch(receiveUserProfile(res.data))
   ), err => (
     dispatch(receiveProfileErrors(err.response.data))
   )
 )
);

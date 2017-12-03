import * as APIUtil from '../util/user_settings_api_util'

export const RECEIVE_USER_SETTINGS = 'RECEIVE_USER_SETTINGS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveUserSettings = userSettings => ({
  type: RECEIVE_USER_SETTINGS,
  userSettings
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestUserSettings = (id) => dispatch => (
  APIUtil.fetchUserSettings(id).then( res => (
      dispatch(receiveUserSettings(res.data))
    ), err => (
      dispatch(receiveErrors(err.response.data))
    )
  )
);
export const createUserSettings = userSettings => dispatch => (
  APIUtil.createUserSettings(userSettings).then( res => (
      dispatch(receiveUserSettings(res.data))
    ), err => (
      dispatch(receiveErrors(err.response.data))
    )
  )
);

export const updateUserSettings = userSettings => dispatch => (
  APIUtil.updateUserSettings(userSettings).then(res => (
     dispatch(receiveUserSettings(res.data))
   ), err => (
     dispatch(receiveErrors(err.response.data))
   )
 )
);

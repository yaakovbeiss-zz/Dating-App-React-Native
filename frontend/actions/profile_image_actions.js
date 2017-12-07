import * as APIUtil from '../util/profile_image_api_util'

export const RECEIVE_PROFILE_IMAGE = 'RECEIVE_PROFILE_IMAGE';
export const RECEIVE_PROFILE_IMAGES = 'RECEIVE_PROFILE_IMAGES';
export const RECEIVE_PROFILE_IMAGE_ERRORS = 'RECEIVE_PROFILE_IMAGE_ERRORS';

export const receiveProfileImage = profileImage => ({
  type: RECEIVE_PROFILE_IMAGE,
  profileImage
});

export const receiveProfileImages = profileImages => ({
  type: RECEIVE_PROFILE_IMAGES,
  profileImages
});

export const receiveProfileImageErrors = errors => ({
  type: RECEIVE_PROFILE_IMAGE_ERRORS,
  errors
});

export const requestProfileImage = (id) => dispatch => (
  APIUtil.fetchProfileImage(profileImage).then( res => (
      dispatch(receiveProfileImage(res.data))
    ), err => (
      dispatch(receiveProfileImageErrors(err.response.data))
    )
  )
);

export const requestProfileImages = () => dispatch => (
  APIUtil.fetchProfileImages(profileImages).then(res => (
     dispatch(receiveProfileImages(res.data))
   ), err => (
     dispatch(receiveProfileImageErrors(err.response.data))
   )
 )
);

export const createProfileImage = profileImage => dispatch => (
  APIUtil.createProfileImage(profileImage).then( profileImage => (
    dispatch(receiveProfileImage(profileImage))
  ), err => (
    dispatch(receiveProfileImageErrors(err.response.data))
  )
 )
);
export const deleteProfileImage = profileImage => dispatch => (
  APIUtil.deleteProfileImage(profileImage).then( profileImage => (
    dispatch(receiveProfileImage(profileImage))
  ), err => (
    dispatch(receiveProfileImageErrors(err.response.data))
  )
 )
);

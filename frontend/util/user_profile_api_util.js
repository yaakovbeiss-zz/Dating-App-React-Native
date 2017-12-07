import axios from 'axios';

export const fetchUserProfile = id => (
  axios.get(`http://192.168.1.172:3000/api/user_profiles/${id}`, {

  })
)

export const createUserProfile = userProfile => (
  axios.post('http://192.168.1.172:3000/api/user_profiles', {
    user_profile: userProfile
  })
)

export const updateUserProfile = userProfile => (
  axios.patch(`http://192.168.1.172:3000/api/user_profiles/${userProfile.id}`, {
    user_profile: userProfile
  })
)

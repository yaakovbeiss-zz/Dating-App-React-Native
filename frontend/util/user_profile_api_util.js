import axios from 'axios';

export const fetchUserProfile = id => (
  axios.get(`http://192.168.1.172:3000/api/user_profile/${id}`)
)
export const createUserProfile = userProfile => (
  axios.post('http://192.168.1.172:3000/api/user_profile', {
    user_profile: userProfile
  })
)

export const updateUserProfile = userProfile => (
  axios.patch(`http://192.168.1.172:3000/api/user_profile/${userProfile.id}`, {
    user_profile: userProfile
  })
)

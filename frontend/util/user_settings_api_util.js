import axios from 'axios';

export const fetchUserSettings = id => (
  axios.get(`http://192.168.1.172:3000/api/user_settings/${id}`, {
    user_settings: userSettings
  })
)
export const createUserSettings = userSettings => (
  axios.post('http://192.168.1.172:3000/api/user_settings', {
    user_settings: userSettings
  })
)

export const updateUserSettings = userSettings => (
  axios.patch(`http://192.168.1.172:3000/api/user_settings/${userSettings.id}`, {
    user_settings: userSettings
  })
)

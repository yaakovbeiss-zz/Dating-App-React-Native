import axios from 'axios';

export const fetchUser = id => (
  axios.get(`http://192.168.1.172:3000/api/users/${id}`)
)

export const fetchUsers = () => (
  axios.get(`http://192.168.1.172:3000/api/users`)
)

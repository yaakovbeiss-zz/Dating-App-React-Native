export const fetchUser = user => (
  axios.get(`http://192.168.1.172:3000/api/users/${user.id}`)
)

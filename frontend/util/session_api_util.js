import axios from 'axios';

export const signup = user => (
  axios.post('http://192.168.1.172:3000/api/users', {
    user: user
  })
)

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

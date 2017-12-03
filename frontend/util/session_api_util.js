import axios from 'axios';
import * as AuthUtil from './auth_util';

export const signup = user => (
  axios.post('http://192.168.1.172:3000/api/users', {
    user: user
  })
)

export const signin = user => (
  axios.post('http://192.168.1.172:3000/api/session', {
    user: user
  })
)

// export const signin = user => (
//   $.ajax({
//     method: 'POST',
//     url: '/api/session',
//     data: user
//   })
// );


export const signout = () => (
  axios.delete('http://192.168.1.172:3000/api/session')
)

// export const signout = () => (
//   $.ajax({
//     method: 'DELETE',
//     url: '/api/session'
//   })
// );

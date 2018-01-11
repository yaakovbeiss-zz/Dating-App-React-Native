import axios from 'axios';

export const createMatch = match => (
  axios.post('http://192.168.1.172:3000/api/matches', {
    match: match
  })
)

export const deleteMatch = id => (
  axios.delete(`http://192.168.1.172:3000/api/matches/${id}`)
)

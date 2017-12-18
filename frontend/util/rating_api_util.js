import axios from 'axios';

export const fetchRatings = () => (
  axios.get(`http://192.168.1.172:3000/api/ratings/`)
)

export const createRating = rating => (
  axios.post('http://192.168.1.172:3000/api/ratings', {
    rating: rating
  })
)

export const updateRating = rating => (
  axios.patch(`http://192.168.1.172:3000/api/ratings/${rating.id}`, {
    rating: rating
  })
)

export const deleteRating = id => (
  axios.delete(`http://192.168.1.172:3000/api/ratings/${id}`)
)

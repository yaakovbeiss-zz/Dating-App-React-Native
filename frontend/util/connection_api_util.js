import axios from 'axios';

export const fetchConnections = () => (
  axios.get(`http://192.168.1.172:3000/api/connections/`)
)

export const createConnection = connection => (
  axios.post('http://192.168.1.172:3000/api/connections', {
    connection: connection
  })
)

export const updateConnection = connection => (
  axios.patch(`http://192.168.1.172:3000/api/connections/${connection.id}`, {
    connection: connection
  })
)

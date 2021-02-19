import axios from 'axios'

export default function() {
  const config = {
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8080',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('jwt'))
    },
  }
  return axios.create(config)
}

import axios from 'axios'

export default function() {
  const config = {
    baseURL: 'https://prettyprinted-tm-backend.herokuapp.com',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': 'https://prettyprinted-tm-backend.herokuapp.com',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('jwt'))
    },
  }
  return axios.create(config)
}

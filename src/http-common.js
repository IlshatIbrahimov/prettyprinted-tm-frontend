import axios from 'axios'
import Store from './middlewares/store'

export default function() {
  const config = {
    baseURL: Store.url,
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': Store.url,
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('jwt'))
    },
  }
  return axios.create(config)
}

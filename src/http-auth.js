import axios from 'axios'
import Store from './middlewares/store'

export default axios.create({
  baseURL: Store.url,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': Store.url,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  },
})

import http from '../http-common'

class PrivateService {
  getPrivate(id) {
    return http().get(`/private/${id}`)
  }
  setPrivate(body) {
    return http().post('/private', body)
  }
}

export default new PrivateService()

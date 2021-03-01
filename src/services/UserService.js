import http from '@/http-common'

class UserService {
  getAll() {
    return http().get('/user')
  }
}

export default new UserService()

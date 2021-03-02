import http from '../http-auth'

class AuthService {
  login(user) {
    return http.post('/auth', user)
  }

  register(user) {
    return http.post('/register', user)
  }
}

export default new AuthService()

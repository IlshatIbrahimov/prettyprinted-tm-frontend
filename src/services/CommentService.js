import http from '../http-common'

class CommentService {
  addComment(comment) {
    return http().post('/comment/task', comment)
  }

  addMessage(message) {
    return http().post('/comment/project', message)
  }
}

export default new CommentService()

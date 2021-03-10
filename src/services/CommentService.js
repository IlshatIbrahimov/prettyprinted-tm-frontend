import http from '../http-common'

class CommentService {
  addComment(comment) {
    return http().post('/comment/task', comment)
  }
}

export default new CommentService()

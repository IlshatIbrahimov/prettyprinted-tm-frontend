import http from '@/http-common'

class TaskService {
  getById(id) {
    return http().get(`/task/${id}`)
  }

  getByAuthUser() {
    return http().get('/task/user')
  }

  addTask(task) {
    return http().post('/task', task)
  }

  updateTask(task) {
    return http().put('/task', task)
  }

  deleteTask(id) {
    return http().delete(`/task/${id}`)
  }
}

export default new TaskService()

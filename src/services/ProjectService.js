import http from '../http-common'

class ProjectService {
  getAll() {
    return http().get('/project')
  }

  getById(id) {
    return http().get(`/project/${id}`)
  }

  addProject(project) {
    return http().post('/project', project)
  }

  deleteProject(id) {
    return http().delete(`/project/${id}`)
  }
}

export default new ProjectService()

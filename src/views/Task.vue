<template>
  <div>
    <header class="header">
      <h1 class="header__title">{{ projectName }}</h1>
    </header>

    <div class="task">
      <div class="task__left scroll">
        <div class="task__header">
          <div class="task__header-item">
            <button
                class="task__header-btn task__header-btn--back"
                @click.prevent="action"
            >
              <small></small>
              <span>back</span>
            </button>
            <span class="task__header-subtitle">task-{{ task.id }}</span>
          </div>
          <div class="task__header-item task__header-item--buttons">
            <button
                class="task__header-btn task__header-btn--edit"
                @click.prevent="editTask"
            ></button>
            <b-button
                class="task__header-btn task__header-btn--delete"
                @click.prevent="deleteTask"
            ></b-button>
          </div>
        </div>

        <div class="task__content">
          <div class="task__content-title">
                <span
                    class="task__header-title"
                    v-if="!isEdit"
                >{{ taskName }}</span>
            <b-form-input
                v-else
                type="text"
                class="form__input-field"
                v-model="taskName"
                required
            ></b-form-input>
          </div>

          <div class="task__text">
            <p v-if="!isEdit" v-html="urlify(taskContent)"></p>
            <div v-else>
              <b-form-textarea
                  class="form__textarea-field"
                  v-model="taskContent"
                  required
              ></b-form-textarea>
              <button
                  class="task__btn button"
                  @click.prevent="updateTask"
              >Save
              </button>
            </div>
          </div>

          <div class="comments">
            <div class="comments__item">
              <div class="comments__left">
                <div class="comments__avatar avatar-wrapper">
              <span class="avatar">
                <small>М</small>
                <small>Б</small>
              </span>
                </div>
              </div>
              <div class="comments__right">
                <div class="comments__title">
                  <p>Марсель Белялов</p><span>1 марта</span>
                </div>
                <div class="comments__action">
                  <p class="comments__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                    Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
                    распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и
                    перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов
                    Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной
                    вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
                </div>
              </div>
            </div>

            <div class="comments__item">
              <div class="comments__left">
                <div class="comments__avatar avatar-wrapper">
              <span class="avatar">
                <small>М</small>
                <small>Б</small>
              </span>
                </div>
              </div>
              <div class="comments__right">
                <div class="comments__title">
                  <p>Марсель Белялов</p><span>1 марта</span>
                </div>
                <div class="comments__action">
                  <small>
                    <span>Assignee</span>
                    <span>
                      <span class="comments__action-item comments__action-item--arrow">Айнур</span>
                      <span class="comments__action-item">Марсель</span>
                    </span>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <b-form class="form">
          <div class="form__item">
            <b-form-textarea
                class="form__textarea-field"
                type="text"
                placeholder="Write your comment"
            ></b-form-textarea>
          </div>

          <div class="comments__footer">
            <button
                class="button comments__btn"
                type="submit"
            >Add comment
            </button>
          </div>
        </b-form>

      </div>

      <div class="task__right">
        <h2 class="state">State:</h2>
        <div class="attributes attributes--task">
          <div class="attributes__item">
            <label class="attributes__label">Created by:</label>
            <span class="select select--disabled">{{ task.author.name }} {{ task.author.surname }}</span>
          </div>

          <form
              class="attributes__item"
              v-for="(item, name, index) in attributes"
              :key="index"
              @change="updateTask(name)"
          >
            <label class="attributes__label">{{ name }}:</label>
            <select
                class="select"
                v-model="keys[name]"
            >
              <option
                  class="select__option"
                  v-for="(attr, idx) in item"
                  :key="idx"
                  :value="idx"
              >{{ attr.name }}
              </option>
            </select>
          </form>

          <form
              class="attributes__item"
              @change="updateTask"
          >
            <label
                class="attributes__label"
                for="assignee"
            >Assignee:</label>
            <select
                id="assignee"
                class="select"
                v-model="assigneeId"
            >
              <option
                  v-for="user in users"
                  :key="user.id"
                  :value="user.id"
              >{{ user.name }} {{ user.surname }}
              </option>
            </select>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '../services/UserService'
import TaskService from '../services/TaskService'
import ProjectService from '../services/ProjectService'
import Attributes from '../utils/attributes'

export default {
  name: 'Task',
  data() {
    return {
      users: [],
      task: {
        id: null,
        projectId: null,
        priority: 0,
        status: 0,
        type: 0,
        author: {},
        assignee: {},
        name: '',
        content: ''
      },

      name: '',
      projectName: '',
      content: '',
      assigneeId: 0,
      attributes: {},
      keys: {
        type: 0,
        priority: 0,
        status: 0
      },
      taskName: '',
      taskContent: '',

      isEdit: false
    }
  },
  methods: {
    async fetchUsers() {
      const res = await UserService.getAll()
          .then(response => response)
          .catch(error => console.log(error))

      this.users = res.data
    },
    async fetchTask() {
      await TaskService.getById(this.$route.params.id)
          .then(response => {
            this.task = {...response.data}
            console.log(response)
          })
          .catch(error => console.log(error.response))
    },
    async fetchProject() {
      await ProjectService.getById(this.$route.params.projectId)
          .then(response => this.projectName = response.data.name)
          .catch(error => console.log(error.response))
    },
    async updateTask() {
      await TaskService.updateTask({
        id: this.task.id,
        name: this.taskName,
        content: this.taskContent,
        assigneeId: +this.assigneeId,
        priorityId: +this.keys.priority,
        statusId: +this.keys.status,
        typeId: +this.keys.type
      })
          .then(response => console.log(response))
          .catch(error => console.log(error))

      this.isEdit = false
    },
    action() {
      this.$router.push(`/project/${this.$route.params.projectId}`)
    },
    editTask() {
      this.isEdit = !this.isEdit
    },
    async deleteTask() {
      await TaskService.deleteTask(this.$route.params.id)
          .then(response => {
            if (response.status === 200) {
              this.$router.push(`/project/${this.$route.params.projectId}`)
            } else {
              console.log('Что-то пошло не так!');
            }
          })
    },
    urlify(text) {
      let urlRegex = /(https?:\/\/[^\s]+)/g;
      return text.replace(urlRegex, function (url) {
        return '<a target="blank" href="' + url + '">' + url + '</a>';
      })
    },
  },
  mounted() {
    this.attributes = Attributes
    this.fetchTask()
        .then(() => {
          this.keys.priority = this.task.priority.id
          this.keys.type = this.task.type.id
          this.keys.status = this.task.status.id
          this.assigneeId = this.task.assignee.id
          this.taskName = this.task.name
          this.taskContent = this.task.content
        })

    this.fetchUsers()
    this.fetchProject()
  }
}
</script>

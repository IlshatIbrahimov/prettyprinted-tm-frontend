<template>
  <div>
    <header class="header">
      <h1 class="header__title">{{ task.project.name }}</h1>
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
                >{{ task.name }}</span>
            <b-form-input
                v-else
                type="text"
                class="form__input-field"
                v-model="task.name"
                required
            ></b-form-input>
          </div>

          <div class="task__text">
            <p v-if="!isEdit" v-html="urlify(task.content)"></p>
            <div v-else>
              <b-form-textarea
                  class="form__textarea-field"
                  v-model="task.content"
                  required
              ></b-form-textarea>
              <button
                  class="task__btn button"
                  @click.prevent="updateTask"
              >Save
              </button>
            </div>
          </div>

          <div
              class="comments"
              v-if="task.comments.length"
          >
            <div
                class="comments__item"
                v-for="comment in task.comments"
                :key="comment.id"
            >
              <div class="comments__left">
                <div class="comments__avatar avatar-wrapper">
              <span class="avatar">
                <small>{{ comment.author.name.slice(0, 1) }}</small>
                <small>{{ comment.author.surname.slice(0, 1) }}</small>
              </span>
                </div>
              </div>
              <div class="comments__right">
                <div class="comments__title">
                  <p>{{ comment.author.name }} {{ comment.author.surname }}</p><span>{{ comment.date }}</span>
                </div>
                <div class="comments__action">

                  <template v-if="comment.type === 'UPDATE_COMMENT'">
                    <small v-if="comment.updateType === 'Assignee'">
                      <span>{{ comment.updateType }}:</span>
                      <span>
                        <span class="comments__action-item comments__action-item--arrow">{{
                            comment.updateFrom.name
                          }}</span>
                        <span class="comments__action-item">{{ comment.updateTo.name }}</span>
                      </span>
                    </small>

                    <small v-else>
                      <span>{{ comment.updateType }}:</span>
                      <span>
                        <span class="comments__action-item comments__action-item--arrow">{{ comment.from.name }}</span>
                        <span class="comments__action-item">{{ comment.to.name }}</span>
                      </span>
                    </small>
                  </template>

                  <template v-else>
                    <p class="comments__text" v-html="urlify(comment.message)"></p>
                  </template>

                </div>
              </div>
            </div>
          </div>
        </div>

        <b-form class="form" @submit.prevent="addComment">
          <div class="form__item">
            <b-form-textarea
                class="form__textarea-field"
                type="text"
                placeholder="Write your comment"
                v-model="comment"
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
      <!-- /.task__left -->

      <div class="task__right">
        <h2 class="state">State:</h2>
        <div class="attributes attributes--task">
          <div class="attributes__item">
            <label class="attributes__label">Created by:</label>
            <span class="select select--disabled">{{ task.author.name }} {{ task.author.surname }}</span>
          </div>

          <form
              class="attributes__item"
              v-for="(item, name, index) in $root.attributes"
              :key="index"
              @change="updateTask(name)"
          >
            <label class="attributes__label">{{ name }}:</label>
            <select
                class="select"
                v-model="task[name].id"
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
                v-model="task.assignee.id"
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
    <!-- /.task -->
  </div>
  <!-- div -->
</template>

<script>
import UserService from '../services/UserService'
import TaskService from '../services/TaskService'
import CommentService from "../services/CommentService";

export default {
  name: 'Task',
  data() {
    return {
      users: [],
      task: {
        id: null,

        name: '',
        content: '',

        comments: [],

        project: {
          id: null,
          name: ''
        },

        type: {
          id: null,
          name: ''
        },
        priority: {
          id: null,
          name: ''
        },
        status: {
          id: null,
          name: ''
        },

        author: {
          id: null,
          name: '',
          surname: ''
        },
        assignee: {
          id: null,
          name: '',
          surname: ''
        },
      },

      isEdit: false,
      comment: ''
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
          })
          .catch(error => console.log(error.response))
    },
    async updateTask() {
      await TaskService.updateTask({
        id: this.task.id,
        name: this.task.name,
        content: this.task.content,
        assigneeId: +this.task.assignee.id,
        priorityId: +this.task.priority.id,
        statusId: +this.task.status.id,
        typeId: +this.task.type.id
      })
          .then(response => {
            this.task = {...response.data}
            console.log(response)
          })
          .catch(error => console.log(error))

      this.isEdit = false
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
    async addComment() {
      if (!this.comment.length) {
        return
      }

      await CommentService.addComment({
        content: this.comment,
        id: this.task.id
      })
          .then(response => {
            this.fetchTask()

            this.comment = ''
            console.log('addComment', response)
          })
          .catch(error => error)
    },
    action() {
      this.$router.push(`/project/${this.$route.params.projectId}`)
    },
    editTask() {
      this.isEdit = !this.isEdit
    },
    urlify(text) {
      let urlRegex = /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i;
      return text.replace(urlRegex, function (url) {
        return '<a style="color: #2193b0;" target="_blank" href="' + url + '">' + url + '</a>';
      })
    },

  },
  mounted() {
    this.fetchTask()
    this.fetchUsers()
  }
}
</script>

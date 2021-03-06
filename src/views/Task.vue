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
                v-b-modal.modal-alert
            ></b-button>
          </div>
        </div>

        <div class="task__content">
          <div
              v-if="!isEdit"
              class="task__content-wrapper horizontal-separate"
          >
            <div class="task__content-title">
              <span class="task__header-title">{{ task.name }}</span>
            </div>

            <div class="task__text">
              <p>{{ task.content }}</p>
            </div>
          </div>

          <b-form class="task__content-wrapper horizontal-separate" v-else>
            <b-form-group>
              <b-form-input
                  id="nameTask"
                  type="text"
                  v-model="$v.task.name.$model"
                  class="form__input-field"
                  :state="validateState('name')"
              ></b-form-input>

              <b-form-invalid-feedback
                  id="input"
                  v-if="!this.$v.task.name.required"
              >This field is required.
              </b-form-invalid-feedback>

              <b-form-invalid-feedback
                  id="input"
                  v-if="!this.$v.task.name.maxLength"
              >The name must be at most 140 characters long.
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group>
              <b-form-textarea
                  id="content"
                  type="text"
                  v-model="$v.task.content.$model"
                  class="form__textarea-field"
                  :state="validateState('content')"
              ></b-form-textarea>

              <b-form-invalid-feedback
                  id="textarea"
                  v-if="!this.$v.task.content.maxLength"
              >The content must be at most 1000 characters long.
              </b-form-invalid-feedback>
            </b-form-group>
            <button
                class="button w-25"
                @click.prevent="updateTask"
            >Save
            </button>
          </b-form>

          <Comment
              class="comments"

              @addComment="addComment"
              :comments="task.comments"
          />
        </div>


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

    <b-modal
        id="modal-alert"
        title="Warning"
        hide-footer
        title-class="text-center modal-title font-family--title"
        header-class="help-header"
    >
      <p class="my-4 d-flex justify-content-center font-family--text">
        Are you sure you want to delete this task?
      </p>
      <hr>
      <div class="d-flex justify-content-center">
        <b-button
            variant="outline-danger"
            @click.prevent="deleteTask"
            class="mr-3"
            size="lg"
        >Delete</b-button>
        <b-button
            variant="outline-success"
            class="ml-3"
            @click="$bvModal.hide('modal-alert')"
            size="lg"
        >Cancel</b-button>
      </div>
    </b-modal>

    <b-modal
        id="modal-task-delete"
        title="This task was deleted"
        title-class="text-center modal-title font-family--title"
        header-class="help-header"
        hide-header-close
        no-close-on-esc
        no-close-on-backdrop
        centered
        hide-footer
    >
      <div class="d-flex justify-content-center">
        <b-button
            size="lg"
            variant="outline-secondary"
            @click.prevent="taskDeleted">OK</b-button
        >
      </div>
    </b-modal>

  </div>
  <!-- div -->
</template>

<script>
import {validationMixin} from 'vuelidate'
import {maxLength, required} from 'vuelidate/lib/validators'
import UserService from '../services/UserService'
import TaskService from '../services/TaskService'
import CommentService from '../services/CommentService'
import Comment from '../components/Comment'
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'

export default {
  name: 'Task',
  mixins: [validationMixin],
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
      comment: '',
      socket: {},
      stompClient: {}
    }
  },
  components: {
    Comment
  },
  validations: {
    task: {
      name: {
        required,
        maxLength: maxLength(140)

      },
      content: {
        maxLength: maxLength(1000)
      }
    }
  },
  methods: {
    validateState(name) {
      const {$dirty, $error} = this.$v.task[name]
      return $dirty ? !$error : null
    },
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
      this.$v.task.$touch()
      if (this.$v.task.$anyError) {
        return
      }

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
              this.stompClient.unsubscribe('delete', () => {})
              this.$router.push(`/project/${this.$route.params.projectId}`)
            } else {
              console.log('Что-то пошло не так!');
            }
          })
    },
    taskDeleted() {
      this.$router.push(`/project/${ this.$route.params.projectId }`)
    },
    async addComment(content) {
      await CommentService.addComment({
        content: content,
        id: this.task.id
      })
          .then(response => {
            this.fetchTask()
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
    connect() {
      const options = {debug: false, protocols: Stomp.VERSIONS.supportedProtocols()}
      this.socket = new SockJS(`${this.$root.url}/ws`)
      this.stompClient = Stomp.over(this.socket, options)
      this.stompClient.connect(
          {},
          frame => {
            this.stompClient.subscribe(`/task/update/${this.$route.params.id}`, async () => {
              await this.fetchTask()
            })
            this.stompClient.subscribe(`/task/delete/${this.$route.params.id}`, async () => {
              this.$bvModal.show('modal-task-delete')
            }, { id: 'delete' })
          },
          error => {
            console.log(error)
          }
      )
    },
  },
  mounted() {
    this.fetchTask()
    this.fetchUsers()
    this.connect()
  },
  beforeDestroy() {
    this.stompClient.disconnect(() => {
      console.log('disconnect');
    })
  }
}
</script>

<style lang="scss">
  .font-family {
    &--title {
      display: inline-block;

      font-family: 'Roboto', sans-serif;
      font-weight: bold;

      position: absolute;
      left: 0;
      right: 0;

      margin: auto;
    }

    &--text {
      font-family: 'Comfortaa', sans-serif;
    }
  }

  .help-header {
    position: relative;
    min-height: 36px;
  }
</style>

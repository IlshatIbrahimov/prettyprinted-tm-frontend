<template>
  <div class="createTask">
    <header class="header">
      <h1 class="header__title">New task in - {{ project.name }}</h1>
    </header>

    <div class="createTask__content">
      <div class="createTask__left">
        <b-form
            class="form"
            @submit.prevent="submitHandler"
        >
          <b-form-group
              class="form__item"
              label="Name"
              label-for="Name task"
              label-class="form__label"
          >
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

          <b-form-group
              class="form__item"
              label="Content"
              label-for="content"
              label-class="form__label"
          >
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

          <div
              class="auth__invalid"
              v-if="!isAssignee"
          >
            <p>Please, pick assignee</p>
          </div>

          <div class="create-task__footer">
            <button
                class="button"
                type="submit"
            >Create
            </button>
          </div>
        </b-form>
      </div>

      <div class="createTask__right">
        <div class="attributes attributes--task">
          <div
              class="attributes__item"
              v-for="(item, name, index) in $root.attributes"
              :key="index"
          >
            <label
                class="attributes__label"
                :for="name"
            >{{ name }}:</label>
            <select
                :id="name"
                class="select"
                v-model="task.keys[name]"
            >
              <option
                  class="select__option"
                  v-for="(attr, idx) in item"
                  :key="idx"
                  :value="idx"
              >{{ attr.name }}
              </option>
            </select>
          </div>

          <div class="attributes__item">
            <label class="attributes__label" for="assignee">Assignee:</label>
            <select
                id="assignee"
                class="select"
                v-model="task.assigneeId"
            >
              <option
                  v-for="user in users"
                  :key="user.id"
                  :value=user.id
              >{{ user.name }} {{ user.surname }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '../services/UserService'
import ProjectService from '../services/ProjectService'
import TaskService from '../services/TaskService'
import {validationMixin} from 'vuelidate'
import {required, maxLength} from 'vuelidate/lib/validators'

export default {
  name: 'CreateTask',
  mixins: [validationMixin],
  data() {
    return {
      project: {
        id: null,
        name: '',
        taskList: []
      },
      task: {
        name: '',
        content: '',
        assigneeId: null,
        keys: {
          type: 0,
          priority: 0,
          status: 0
        }
      },
      users: [],
      isAssignee: true
    }
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
    async submitHandler() {
      this.$v.task.$touch()
      if (this.$v.task.$anyError) {
        return
      }
      if (this.task.assigneeId === null) {
        this.isAssignee = false
        return
      }

      this.isAssignee = true

      await TaskService.addTask({
        name: this.task.name,
        content: this.task.content,
        assigneeId: this.task.assigneeId,
        projectId: this.project.id,
        priorityId: this.task.keys.priority,
        typeId: this.task.keys.type,
        statusId: this.task.keys.status
      })
          .then(response => {
            console.log(response)
            this.$router.push(`/project/${response.data.project.id}/task-${response.data.id}`)
          })
          .catch(error => console.log(error.response))

    },
    async fetchUsers() {
      const res = await UserService.getAll()
          .then(response => response)
          .catch(error => console.log(error))

      this.users = res.data
    },
    async fetchProjectById() {
      const res = await ProjectService.getById(this.$route.params.id)
          .then(response => response)
          .catch(error => console.log(error))

      this.project = {...res.data}
    }
  },
  mounted() {
    this.fetchUsers()
    this.fetchProjectById()
  },
}
</script>

<style lang="scss">
</style>

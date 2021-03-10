<template>
  <div class="page">

    <div class="sidebar">
      <div class="sidebar__header">
        <h2 class="sidebar__title">Pretty Printed</h2>
      </div>

      <div class="sidebar__content">
        <div class="sidebar__content-item">
          <h3 class="sidebar__content-title">Projects <span>{{ projects.length }}</span></h3>
          <ul class="sidebar__list sidebar__list--project scroll">
            <li
                class="sidebar__list-item"
                v-for="(project, idx) in projects"
                :key="idx"
            >
              <router-link
                  tag="a"
                  :to="`/project/${project.id}`"
              >{{ project.name }}
              </router-link>
            </li>
          </ul>
          <button
              class="button sidebar__content-btn"
              v-b-modal.modal-create-project
          >Add project
          </button>
        </div>

        <div class="sidebar__content-item">
          <h3 class="sidebar__content-title">Co-Workers <span>{{ users.length }}</span></h3>
          <ul class="sidebar__list scroll">
            <li
                class="sidebar__list-item sidebar__list-item--users"
                v-for="(user, idx) in users"
                :key="idx"
            >
              <span class="avatar">
                <small>{{ user.name.slice(0, 1).toUpperCase() }}</small>
                <small>{{ user.surname.slice(0, 1).toUpperCase() }}</small>
              </span>
              <span class="sidebar__list-item-user">{{ user.name }} {{ user.surname }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- /.sidebar__content -->

      <div class="sidebar__footer">
        <div class="sidebar__footer-avatar">
          <span class="avatar">
            <small>{{ getAuthUser.name.slice(0, 1).toUpperCase() }}</small>
            <small>{{ getAuthUser.surname.slice(0, 1).toUpperCase() }}</small>
          </span>
        </div>
        <div class="sidebar__footer-title">{{ getAuthUser.name }} {{ getAuthUser.surname }}</div>
        <div class="sidebar__footer-menu">
          <router-link
              class="sidebar__footer-menu--home"
              to="/"
              tag="button"
          ></router-link>
          <button
              class="sidebar__footer-menu--exit"
              @click="logout"
          ></button>
        </div>
      </div>
      <!-- /.sidebar__footer -->
    </div><!-- /.sidebar -->

    <div class="modal-create-project">
      <b-modal
          ref="modal-create-project"
          id="modal-create-project"
          hide-footer
          title="Create project"
          title-tag="h3"
          title-class="sidebar__title"
          centered
      >
        <b-form
            @submit.stop.prevent="onSubmit"
        >
          <b-form-group
              label="Name"
              label-for="projectName"
              label-class="project__label"
          >
            <b-form-input
                id="projectName"
                name="projectName"
                v-model="$v.project.name.$model"
                :state="validateState('name')"
                autocomplete="off"
            ></b-form-input>

            <b-form-invalid-feedback
                id="input-projectName"
                v-if="!this.$v.project['name'].required"
            >This field will be required!
            </b-form-invalid-feedback>

            <b-form-invalid-feedback
                id="input-projectName"
                v-else-if="!this.$v.project['name'].minLength"
            >The project name must be at least 3 characters long.
            </b-form-invalid-feedback>

            <b-form-invalid-feedback
                id="input-projectName"
                v-else-if="!this.$v.project['name'].maxLength"
            >The project name must be at most 100 characters long.
            </b-form-invalid-feedback>

            <b-button
                type="submit"
                class="auth__btn modal-create-project-btn mt-3"
            >Create
            </b-button>
          </b-form-group>
        </b-form>

        <div
            class="auth__invalid"
            v-if="errorNameProject"
        >
          <p>This name already used!</p>
        </div>

      </b-modal>
    </div><!-- /.modal-create-project -->

    <div class="main scroll">
      <router-view/>
    </div><!-- main -->

  </div><!-- /.page -->
</template>

<script>
import ProjectService from "../services/ProjectService"
import UserService from "../services/UserService";
import {validationMixin} from "vuelidate"
import {required, minLength, maxLength} from "vuelidate/lib/validators"

export default {
  name: 'MainLayout',
  mixins: [validationMixin],
  data() {
    return {
      project: {
        name: ''
      },
      projects: [],
      user: {
        name: '',
        surname: ''
      },
      users: [],
      errorNameProject: false
    }
  },
  validations: {
    project: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(100)
      },
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('jwt')
      localStorage.removeItem('user')

      this.$router.push('/auth')
    },
    validateState(name) {
      const {$dirty, $error} = this.$v.project[name];
      return $dirty ? !$error : null;
    },
    async fetchProjects() {
      const res = await ProjectService.getAll()
          .then(response => response)
          .catch(error => console.log(error.response))

      this.projects = [...res.data]
    },
    async fetchUsers() {
      const res = await UserService.getAll()
          .then(response => response)
          .catch(error => console.log(error.response))

      this.users = [...res.data]
    },
    async addProject(project) {
      return await ProjectService.addProject(project)
          .then(response => {
            this.$router.push(`/project/${response.data.id}`)
            this.errorNameProject = false
            console.log('new project', response)
          })
          .catch(error => {
            if (error.response.status === 409) {
              console.log('wrong 409')
              this.errorNameProject = true
            }

            console.log(error.response)
            return error
          })
    },
    onSubmit() {
      this.$v.project.$touch()
      if (this.$v.project.$anyError) {
        return
      }

      this.addProject(this.project)
          .then(() => {
            if (!this.$v.project.$invalid && !this.errorNameProject) {
              this.$refs['modal-create-project'].hide()
              this.fetchProjects()
              this.project.name = ''
            }
          })
    }
  },
  mounted() {
    this.fetchProjects()
    this.fetchUsers()

    this.$root.$on('bv::modal::hide', () => {
      this.$nextTick(() => {
        this.$v.$reset()
        this.errorNameProject = false
        this.project.name = ''
      })
    })
  },
  computed: {
    getAuthUser() {
      return this.user = JSON.parse(localStorage.getItem('user'))
    }
  }
}
</script>

<style lang="scss">
.modal-create-project-btn {
  font-size: 1.6rem !important;
}
</style>

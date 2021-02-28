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
            ><router-link
                tag="a"
                :to="`/project/${project.id}`"
            >{{ project.name }}</router-link>
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
                <small>A</small>
                <small>B</small>
              </span>
              <span class="sidebar__list-item-user">{{ user.name }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar__footer">
        <div class="sidebar__footer-avatar">
          <span class="avatar">
            <small>М</small>
            <small>Б</small>
          </span>
        </div>
        <div class="sidebar__footer-title">Марсель Белялов</div>
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
    </div>

    <div>
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
              label="Name project"
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
            >This field will be min length 3 symbols.
            </b-form-invalid-feedback>

            <b-form-invalid-feedback
                id="input-projectName"
                v-else-if="!this.$v.project['name'].maxLength"
            >This field will be max length 100 symbols.
            </b-form-invalid-feedback>

            <b-button
                type="submit"
                class="auth__btn modal__btn mt-3"
            >Create
            </b-button>
          </b-form-group>
        </b-form>
      </b-modal>
    </div>

    <div class="main scroll">
      <router-view/>
    </div>
  </div>
</template>

<script>
import ProjectService from "../services/ProjectService"
import {validationMixin} from "vuelidate"
import {required, minLength, maxLength} from "vuelidate/lib/validators"

export default {
  name: 'MainLayout',
  mixins: [validationMixin],
  data() {
    return {
      projects: [],
      project: {name: ''},
      users: [
        {name: 'Айнур Гимадеев'},
        {name: 'Ильшат Ибрагимов'},
        {name: 'Ильгам Хасанов'},
        {name: 'Вокуев Александр'},
        {name: 'Демьянова Ульяна'},
        {name: 'Белялов Марсель'},
      ]
    }
  },
  validations: {
    project: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(100)
      }
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('jwt')
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

      this.projects = res.data
    },
    async addProject(project) {
      const res = await ProjectService.addProject(project)
          .then(response => response)
          .catch(error => console.log(error.response))

      console.log(res)
    },
    onSubmit() {
      this.$v.project.$touch()
      if (this.$v.project.$anyError) {
        return
      }

      if (!this.$v.project.$invalid) this.$refs['modal-create-project'].hide()

      this.addProject(this.project).then(() => this.fetchProjects())
      this.project.name = ''
    }
  },
  mounted() {
    this.fetchProjects()
    this.$root.$on('bv::modal::hide', () => {
      this.$nextTick(() => { this.$v.$reset() })
    })
  }
}
</script>

<style lang="scss">
.modal__btn {
  font-size: 1.6rem!important;
}
</style>

<template>
  <b-container class="auth">
    <div class="auth__wrapper">

      <Login
          v-if="isActiveForm('login')"
          :error="error"
          @formHandler="formHandler"
          @loginHandler="loginHandler"
      />

      <Register
          v-if="isActiveForm('register')"
          :errorEmail="errorEmail"
          @formHandler="formHandler"
          @registerHandler="registerHandler"
      />

    </div>
  </b-container>
</template>

<script>
import Login from '@/components/AuthLogin.vue'
import Register from '@/components/AuthRegister.vue'
import AuthService from '@/services/AuthService'

export default {
  name: 'Auth',
  data() {
    return {
      activeForm: 'login',
      error: false,
      errorEmail: false,
    }
  },
  components: {
    Login,
    Register
  },
  methods: {
    formHandler(form) {
      form === 'login' ? this.activeForm = 'register' : this.activeForm = 'login'
    },
    isActiveForm(form) {
      return form === this.activeForm
    },
    async loginHandler(user) {
      await AuthService.login(user)
          .then(response => {
            localStorage.setItem('jwt', JSON.stringify(response.data.jwt))
            localStorage.setItem('name', response.data.user.name)
            localStorage.setItem('surname', response.data.user.surname)

            // this.$root.name = response.data.user.name
            // this.$root.surname = response.data.user.surname

            if (response.status === 200) {
              this.error = false
              this.$router.push('/')
            }
          })
          .catch(error => {
            if (error.response.status === 401) {
              this.error = true
            }
          })
    },
    async registerHandler(user) {
      await AuthService.register(user)
          .then(response => {
            localStorage.setItem('jwt', JSON.stringify(response.data.jwt))
            localStorage.setItem('name', response.data.user.name)
            localStorage.setItem('surname', response.data.user.surname)

            if (response.status === 200) {
              this.errorEmail = false
              this.$router.push('/')
            }
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.errorEmail = true
            }
          })
    }
  }
}
</script>

<template>
  <b-container class="auth">
    <div class="auth__wrapper">

<!--      <img class="auth__logo" src="../assets/img/logo.png" alt="logo">-->

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
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import http from '@/http-auth'

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
      await http.post('/auth', user)
        .then(response => {
          localStorage.setItem('jwt', JSON.stringify(response.data.jwt))
          if(response.status === 200) {
            this.error = false
            this.$router.push('/')
          }
        })
      .catch(error => {
        if(error.response.status === 403) {
          this.error = true
        }
        console.log(error.response.data.message)
      })
    },
    async registerHandler(user) {
      await http.post('/register', user)
        .then(response => {
          localStorage.setItem('jwt', JSON.stringify(response.data.jwt))
          if(response.status === 200) {
            this.errorEmail = false
            this.$router.push('/')
          }
        })
      .catch(error => {
        if(error.response.status === 422) {
          this.errorEmail = true
        }
        console.log(error.response)
      })
    }
  }
};
</script>

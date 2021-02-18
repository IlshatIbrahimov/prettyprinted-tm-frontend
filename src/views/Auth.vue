<template>
  <b-container class="auth">
    <div class="auth__wrapper">

<!--      <img class="auth__logo" src="../assets/img/logo.png" alt="logo">-->
      <Login
          v-if="isActiveForm('login')"
          @formHandler="formHandler"
          @loginHandler="loginHandler"
      />

      <Register
          v-if="isActiveForm('register')"
          @formHandler="formHandler"
          @registerHandler="registerHandler"
      />

    </div>
  </b-container>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'Auth',
  data() {
    return {
      activeForm: 'register'
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
    loginHandler(user) {
      console.log('Log in', user)
    },
    registerHandler(user) {
      console.log('Register', user)
    }
  }
};
</script>

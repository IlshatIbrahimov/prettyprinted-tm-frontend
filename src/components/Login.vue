<template>
  <b-form @submit.stop.prevent="onSubmit">
    <h1 class="auth__title">Sign In</h1>

    <b-form-group
        label="Email"
        label-for="email"
        label-class="auth__label"
    >
      <b-form-input
          id="email"
          name="email"
          v-model="$v.user.email.$model"
          :state="validateState('email')"
      ></b-form-input>

      <b-form-invalid-feedback
          id="input-email"
          v-if="!this.$v.user['email'].required"
      >This field will be required!
      </b-form-invalid-feedback>

      <b-form-invalid-feedback
          id="input-email"
          v-else-if="!this.$v.user['email'].email"
      >This field will be email!
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
        label="Password"
        label-for="password"
        label-class="auth__label"
    >
      <b-form-input
          id="password"
          name="password"
          type="password"
          v-model="$v.user.password.$model"
          :state="validateState('password')"
      ></b-form-input>

      <b-form-invalid-feedback
          id="input-password"
          v-if="!this.$v.user['password'].required"
      >This field will be required!
      </b-form-invalid-feedback>
    </b-form-group>

    <div
        class="auth__invalid"
        v-if="error"
    >
      <p>Wrong credentials <br> Invalid username or password</p>
    </div>

    <div class="auth__footer">
      <b-button
          type="submit"
          class="auth__btn"
      >Log In</b-button>

      <span
          class="auth__switch"
          @click="formHandler('login')"
      >Register</span>
    </div>
  </b-form>
</template>

<script>
import {validationMixin} from "vuelidate";
import {email, maxLength, minLength, required} from "vuelidate/lib/validators";

export default {
  name: 'Login',
  props: {
    error: {
      type: Boolean,
      default: false
    }
  },
  mixins: [validationMixin],
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  validations: {
    user: {
      email: {
        email,
        required
      },
      password: {
        required,
      }
    }
  },
  methods: {
    formHandler(form) {
      this.$emit('formHandler', form)
    },
    validateState(name) {
      const {$dirty, $error} = this.$v.user[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        return;
      }

      this.$emit('loginHandler', this.user)

      this.user = {
        email: '',
        password: ''
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
}
</script>

<template>
  <b-form @submit.stop.prevent="onSubmit">
    <h1 class="auth__title">Sign Up</h1>

    <div
        class="auth__invalid"
        v-if="errorEmail"
    >
      <p>This email address already registered!</p>
    </div>

    <b-form-group
        label="Name"
        label-for="name"
        label-class="auth__label"
    >
      <b-form-input
          id="name"
          name="name"
          v-model="$v.user.name.$model"
          :state="validateState('name')"
      ></b-form-input>

      <b-form-invalid-feedback
          id="input-name"
          v-if="!this.$v.user['name'].required"
      >This field will be required!
      </b-form-invalid-feedback>

      <b-form-invalid-feedback
          id="input-name"
          v-else-if="!this.$v.user['name'].maxLength"
      >This field will have max length 30 characters!
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
        label="Surname"
        label-for="surname"
        label-class="auth__label"
    >
      <b-form-input
          id="surname"
          name="surname"
          v-model="$v.user.surname.$model"
          :state="validateState('surname')"
      ></b-form-input>

      <b-form-invalid-feedback
          id="input-surname"
          v-if="!this.$v.user['surname'].required"
      >This field will be required!
      </b-form-invalid-feedback>

      <b-form-invalid-feedback
          id="input-email"
          v-else-if="!this.$v.user['surname'].maxLength"
      >This field will have max length 30 characters!
      </b-form-invalid-feedback>
    </b-form-group>

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

      <b-form-invalid-feedback
          id="input-password"
          v-else-if="!this.$v.user['password'].minLength"
      >This field will have min 8 characters!
      </b-form-invalid-feedback>

      <b-form-invalid-feedback
          id="input-password"
          v-else-if="!this.$v.user['password'].maxLength"
      >This field will have max 30 characters!
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
        label="Confirm password"
        label-for="confirm-password"
        label-class="auth__label"
    >
      <b-form-input
          id="confirm-password"
          name="confirm-password"
          type="password"
          v-model="$v.user.confirmPassword.$model"
          :state="validateState('confirmPassword')"
      ></b-form-input>

      <b-form-invalid-feedback
          id="input-confirm-password"
          v-if="!this.$v.user.confirmPassword.equalPassword"
      >Those passwords didn`t match. Try again.
      </b-form-invalid-feedback>

      <b-form-invalid-feedback
          id="input-confirm-password"
          v-if="!this.$v.user['confirmPassword'].required"
      >This field will be required!
      </b-form-invalid-feedback>

      <b-form-invalid-feedback
          id="input-confirm-password"
          v-else-if="!this.$v.user['confirmPassword'].minLength"
      >This field will have min 8 characters!
      </b-form-invalid-feedback>
    </b-form-group>

    <div class="auth__footer">
      <b-button
          type="submit"
          class="auth__btn"
      >Register
      </b-button>

      <span
          class="auth__switch"
          @click="formHandler('register')"
      >Log In</span>
    </div>
  </b-form>
</template>


<script>
import {validationMixin} from "vuelidate";
import {email, maxLength, minLength, required} from "vuelidate/lib/validators";

const equalPassword = (value, vm) => value === vm.password

export default {
  name: 'Auth-Register',
  mixins: [validationMixin],
  data() {
    return {
      user: {
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: null
      },
    };
  },
  props: {
    errorEmail: {
      type: Boolean,
      default: false
    }
  },
  validations: {
    user: {
      name: {
        maxLength: maxLength(30),
        required,
      },
      surname: {
        maxLength: maxLength(30),
        required,
      },
      email: {
        email,
        required
      },
      password: {
        minLength: minLength(8),
        maxLength: maxLength(50),
        required
      },
      confirmPassword: {
        required,
        minLength: minLength(8),
        equalPassword
      }
    },
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

      this.$emit('registerHandler', {
        name: this.user.name,
        surname: this.user.surname,
        email: this.user.email,
        password: this.user.password,
      })

      this.user = {
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
}
</script>

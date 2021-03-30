<template>
  <div class="private">

    <header class="header private__header">
      <template
          v-for="to in privateMessage.users"
      >
        <h1
            class="header__title private__header-title"
            v-if="getAuthUser.id !== to.id"
        >
          {{ to.name }} {{to.surname}}
        </h1>
      </template>
    </header>

    <div class="private__wrapper scroll" ref="block">
      <template v-for="message in privateMessage.privateMessages">
        <div
            v-if="message.to.id !== getAuthUser.id"
            class="private__msg private__msg--own"
            :key="message.date"
        >
          <div class="d-flex">
            <span
                class="private__msg-text private__msg-text--own"
                v-html="urlify(message.message)"
            ></span>
          </div>
        </div>
        <div
            v-else
            class="private__msg"
        >
          <div class="d-flex align-content-center">
          <span class="avatar">
            <small>{{ message.from.name.slice(0, 1).toUpperCase() }}</small>
            <small>{{ message.from.surname.slice(0, 1).toUpperCase() }}</small>
          </span>
            <span
                class="ml-4 private__msg-text"
                v-html="urlify(message.message)"
            ></span>
          </div>
        </div>
      </template>
    </div>

    <div class="private__footer">
      <b-form
          class="d-flex align-items-center w-100"
          @submit.prevent="sendMessage"
          @keyup.enter.exact="sendMessage"
          @keydown.enter.exact.prevent
      >
        <b-form-group class="w-100">
          <b-form-textarea
              placeholder="Напишите сообщение..."
              v-model="message"
              class="private__textarea"
              no-resize
          ></b-form-textarea>
        </b-form-group>

        <b-btn
            class="private__footer-btn"
            type="submit"
        ></b-btn>
      </b-form>
    </div>

  </div>
</template>

<script>
import PrivateService from "../services/PrivateService"
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'
import hyphen from "../middlewares/hyphen";

export default {
  name: 'Private',
  data() {
    return {
      privateMessage: {
        id: null,
        privateMessages: [],
        users: []
      },
      message: '',
      socket: {},
      user: [],
      stompClient: {}
    }
  },
  methods: {
    connect() {
      const options = {
        debug: true,
        protocols: Stomp.VERSIONS.supportedProtocols()
      }
      this.socket = new SockJS(`${this.$root.url}/ws`)
      this.stompClient = Stomp.over(this.socket, options)

      this.stompClient.connect(
          {},
          frame => {
            console.log(`/private/${this.privateMessage.id}`)
            this.stompClient.subscribe(`/private/${this.privateMessage.id}`, async () => {
              await this.fetchGetPrivate()
            })
          },
          error => {
            console.log(error)
          }
      )
    },
    async fetchGetPrivate() {
      const res = await PrivateService.getPrivate(this.$route.params.id)
        .then(response => {
          this.privateMessage = {...response.data}
          console.log('fetchGetPrivate', this.privateMessage)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    async sendMessage() {
      if (!this.message.length) {
        return
      }

      const body = {
        dialogId: this.privateMessage.id,
        message: this.message
      }

      const res = await PrivateService.setPrivate(body)
        .then(response => {
          console.log('sendMessage', response)
          this.message = ''
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    urlify(text) {
      let message = hyphen(text);

      let urlRegex = /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i;
      return message.replace(urlRegex, function (url) {

        if (!(url.indexOf('//') + 1)) {
          url = 'https://' + url
        }

        return '<a style="color: #2193b0;" target="_blank" href="' + url + '">' + url + '</a>';
      })
    },
  },
  computed: {
    getAuthUser() {
      return this.user = JSON.parse(localStorage.getItem('user'))
    }
  },
  async mounted() {
    await this.fetchGetPrivate()
    await this.connect()
  },
  beforeRouteUpdate(to, from, next) {
    this.stompClient.disconnect(() => {
      console.log('disconnect');
    })
    next()

    this.connect()
    this.fetchGetPrivate()
  },
  beforeDestroy() {
    this.stompClient.disconnect(() => {
      console.log('disconnect');
    })
  },
  watch: {
    privateMessage() {
      setTimeout(() => {
        this.$refs.block.scrollTop = this.$refs.block.scrollHeight;
      });
    }
  }
}
</script>

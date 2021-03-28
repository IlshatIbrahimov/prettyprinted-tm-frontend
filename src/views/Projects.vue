<template>
  <div class="project">

    <header class="header">
      <h1
          class="header__title"
          :title="project.name"
      >{{ project.name }}</h1>
      <nav class="nav">
        <ul class="nav__list">
          <li
              class="nav__list-item"
              :class="{active: isActive('tasks')}"
              @click="setActive('tasks')"
          >Tasks
          </li>
          <li
              class="nav__list-item"
              :class="{active: isActive('messages')}"
              @click="setActive('messages')"
          >Messages
          </li>
        </ul>
      </nav>
    </header>

    <!-- Tasks -->
    <div
        class="project__content tasks"
        :class="{show: isActive('tasks')}"
    >
      <Search
          @filter="filter"
          @reset="reset"

          :users="users"
      />

      <Tasks
          v-if="tasks.length"
          :tasks="tasks"
      />
      <div
          v-else-if="flag"
          class="tasks__not-found"
      >
        <p>Sorry, no matches were found for your query.</p>
        <div class="tasks__cat">
          <img src="../assets/img/cat.jpg" alt="sad cat">
        </div>
      </div>
      <div v-else>
        <div class="loader">
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__ball"></div>
        </div>
      </div>

      <div class="project__footer">
        <router-link
            class="button mt-5"
            tag="button"
            :to="`${project.id}/createTask`"
        >Add task
        </router-link>
      </div>
    </div>

    <!-- Messages -->
    <Comment
        class="comments comments--messages"
        :class="{show: isActive('messages')}"

        @addComment="addComment"
        :comments="project.comments"
    />
  </div>
</template>

<script>
import ProjectService from '../services/ProjectService'
import UserService from '../services/UserService'
import CommentService from '../services/CommentService'
import Search from '../components/Search'
import Tasks from '../components/Tasks'
import Comment from '../components/Comment'
import FilterTasks from '../middlewares/filter'
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'

export default {
  name: 'Projects',
  data() {
    return {
      project: {
        id: null,
        name: '',
        tasks: [],
        comments: []
      },
      users: [],

      filterOptions: {},
      foundTasks: [],
      flag: false,

      active: 'tasks',

      socket: {},
      stompClient: {}
    }
  },
  components: {
    Search,
    Tasks,
    Comment
  },
  methods: {
    isActive(tab) {
      return this.active === tab
    },
    setActive(tab) {
      this.active = tab
    },
    async fetchProject() {
      const res = await ProjectService.getById(this.$route.params.id)
          .then(response => response)
          .catch(error => console.log(error.response))

      this.project = {...res.data}
    },
    async fetchUsers() {
      const res = await UserService.getAll()
          .then(response => response)
          .catch(error => console.log(error.response))

      this.users = [...res.data]
    },
    async addComment(content) {
      await CommentService.addMessage({
        content: content,
        id: this.project.id
      })
          .then(response => {
            this.fetchProject()
            return response
          })
          .catch(error => error)
    },
    filter(filterOptions) {
      this.foundTasks = [...this.project.tasks]

      if (filterOptions.valueAttr === 'default') {
        delete this.filterOptions[filterOptions.name]
      } else {
        this.filterOptions[filterOptions.name] = filterOptions.valueAttr
      }

      this.foundTasks = FilterTasks(this.foundTasks, this.filterOptions)
      this.flag = !!Object.keys(this.filterOptions).length
    },
    reset() {
      this.filterOptions = {}
      this.foundTasks = []
      this.flag = false
    },
    connect() {
      const options = {debug: false, protocols: Stomp.VERSIONS.supportedProtocols()}
      this.socket = new SockJS(`${this.$root.url}/ws`)
      this.stompClient = Stomp.over(this.socket, options)
      this.stompClient.connect(
          {},
          frame => {
            this.stompClient.subscribe(`/project/update/${this.$route.params.id}`, async () => {
              await this.fetchProject()
            })
          },
          error => {
            console.log(error)
          }
      )
    },
  },
  mounted() {
    this.fetchProject()
    this.fetchUsers()
    this.connect()
  },
  beforeRouteUpdate(to, from, next) {
    this.reset()
    next()
    this.fetchProject()
  },
  beforeDestroy() {
    this.stompClient.disconnect(() => {
      console.log('disconnect');
    })
  },
  computed: {
    tasks() {
      return this.foundTasks.length || this.flag ? this.foundTasks : this.project.tasks
    }
  }
}
</script>

<style lang="scss" scoped>
.show {
  display: block;
}
</style>

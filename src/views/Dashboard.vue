<template>
  <div class="dashboard">
    <header class="header">
      <h1 class="header__title">Dashboard</h1>
    </header>

    <div class="dashboard__content tasks">
      <Search
          @filter="filter"
          @reset="reset"
      />

      <Tasks
          v-if="Tasks.length"
          :tasks="Tasks"
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
    </div>
  </div>

</template>

<script>
import Search from '../components/Search'
import Tasks from '../components/Tasks'
import TaskService from '../services/TaskService'
import FilterTasks from '../middlewares/filter'
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'

export default {
  data() {
    return {
      tasks: [],
      flag: false,
      foundTasks: [],
      filterOptions: {},
      user: {
        name: '',
        surname: '',
        id: null
      },
      socket: {},
      stompClient: {}
    }
  },
  components: {
    Search,
    Tasks
  },
  methods: {
    async getTasks() {
      const res = await TaskService.getByAuthUser()
          .then(response => response)
          .catch(error => console.log(error.response))

      this.tasks = res.data
    },
    filter(filterOptions) {
      this.foundTasks = [...this.tasks]
      this.filterOptions[filterOptions.name] = filterOptions.valueAttr

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
            this.stompClient.subscribe(`/user/assignee/${this.getAuthUser.id}`, async () => {
              await this.getTasks()
            })
          },
          error => {
            console.log(error)
          }
      )
    },
  },
  mounted() {
    this.getTasks()
    this.connect()
  },
  beforeDestroy() {
    this.stompClient.disconnect(() => {
      console.log('disconnect');
    })
  },
  computed: {
    Tasks() {
      return this.foundTasks.length || this.flag ? this.foundTasks : this.tasks
    },
    getAuthUser() {
      console.log(JSON.parse(localStorage.getItem('user')))
      return this.user = JSON.parse(localStorage.getItem('user'))
    }
  }
}
</script>

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
      <div v-else>Loading...</div>
    </div>
  </div>

</template>

<script>
import Search from '../components/Search'
import Tasks from '../components/Tasks'
import TaskService from '../services/TaskService'
import FilterTasks from '../middlewares/filter'

export default {
  data() {
    return {
      tasks: [],
      flag: false,
      foundTasks: [],
      filterOptions: {}
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
    }
  },
  mounted() {
    this.getTasks()
  },
  computed: {
    Tasks() {
      return this.foundTasks.length || this.flag ? this.foundTasks : this.tasks
    }
  }
}
</script>

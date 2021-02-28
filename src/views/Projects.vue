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
              :class="{active: true}"
          >Tasks</li>
          <li
              class="nav__list-item"
              :class="{active: false}"
          >Messages</li>
        </ul>
      </nav>
    </header>

    <div class="project__content tasks">
      <Search
          @filter="filter"
          @reset="reset"
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
      <div v-else>Loading...</div>

      <div class="project__footer">
        <button class="button mt-5">Add task</button>
      </div>
    </div>

  </div>
</template>

<script>
import ProjectService from '../services/ProjectService'
import Search from '../components/Search'
import Tasks from '../components/Tasks'

import FilterTasks from '../middlewares/filter'

export default {
  name: 'Projects',
  data() {
    return {
      project: {
        id: null,
        name: '',
        taskList: []
      },
      foundTasks: [],
      flag: false,

      filterOptions: {}
    }
  },
  components: {
    Search,
    Tasks
  },
  methods: {
    async getProject() {
      const res = await ProjectService.getById(this.$route.params.id)
          .then(response => response)
          .catch(error => console.log(error.response))

      this.project = { ...res.data }
    },
    filter(filterOptions) {
      this.foundTasks = [ ...this.project.taskList ]
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
    this.getProject()
  },
  computed: {
    tasks() {
      return this.foundTasks.length || this.flag ? this.foundTasks : this.project.taskList
    }
  }
}
</script>

<style lang="scss"></style>

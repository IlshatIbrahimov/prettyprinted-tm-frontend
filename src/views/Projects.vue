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
        <router-link
            class="button mt-5"
            tag="button"
            :to="`${project.id}/createTask`"
        >Add task
        </router-link>
      </div>
    </div>

    <!-- Messages -->
    <div
        class="comments comments--messages"
        :class="{show: isActive('messages')}"
    >

      <div class="comments__item">
        <div class="comments__left">
          <div class="comments__avatar avatar-wrapper">
              <span class="avatar">
                <small>М</small>
                <small>Б</small>
              </span>
          </div>
        </div>
        <div class="comments__right">
          <div class="comments__title comments__title--project">
            <p>Марсель Белялов</p><span>1 марта</span>
          </div>
          <div class="comments__action">
            <p class="comments__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
              безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
              распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов
              Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной
              вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
          </div>
        </div>
      </div>

      <div class="comments__item">
        <div class="comments__left">
          <div class="comments__avatar avatar-wrapper">
              <span class="avatar">
                <small>М</small>
                <small>Б</small>
              </span>
          </div>
        </div>
        <div class="comments__right">
          <div class="comments__title comments__title--project">
            <p>Марсель Белялов</p><span>1 марта</span>
          </div>
          <div class="comments__action">
            <p class="comments__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
              безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
              распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов
              Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной
              вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div class="comments__item">
        <div class="comments__left">
          <div class="comments__avatar avatar-wrapper">
              <span class="avatar">
                <small>М</small>
                <small>Б</small>
              </span>
          </div>
        </div>
        <div class="comments__right">
          <div class="comments__title comments__title--project">
            <p>Марсель Белялов</p><span>1 марта</span>
          </div>
          <div class="comments__action">
            <p class="comments__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
              безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
              распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов
              Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной
              вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div class="comments__item">
        <div class="comments__left">
          <div class="comments__avatar avatar-wrapper">
              <span class="avatar">
                <small>М</small>
                <small>Б</small>
              </span>
          </div>
        </div>
        <div class="comments__right">
          <div class="comments__title comments__title--project">
            <p>Марсель Белялов</p><span>1 марта</span>
          </div>
          <div class="comments__action">
            <p class="comments__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
              безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
              распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов
              Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной
              вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div class="comments__item">
        <div class="comments__left">
          <div class="comments__avatar avatar-wrapper">
              <span class="avatar">
                <small>М</small>
                <small>Б</small>
              </span>
          </div>
        </div>
        <div class="comments__right">
          <div class="comments__title comments__title--project">
            <p>Марсель Белялов</p><span>1 марта</span>
          </div>
          <div class="comments__action">
            <p class="comments__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
              безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
              распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов
              Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной
              вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div class="comments__item">
        <div class="comments__left">
          <div class="comments__avatar avatar-wrapper">
              <span class="avatar">
                <small>М</small>
                <small>Б</small>
              </span>
          </div>
        </div>
        <div class="comments__right">
          <div class="comments__title comments__title--project">
            <p>Марсель Белялов</p><span>1 марта</span>
          </div>
          <div class="comments__action">
            <p class="comments__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
              безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
              распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов
              Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной
              вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <b-form class="form">
        <div class="form__item">
          <b-form-textarea
              class="form__textarea-field"
              type="text"
              placeholder="Write your message"
          ></b-form-textarea>
        </div>

        <div class="comments__footer">
          <button
              class="button comments__btn"
              type="submit"
          >Add message
          </button>
        </div>
      </b-form>

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
      filterOptions: {},
      active: 'tasks'
    }
  },
  components: {
    Search,
    Tasks
  },
  methods: {
    isActive(tab) {
      return this.active === tab
    },
    setActive(tab) {
      this.active = tab
    },
    async getProject() {
      const res = await ProjectService.getById(this.$route.params.id)
          .then(response => response)
          .catch(error => console.log(error.response))

      this.project = {...res.data}
    },
    filter(filterOptions) {
      this.foundTasks = [...this.project.taskList]
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
  beforeRouteUpdate(to, from, next) {
    this.reset()
    next()
    this.getProject()
  },
  computed: {
    tasks() {
      return this.foundTasks.length || this.flag ? this.foundTasks : this.project.taskList
    }
  }
}
</script>

<style lang="scss" scoped>
.show {
  display: block;
}
</style>

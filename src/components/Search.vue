<template>
  <div
      class="search"
      tabindex="0"
  >
    <input
        class="search__input"
        :class="{'search__input--fix': search === ''}"
        type="text"
        placeholder="Search"
        v-model="search"
        @input="findTasks"
    >
    <div
        class="search__options"
        :class="{'search__options--fix': search === ''}"
    >
      <button
          v-if="search !== ''"
          class="search__options-btn search__options-btn--clear"
          @click="clearSearch"
      >
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="clear" d="M18.2969 2.70313L16.2969 0.71875L9.5 7.51563L2.6875 0.71875L0.703125 2.70313L7.5 9.51563L0.71875 16.2969L2.70313 18.2969L9.5 11.5L16.2969 18.3125L18.2969 16.3125L11.4844 9.51563L18.2969 2.70313Z"/>
        </svg>
      </button>
      <button
          class="search__options-btn search__options-btn--filter"
          @click="filterShow = !filterShow"
      >
        <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="filter" d="M0.5625 5.90625H17.75V3.71875H0.5625V5.90625ZM20.875 0.125C20.0121 0.125 19.3125 0.824555 19.3125 1.6875V7.9375C19.3125 8.80044 20.0121 9.5 20.875 9.5C21.7379 9.5 22.4375 8.80044 22.4375 7.9375V1.6875C22.4375 0.824555 21.7379 0.125 20.875 0.125ZM11.5 13.0938V11.0625C11.5 10.1996 10.8004 9.5 9.9375 9.5C9.07456 9.5 8.375 10.1996 8.375 11.0625V17.3125C8.375 18.1754 9.07456 18.875 9.9375 18.875C10.8004 18.875 11.5 18.1754 11.5 17.3125V15.2812H22.4375V13.0938H11.5ZM0.5625 15.2812H6.8125V13.0938H0.5625V15.2812Z"/>
        </svg>
      </button>
    </div>


    <!-- Filters -->
    <div
        v-if="filterShow"
        class="attributes"
    >
      <!-- States select -->
      <div
          class="attributes__item"
          v-for="(item, name, index) in this.$root.attributes"
          :key="index"
      >
        <label
            class="attributes__label"
            :for="name"
        >{{ name }}:</label>
        <select
            :id="name"
            class="select"
            v-model="keys[name]"
            @change="filter(name, keys[name])"
            ref="select"
        >
          <option value="default" selected>Any</option>
          <option
              class="select__option"
              v-for="(attr, idx) in item"
              :key="idx"
              :value="idx"
          >{{ attr.name }}</option>
        </select>
      </div>


      <!-- Assignee select -->
      <div
          v-if="users.length"
          class="attributes__item"
      >
        <label
            class="attributes__label"
            for="assignee"
        >Assignee:</label>
        <select
            id="assignee"
            class="select"
            v-model="keys['assignee']"
            @change="filter('assignee', keys['assignee'])"
            ref="select"
        >
          <option value="default" selected>Any</option>
          <option
              class="select__option"
              v-for="user in users"
              :key="user.id"
              :value="user.id"
          >{{ user.name }} {{user.surname}}</option>
        </select>
      </div>

      <button
          class="button mt-5"
          @click.prevent="reset"
      >Reset all</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      search: '',
      assignee: {
        id: 'default',
      },
      keys: {
        type: 'default',
        priority: 'default',
        status: 'default',
        assignee: 'default'
      },
      filterShow: false
    }
  },
  props: {
    users: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    clearSearch() {
      this.search = ''
      this.$emit('filter', {name: 'search', valueAttr: this.search})
    },
    findTasks() {
      this.$emit('filter', {name: 'search', valueAttr: this.search})
    },
    filter(name, valueAttr) {
      console.log(name, valueAttr)

      this.$emit('filter', {name, valueAttr})
    },
    reset() {
      this.search = ''
      for(const value in this.keys) {
        this.keys[value] = this.assignee.id = 'default'
      }

      this.$emit('reset')
    },
  },
}
</script>

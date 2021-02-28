<template>
  <ul class="tasks__list">
    <li
        class="tasks__list-item"
        v-for="task in tasks"
        :key="task.id"
    >
      <div class="tasks__list-title">
        <router-link
            class="tasks__list-title-id"
            tag="a"
            :to="`/project/${ task.project }/task-${ task.id }`"
        >task-{{ task.id }}
        </router-link>
        <router-link
            class="tasks__list-title-name"
            tag="a"
            :to="`/project/${ task.project }/task-${ task.id }`"
        >{{ task.name }}
        </router-link>
      </div>
      <div
          v-if="Object.keys(attribute).length"
          class="tasks__list-state"
      >
        <div>
              <span :style="{ backgroundColor: attribute.priority[task.priority].style }">{{
                  attribute.priority[task.priority].name
                }}</span>
        </div>
        <div>
              <span :style="{ backgroundColor: attribute.type[task.type].style }">{{
                  attribute.type[task.type].name
                }}</span>
        </div>
        <div>
              <span :style="{ backgroundColor: attribute.status[task.status].style }">{{
                  attribute.status[task.status].name
                }}</span>
        </div>
        <div>
          <span>{{ task.assignee.name }} {{ task.assignee.surname }}</span>
        </div>
      </div>
      <div v-else>Loading...</div>
    </li>
  </ul>
</template>

<script>
import Attributes from '@/utils/attributes.js'

export default {
  name: 'Tasks',
  data() {
    return {
      attribute: {}
    }
  },
  props: {
    tasks: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    this.attribute = Attributes
  }
}
</script>

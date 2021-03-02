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
            :to="`/project/${ task.projectId }/task-${ task.id }`"
        >task-{{ task.id }}</router-link>
        <router-link
            class="tasks__list-title-name"
            tag="a"
            :to="`/project/${ task.projectId }/task-${ task.id }`"
        >{{ task.name }}</router-link>
      </div>

      <div class="tasks__list-state">
        <div v-if="$root.attributes.priority[task.priority] !== undefined">
          <span :style="{ backgroundColor: $root.attributes.priority[task.priority].style }">{{$root.attributes.priority[task.priority].name}}</span>
        </div>
        <div v-if="$root.attributes.priority[task.type] !== undefined">
          <span :style="{ backgroundColor: $root.attributes.type[task.type].style }">{{$root.attributes.type[task.type].name}}</span>
        </div>
        <div v-if="$root.attributes.priority[task.status] !== undefined">
          <span :style="{ backgroundColor: $root.attributes.status[task.status].style }">{{$root.attributes.status[task.status].name}}</span>
        </div>
        <div>
          <span>{{ task.assignee.name }} {{ task.assignee.surname }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Store from '../middlewares/store'

export default {
  name: 'Tasks',
  props: {
    tasks: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

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
            :to="`/project/${ task.project.id }/task-${ task.id }`"
        >task-{{ task.id }}</router-link>
        <router-link
            class="tasks__list-title-name"
            tag="a"
            :to="`/project/${ task.project.id }/task-${ task.id }`"
        >{{ task.name }}</router-link>
      </div>

      <div class="tasks__list-state">
        <div>
          <span :style="{ backgroundColor: $root.attributes.priority[task.priority.id].style }">{{task.priority.name}}</span>
        </div>
        <div>
          <span :style="{ backgroundColor: $root.attributes.type[task.type.id].style }">{{task.type.name}}</span>
        </div>
        <div>
          <span :style="{ backgroundColor: $root.attributes.status[task.status.id].style }">{{task.status.name}}</span>
        </div>
        <div>
          <span>{{ task.assignee.name }} {{ task.assignee.surname }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

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

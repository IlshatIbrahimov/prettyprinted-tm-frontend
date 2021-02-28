<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";

export default {
  name: 'App',
  components: {
    MainLayout,
    EmptyLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
}
</script>

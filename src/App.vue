<template>
  <div id="app">
   <component :is="layout">
      <router-view />
   </component> 
  </div>
</template>


<script>
import CardLayout from '@/layouts/CardLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  name: 'App',
  components: {
    CardLayout,
    MainLayout
  },
  data: () => ({
    message: 'Message'
  }),
  computed: {
    layout() {
      return this.$route.meta?.layout || 'main-layout'
    }
  }
};
</script>

<style lang="scss">
body {
 margin: 0;
 background: #20213A;
}

#app {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>

<template>
  <div id="app">
   <div class="flex-container">
      <router-view />
    </div> 
  </div>
</template>


<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    message: 'Message'
  }),
};
</script>

<style lang="scss">
body {
 display: block;
 margin: 0;
 background: #20213A;
}
.flex-container{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #20213A;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
    text-align: center;
//  color: #a1b5c9;
//  display: flex;
//  flex-flow: row nowrap;
//  align-items: flex-start;
//  justify-content: center;
//  //background: #20213A;
//  padding: 30px;
//  height: 100%;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #c2c2c2;

//     &.router-link-exact-active {
//       color: #f8f8f8;
//     }
//   }
// }
</style>

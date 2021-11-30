<template>
    <div class="card-layout">
    <div class="box">
      <div id='title'>{{ $route.meta.title }}</div>
      <!-- <component :is="currentTabComponent"></component> -->
      <div>
          <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CardLayout',
}
</script>

<style lang="scss">
.card-layout {
  border-radius: 15px;
  background: linear-gradient(-45deg, #FF0000,#ECE319,#FE7D06,#E40000,#DB1ADF,#7100CA,#1434DB,#16ECDF,#11EA0C,#FFF502,#00D94A);
  padding: 2px;
  box-shadow: 4px 4px 20px 6px #000000;
}

.box {
  display: flex;
  flex-direction: column;
  background-color: #20213A;
  border-radius: 15px;
  padding: 10px 25px;
}

#title {
  font-family: Lora;
  font-size: 39px;
  margin: 50px;
  color: #FFFFFF;
  font-weight: bold;
}

</style>
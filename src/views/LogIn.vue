<template>
  <div id="border">
    <div class="box">
      <div id='title'>Вход</div>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'LogIn',
  components: {
    LoginForm
  },
}
</script>

<style lang="scss">
#border {
  border: 2px solid black;
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

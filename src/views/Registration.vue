<template>
  <div id="border">
    <div class="box">
        <div id='title'>Регистрация</div>
        <RegForm 
          @create-user="onSubmitClicked"
        />
    </div>
  </div>
</template>

<script>
import RegForm from '@/components/RegForm.vue';

export default {
  name: 'Reg',
  components: {
    RegForm
  },
  data: () => ({
    UserList: []
  }),
  methods: {
    onSubmitClicked(user) {
      this.UserList.push(user)
    }
  }
}
</script>

<style lang="scss">
//подложка для создания рамки
#border {
  border: 2px solid black;
  border-radius: 15px;
  background: linear-gradient(-45deg, #FF0000,#ECE319,#FE7D06,#E40000,#DB1ADF,#7100CA,#1434DB,#16ECDF,#11EA0C,#FFF502,#00D94A);
  padding: 2px; //толщина рамки
  box-shadow: 4px 4px 20px 6px #000000;
}

//сама форма
.box {
  display: flex;
  flex-direction: column;
  background-color: #20213A;
  border-radius: 15px;
  padding: 10px 25px; //отступы уже с вычетом, применяемых margin в элементах(результативные отступы 60px 25px)
}

#title {
  font-family: Lora;
  font-size: 39px;
  margin: 50px;
  color: #FFFFFF;
  font-weight: bold;
}

</style>
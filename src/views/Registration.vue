<template>
    <div>
      <div id='title'>Регистрация</div>
      <RegForm 
        @create-user="onSubmitClicked"
      />
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

</style>
<template>
    <div >
      <div id='title'>Вход</div>
      <LoginForm />
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


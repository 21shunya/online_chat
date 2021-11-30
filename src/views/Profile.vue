<template>
  <div>
    <!-- <span>ID: {{currentUser.id}}</span> -->
    <button @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Profile',
  computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
  },
  methods: {
    ...mapActions('auth', ['doLogout']),
    async logout() {
      try {
        await this.doLogout();
        this.$router.push('/login');
      } catch (error) {
        console.log({error})
      }
    }
  }
};
</script>

<style lang="scss" scoped>
button {
    padding: 10px 20px;
    border-radius: 20px;
    font-family: Mulish;
    font-size: 20px;    
    background: transparent;
    border: 1px solid #9D6FFF;
    color: #9D6FFF;
}

span {
  font-family: Lora;
  font-size: 39px;
  margin: 50px;
  color: #FFFFFF;
  font-weight: bold;
}
</style>
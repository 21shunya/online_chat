<template>
  <div>
    <button class="secondary-btn" @click.prevent="logout">Logout</button>
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

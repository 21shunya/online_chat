<template>
  <div>
    <div id='title'>Профиль</div>
    <div>
      <img src="@/assets/profPhoto-default.svg"/>
      <div>
        <button class="secondary-btn change-photo">Изменить</button>
      </div>
    </div>
    <div class="fields">
      <label for="login">Login</label>
      <input 
        v-model="user.login"
        type="text" 
        name="login"
      />
      <label for="email">Email</label>
      <input 
        v-model="user.email"
        type="text" 
        name="login"
      />
    </div>
    <div class="btns-profile">
      <button class="secondary-btn settings-btn">Настройки</button>
      <button class="primary-btn" @click.prevent="logout">Выйти</button>
    </div>
  </div>
</template>

<script>
import { fetchUser } from '@/netClient/dataService';
import { mapActions } from 'vuex';
export default {
  name: 'Profile',
  computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
  },
  data: () => ({
    user: '',
    login:'',
    email:'',
  }),
  mounted() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
    this.fetchUser()
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
    },
    async fetchUser() {
      try {
        const response = await fetchUser();
        this.user = response
      } catch (error) {
      }
    },
  }
};
</script>

<style scoped>
 img{
   height: 90px
 }
</style>

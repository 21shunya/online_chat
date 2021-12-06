<template>
  <div>
    <button class="btn-img-exit" @click="goToChat">
      <img class="img-exit" src="@/assets/exit-normal.svg"/>
    </button>  
    <div id='title'>
      Профиль
    </div>
    <div>
      <img class="profile-photo" src="@/assets/profPhoto-default.svg"/>
      <div>
        <button class="secondary-btn change-photo">Изменить</button>
      </div>
    </div>
    <form class="fields f-reg" @keyup.enter="onSubmitClicked">
      <div class="profile-field">
        <label for="login">Login</label>
        <input 
          v-model="user.login"
          class="inp-profile"
          type="text" 
          name="login"
        />
      </div>
      <div class="profile-field">
        <label for="email">Email</label>
        <input 
          v-model="user.email"
          class="inp-profile"
          type="text" 
          name="login"
        />
      </div>
    </form>
    <div class="btns-profile">
      <button class="secondary-btn settings-btn">Настройки</button>
      <button class="primary-btn" @click.prevent="logout">Выйти</button>
    </div>
  </div>
</template>

<script>
import { fetchUser, updateUser } from '@/netClient/dataService';
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
    async onSubmitClicked() {
      try {
        const response = await updateUser(
          this.user.login.trim(), 
          this.user.email.trim()
        );
        alert('данные изменены');
      } catch (error) {
      }
    },
    goToChat() {
      this.$router.push("/chat")
    }
  }
};
</script>


<template>
    <div>
        <form class="card-form" @submit.prevent="onFormSubmit">
        <div class="fields f-login">
            <input v-model="login" type="text" placeholder="login"/>
            <input v-model="password" type="password" placeholder="password"/>
        </div>
        <div class="btns-login">
            <router-link to="/registration">
                <button class="secondary-btn">Регистрация</button>
            </router-link>
            <button class='primary-btn' type="submit">Войти</button>
        </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    name: 'LoginForm',
    data: () => ({
        login: '',
        password: ''
    }),
    computed:{
        ...mapState('auth',['status']),
    },
    created() {
    if (this.status.loggedIn) {
      this.$router.push('/chat');
        }
    },
    methods: {
        ...mapActions('auth', ['doLogin']),
        async onFormSubmit() {
            try{
                const token = await this.doLogin({
                        login: this.login.trim(),
                        password: this.password.trim()
                });
                    if (token){
                        this.$router.push('/chat');
                    }
            } catch (error) {
                console.error({ error })
            }
        },
    },
};
</script>



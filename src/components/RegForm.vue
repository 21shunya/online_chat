<template>
    <div>
        <form @submit.prevent="handleRegister">
        <div class="fields f-reg">
            <label for="login">Login</label>
            <input 
                v-model="login"
                type="text" 
                name="login"
            />
            <div class="indented_box">
                <label for="email">Email</label>
                <input 
                    v-model="email"
                    type="email" 
                    name="email"
                />
            </div>
            <label for="password">Password</label>
            <input 
                v-model="password"
                type="password"
                name="password" 
            />
        </div>
        <button class="btns-register primary-btn" type="submit">Зарегистрироваться</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'RegForm',
    props: {},
    data: () => ({
        login: '',
        email: '',
        password: ''
    }),
    computed: {
        ...mapState('auth', ['status']),
    },
    mounted() {
        if (this.status.loggedIn) {
        this.$router.push('/chat');
        }
    },
    methods: {
        ...mapActions('auth', ['doRegister']),
        async handleRegister() {
            try{
                const response = await this.doRegister({
                    login: this.login.trim(),
                    email: this.email.trim(),
                    password: this.password.trim()
                });
                if (response){
                   this.$router.push('/login');
                }
            } catch (error) {
                console.error({ error })
            }
        },
    }
};
</script>

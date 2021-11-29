<template>
    <div class="wrapper">
        <form class="wrapper" @submit.prevent="handleRegister">
        <div class="fields">
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
        <button type="submit">Зарегистрироваться</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'RegForm',
    props: {},
    data: () => ({
        login: '',
        email: '',
        password: ''
    }),
    computed: {
        loggedIn() {
        console.log(this.$store.state.auth.status.loggedIn)
        return this.$store.state.auth.status.loggedIn;
        }
    },
    mounted() {
        if (this.loggedIn) {
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
                   this.$router.push('/chat');
                }
            } catch (error) {
                console.error({ error })
            }
        },
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}
/////////////////////////////////////
.fields{
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 50px 0px;
}
label {
    align-self: flex-start;
    font-family: 'Noto Sans';
    color: #888888;
    font-size: 17px;
    padding: 0px 0px 13px 10px;
}
.indented_box {
    display: flex;
    flex-direction: column;
    margin: 30px 0px;
}
input{
    border-radius: 15px;
    border: 0px;
    height: 35px;
    width: 332px;
    font-family: 'Noto Sans';
    color: black;
    font-size: 20px;
}
//////////////////////////////////////

.btn {
    display: flex;
    padding: 0px;
    width: 374px;
    margin: 50px 10px;
    justify-content: space-between;
}
button {
    justify-content: center;
    margin: 50px;
    padding: 12px 25px;
    border-radius: 20px;
    font-family: Mulish;
    font-size: 20px;
    background: linear-gradient(110.86deg, #00D94A 9.46%, #FFD602 95.13%);
    border: 0px;
    color: #20213A;    
}
</style>
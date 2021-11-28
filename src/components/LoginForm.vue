<template>
    <div>
        <form class="wrapper" @submit.prevent="onFormSubmit">
        <div class="fields">
            <input v-model="login" type="text" placeholder="login"/>
            <input v-model="password" type="password" placeholder="password"/>
        </div>
        <div class="btn">
            <router-link to="/reg">
                <button id="reg">Регистрация</button>
            </router-link>
            <button id='in' type="submit">Войти</button>
        </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'LoginForm',
    data: () => ({
        login: '',
        password: ''
    }),
    computed:{
        loggedIn() {
        return this.$store.state.auth.status.loggedIn;
        }
    },
    created() {
    if (this.loggedIn) {
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
                    console.warn({token})
                    if (token){
                        this.$router.push('/chat');
                    }
            } catch (error) {
                console.error({ error })
            }
        },
        
        // handleLogin() {
        //     if (this.user.login && this.user.password) {
        //     this.$store.dispatch('auth/login', this.user).then(
        //     () => {
        //       this.$router.push('/chat');
        //         },
        //     )};
        // }

    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}
.fields{
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 30px 0px;
}

input{
    border-radius: 15px;
    border: 0px;
    height: 35px;
    width: 300px;
    margin: 10px 0px;
    padding: 0px 15px; //отступ текста в полях
    font-family: 'Noto Sans';
    ::placeholder{
        color: #888888;
    }
    color: black;
    font-size: 17px;
}

.btn {
    display: flex;
    padding: 0px;
    width: 314px;
    margin: 30px 10px;
    justify-content: space-between;
}

button {
    padding: 10px 20px;
    border-radius: 20px;
    font-family: Mulish;
    font-size: 20px;    
}

#reg {
        background: transparent;
        border: 1px solid #9D6FFF;
        color: #9D6FFF;   
}
#reg:hover{
    background:#9d6fff1e;
}
#reg:active{
    background: #9D6FFF 50%;
    color: #20213A;
}

#in {
    background: linear-gradient(110.86deg, #00D94A 9.46%, #FFD602 95.13%);
    border: 0px;
    color: #20213A;
}
#in:hover {
    background: #00D94A;
}


</style>


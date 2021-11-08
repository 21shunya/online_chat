<template>
    <div class="wrapper">
        <form class="wrapper">
        <div class="fields">
            <label>Name</label>
            <input 
                v-model="user.name"
                type="text" 
            />
            <div class="indented_box">
                <label>Email</label>
                <input 
                    v-model="user.email"
                    type="email" 
                />
            </div>
            <label>Password</label>
            <input 
                v-model="user.pass"
                type="password" />
        </div>
        <router-link to="/">
            <button @click="onSubmitClicked">Зарегистрироваться</button>
        </router-link>
        </form>
    </div>
</template>

<script>

export default {
    name: 'RegForm',
    props: {},
    data: () => ({
        user: {
            name: '',
            email: '',
            pass: ''
        }
    }),
    methods: {
        onSubmitClicked() {
            this.$emit('create-user', {
                name: this.user.name,
                email: this.user.email,
                pass: this.user.pass
            });
        }
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
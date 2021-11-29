<template>
    <div>
        <div class="container" @keyup.enter="onSubmitClicked">
            <input type="text" v-model="message" placeholder="Message..."/>
            <button @click="onSubmitClicked"><img src="@/data/send.png"></button>
        </div>
    </div>
</template>

<script>
import {sendMsg} from '@/netClient/dataService';

export default{
    name: 'SendMessage',
    props: {},
    data: () => ({
        message: ''
    }),
    methods: {
        async onSubmitClicked() {
            if(this.text !== '') {
                const send_Msg = await sendMsg(
                    this.message.trim()
                );
                this.text=''
                //$event.preventDefault();
                this.$emit('send_Msg', send_Msg)
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    .container{
        padding: 0px 0px 30px 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        input{
            width: 92%;
            height: 35px;
            padding: 0px 10px;
            border: none;
            border-radius: 15px;
            font-size: 17px;
            ::placeholder{
                color: #888888;
            }
            color: black;
        }
        button{
            background: transparent;
            border: none;
        }
        img{
            height: 25px;
        }
    }
</style>

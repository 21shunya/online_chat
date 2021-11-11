<template>
    <div>
        <div class="container" @keyup.enter="onSubmitClicked">
            <input type="text" v-model="text" placeholder="Message..."/>
            <button @click="onSubmitClicked"><img src="@/data/send.png"></button>
        </div>
    </div>
</template>

<script>
import {sendMsg} from '@/service/dataService';

export default{
    name: 'SendMessage',
    props: {},
    data: () => ({
        text: ''
    }),
    methods: {
        async onSubmitClicked() {
            if(this.text !== '') {
                const send_Msg = await sendMsg({
                    senderId: 1,
                    text: this.text,
                    attachments: [],
                    datetime: new Date().toISOString()
                });
                this.text=''
                //$event.preventDefault();
                this.$emit('send_Msg',send_Msg)
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
            border-radius: 15px;
            margin: 0px 15px;
            font-size: 17px;
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

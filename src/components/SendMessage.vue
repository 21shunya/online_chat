<template>
    <div>
        <div class="send-form" @keyup.enter="onSubmitClicked">
            <input class="send-field" type="text" v-model="message" placeholder="Message..."/>
            <button class="chat-img-btn" @click="onSubmitClicked"><img src="@/data/send.png"></button>
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
                this.message = ''
                //$event.preventDefault();
                this.$emit('send_Msg', send_Msg)
            }
        }
    }
};
</script>


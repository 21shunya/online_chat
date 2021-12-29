<template>
    <div>
        <div class="send-form" @keyup.enter="onSubmitClicked">
            <div class="edit-box">
                <label class="edit-label">
                    Редактирование:
                </label>
                <input class="send-field" type="text" v-model="message" placeholder="Message..."/>
            </div>
            <button class="chat-img-btn" @click="onSubmitClicked"><img src="@/data/send.png"></button>
        </div>
    </div>
</template>

<script>
import {sendMsg} from '@/netClient/dataService';

export default{
    name: 'EditMessage',
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


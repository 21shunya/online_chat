<template>
    <div class="chat">Chat
        <TopOfChart />
        <MessageList 
            :messages="messageList"
        />
        <SendMessage />
    </div>
</template>

<script>
import TopOfChart from '@/components/TopOfChat.vue'
import MessageList from '@/components/MessageList.vue'
import SendMessage from '@/components/SendMessage.vue'
import messages from '@/data/messages.json'

export default{
    name: 'Chat',
    components:{
        TopOfChart,
        MessageList,
        SendMessage
    },
    data: () => ({
        messageList: []
    }),
    mounted() {
        this.messageList=messages
    }
};
</script>

<style lang="scss" scoped>
    .chat{
        display: flex; 
        flex-direction: column;
        width: 40%;
        height: 100vh;       
    }
</style>

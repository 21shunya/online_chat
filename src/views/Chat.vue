<template>
    <div class="chat">
        <TopOfChart />
        <MessageList 
            v-if="messageList && messageList.length"
            :messages="messageList"
        />
        <div v-else class="msg">У вас пока нет сообщений</div>
        <SendMessage 
        @send_Msg="fetchMessages"
        />
    </div>
</template>

<script>
import TopOfChart from '@/components/TopOfChat.vue'
import MessageList from '@/components/MessageList.vue'
import SendMessage from '@/components/SendMessage.vue'
import { fetchMessages } from '@/netClient/dataService.js';


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
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
        this.fetchMessages()
    },
    methods: {
        async fetchMessages() {
            try {
                this.messageList = await fetchMessages();
            } catch (error) {
            } finally{
            }
        },
    },
};
</script>

<style lang="scss" scoped>
    .chat{
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 100vh;
        
    }
    .msg{
        display: flex;
        flex-direction: column;
        flex: 1;
        flex-shrink: 1;
        overflow-y: auto;
        justify-content: center;
        color: white;
    }
    .a{
        display: flex; 
        flex-direction: column;
        height: 100vh;
    }
</style>

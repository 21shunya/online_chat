<template>
    <div class="chat">
        <TopOfChart />
        <MessageList 
            v-if="messageList && messageList.length"
            :messages="messageList"
        />
        <div v-else class="emtyList">У вас пока нет сообщений</div>
        <SendMessage 
            @send_Msg="fetchMessages"
        />
    </div>
</template>

<script>
import TopOfChart from '@/components/TopOfChat.vue'
import MessageList from '@/components/MessageList.vue'
import SendMessage from '@/components/SendMessage.vue'
import { fetchMessages, sendMsg } from '@/netClient/dataService.js';
import { mapState } from 'vuex'


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
        ...mapState('auth', ['status']),
  },
  mounted() {
    if (!this.status.loggedIn) {
      this.$router.push('/login');
    }
        this.fetchMessages()
    },
    methods: {
        async fetchMessages() {
            try {
                const messageList = await fetchMessages();
                this.messageList = messageList.reverse()
            } catch (error) {
            } finally{
            }
        },
        async sendMsg(){
            
        }
    },
};
</script>

<style lang="scss" scoped>
    .chat{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .emptyList {
        display: flex;
        flex-direction: column;
        flex: 1;
        flex-shrink: 1;
        justify-content: center;
    }
</style>

<template>
    <div class="chat">
        <!-- <div class="a"> -->
        <TopOfChart />
        <MessageList 
            :messages="messageList"
        />
        <SendMessage 
        @send_Msg="fetchMessages"
        />
        <!-- </div> -->
    </div>
</template>

<script>
import TopOfChart from '@/components/TopOfChat.vue'
import MessageList from '@/components/MessageList.vue'
import SendMessage from '@/components/SendMessage.vue'
import messages from '@/data/messages.json'
import { fetchMessages } from '@/service/dataService';


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
    .a{
        display: flex; 
        flex-direction: column;
        height: 100vh;
    }
</style>

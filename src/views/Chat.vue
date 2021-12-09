<template>
    <div class="chat">
        <TopOfChart />
        <MessageList 
            v-if="messageList && messageList.length"
            :messages="messageList"
            @showModal="showModal"
        />
        <div v-else class="msg-conteiner" id="empty">У вас пока нет сообщений</div>
        <SendMessage 
            @send_Msg="fetchMessages"
        />
        <ModalTest 
            v-show="isModalVisible"
            @close="closeModal"
        />
    </div>
</template>

<script>
import TopOfChart from '@/components/TopOfChat.vue'
import MessageList from '@/components/MessageList.vue'
import SendMessage from '@/components/SendMessage.vue'
import ModalTest from '@/components/ModalTest.vue'
import { fetchMessages, sendMsg } from '@/netClient/dataService.js';
import { mapState } from 'vuex'


export default{
    name: 'Chat',
    components:{
        TopOfChart,
        MessageList,
        SendMessage,
        ModalTest
    },
    data: () => ({
        messageList: [],
        isModalVisible: false,
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
            
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
      }
    },
};
</script>



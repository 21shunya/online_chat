<template>
  <div class="chat">
    <TopOfChart />
    <MessageList v-if="messageList && messageList.length" :messages="messageList" />
    <div v-else class="msg-conteiner" id="empty">У вас пока нет сообщений</div>
    <SendMessage v-if="!isEditNow" @send_Msg="fetchMessages" />
    <EditMessage v-else @send_Msg="fetchMessages" />
  </div>
</template>

<script>
import io from 'socket.io-client';
import TopOfChart from '@/components/TopOfChat.vue';
import MessageList from '@/components/MessageList.vue';
import SendMessage from '@/components/SendMessage.vue';
import EditMessage from '@/components/EditMsg.vue';
import { fetchMessages, sendMsg } from '@/netClient/dataService.js';
import { mapState } from 'vuex';

export default {
  name: 'Chat',
  components: {
    TopOfChart,
    MessageList,
    SendMessage,
    EditMessage,
  },
  data: () => ({
    messageList: [],
    socket: io('http://localhost:8081/chat'),
  }),
  computed: {
    ...mapState('auth', ['status']),
    ...mapState('msg', ['msgText', 'isEditNow']),
  },
  mounted() {
    if (!this.status.loggedIn) {
      this.$router.push('/login');
    }
    this.fetchMessages();

    console.log(this.msgText, this.isEditNow);

    this.socket.emit('registration', {
      token: localStorage.getItem('accessToken'),
    });

    this.socket.on('newMessage', (data) => {
      console.log('Новое сообщение прилетело = ', data);
      const msg = {
        msg: data,
      };
      this.fetchMessages();
      this.messageList.push(data);
    });
  },
  methods: {
    async fetchMessages() {
      try {
        const messageList = await fetchMessages();
        this.messageList = messageList.reverse();
      } catch (error) {
      } finally {
      }
    },
  },
};
</script>

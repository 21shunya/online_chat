<template>
  <div class="send-form" @keyup.enter="onSubmitClicked">
    <div class="edit-box">
      <div class="edit-label">
        Редактирование:
      </div>
      <input class="send-field " type="text" v-model="message" placeholder="Message..." />
    </div>
    <div class="img-edit-btn">
      <button class="chat-img-btn " @click="onSubmitClicked">
        <img src="@/data/send.png" />
      </button>
    </div>
  </div>
</template>

<script>
import { sendMsg } from '@/netClient/dataService';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'EditMessage',
  props: {},
  data: () => ({
    message: '',
  }),
  computed: {
    ...mapState('msg', ['msgText']),
  },
  mounted() {
    this.message = this.msgText;
  },
  methods: {
    async onSubmitClicked() {
      if (this.text !== '') {
        const send_Msg = await sendMsg(this.message.trim());
        this.message = '';
        //$event.preventDefault();
        this.$emit('send_Msg', send_Msg);
      }
    },
  },
};
</script>

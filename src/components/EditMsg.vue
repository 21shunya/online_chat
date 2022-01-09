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
import { editMsg } from '@/netClient/dataService';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'EditMessage',
  props: {},
  data: () => ({
    message: '',
  }),
  computed: {
    ...mapState('msg', ['msgId', 'msgText',]),
  },
  mounted() {
    console.log(this.msgId)
    this.message = this.msgText;
  },
  methods: {
    ...mapActions('msg', ['closeEditField', 'deleteMsgInfo']),
    async onSubmitClicked() {
      if (this.text !== '') {
        const edit_Msg = await editMsg(this.msgId, this.message.trim());
        //$event.preventDefault();
        this.closeEditField();
        this.deleteMsgInfo();
        this.$emit('refresh', edit_Msg);
      }
    },
  },
};
</script>

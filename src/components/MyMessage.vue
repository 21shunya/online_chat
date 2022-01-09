<template>
    <button class="msg-wrapper my-msg" @click="show">
      <div class="msg-text">
        {{ msg.message }}
      </div>
      <!-- <TimeOfMsg
            :msg="msg"
        />      -->
    </button>
</template>

<script>
import TimeOfMsg from '@/components/TimeOfMsg.vue';
import { deleteMsg } from '@/netClient/dataService';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Message',
  data: () => ({
    modal: document.querySelector('.modal'),
  }),
  props: {
    msg: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('msg', ['msgText', 'msgId']),
  },
  methods: {
    ...mapActions('msg', ['setMsgInfo']),
    show(event) {
      //138
      let position = 0
      if (document.documentElement.clientHeight - event.pageY < 158){
        position = document.documentElement.clientHeight - 158
      } else {
        position = event.pageY - 5
      }
      this.modal.style.top = `${position}px`;
      console.log(document.documentElement.clientHeight)
      console.log('show', `${event.pageY}px`, `${position}px`, this.msg.message);
      this.setMsgInfo({message: this.msg.message, msgId: this.msg.id});
      this.$emit('show')
    },
  },
};
</script>

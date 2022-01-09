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
      this.modal.style.top = `${event.pageY}px`;
      console.log('show', `${event.pageY}px`, this.msg.message);
      console.log(this.msg.message, this.msg.id);
      this.setMsgInfo({message: this.msg.message, msgId: this.msg.id});
      this.$emit('show')
    },
    
    // async deleteMsg() {
    //     try {
    //         const response = deleteMsg(
    //             this.msg.id
    //         )
    //     } catch (error) {
    //         console.error({ error });
    //         throw error;
    //     }
    // }
  },
};
</script>

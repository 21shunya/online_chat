<template>
  <button class="msg-wrapper my-msg" @click="show">
    <div class="msg-text">
      {{ msg.message }}
    </div>
    <!-- <TimeOfMsg
            :msg="msg"
        />      -->
    <ContextMenu v-show="isVisible" @close="close"/>
  </button>
</template>

<script>
import TimeOfMsg from '@/components/TimeOfMsg.vue';
import { deleteMsg } from '@/netClient/dataService';
import ContextMenu from '@/components/ContextMenu.vue';

// let modal = document.querySelector('.modal')
export default {
  name: 'Message',
  components: {
    ContextMenu
  },
  data: () => ({
    isVisible: false,
    modal: document.querySelector('.modal'),
    
  }),
  props: {
    msg: {
      type: Object,
      required: true,
    },
  },
  methods: {
    show(event) {
      // modalTop = `${event.pageY}px`;
      // this.modalColor = 'red'
      // this.modal.style.cssText=`top: ${event.pageY}px;`
      console.log('show',`${event.pageY}px`);
      this.isVisible = true
    },
    close() {
      this.isVisible = false
      console.log('closed')
    },
    deleteMsg() {
      this.$emit('deleteMsg');
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

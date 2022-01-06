<template>
  <button class="msg-wrapper my-msg" @click="show">
    <div class="msg-text">
      {{ msg.message }}
    </div>
    <!-- <TimeOfMsg
            :msg="msg"
        />      -->
    <ContextMenu @click="hj" v-show="isVisible" @close="close"/>
  </button>
</template>

<script>
import TimeOfMsg from '@/components/TimeOfMsg.vue';
import { deleteMsg } from '@/netClient/dataService';
import ContextMenu from '@/components/ContextMenu.vue';

export default {
  name: 'Message',
  components: {
    ContextMenu
  },
  data: () => ({
    isVisible: false,
    startX: 0,
    startY: 0,
    modal: document.querySelector(".modal")
  }),
  props: {
    msg: {
      type: Object,
      required: true,
    },
  },
  methods: {
    hj() {
      console.log(this.modal.style)
      this.modal.style.background = "black"
    },
    show(event) {
      // this.startX = event.pageX;
      // this.startY = event.pageY;
      
      this.modal.style.top = `${event.pageY}px`
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

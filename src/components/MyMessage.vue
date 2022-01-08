<template>
  <div class="">
    <button class="msg-wrapper my-msg" @click="show">
      <div class="msg-text">
        {{ msg.message }}
      </div>
      <!-- <TimeOfMsg
            :msg="msg"
        />      -->
    </button>
    <ContextMenu v-show="isVisible" @close="close" @startEditing="startEditing" />
  </div>
</template>

<script>
import TimeOfMsg from '@/components/TimeOfMsg.vue';
import { deleteMsg } from '@/netClient/dataService';
import ContextMenu from '@/components/ContextMenu.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Message',
  components: {
    ContextMenu,
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
  computed: {
    ...mapState('msg', ['msgText', 'isEditNow']),
  },
  methods: {
    ...mapActions('msg', ['openEditField']),
    show(event) {
      // modalTop = `${event.pageY}px`;
      this.modal.style.background = 'red';
      console.log('show', `${event.pageY}px`, this.msg.message);
      this.isVisible = true;
    },
    close() {
      this.isVisible = false;
      console.log('closed');
    },
    deleteMsg() {
      this.$emit('deleteMsg');
    },
    async startEditing() {
      console.log(this.msg.message);
      this.openEditField(this.msg.message);
      this.close();
      console.log(this.isEditNow, this.msgText);
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

<template>
  <div class="msg-conteiner" id="full">
    <div class="msg-list" v-for="msg in messages" :key="msg.id">
      <!-- <DateOfMsgs 
                :msg="msg"
            /> -->
      <MyMessage v-if="msg.userId == userId" :msg="msg" @show="showCntxtMenu"/>
      <OtherMessages v-else :msg="msg" />
    </div>
    <ContextMenu v-show="isVisible" @close="close" @startEditing="startEditing" @refresh="refresh" />
  </div>
</template>

<script>
import MyMessage from '@/components/MyMessage.vue';
import OtherMessages from '@/components/OtherMessages.vue';
import DateOfMsgs from '@/components/DateOfMsgs.vue';
import { deleteMsg } from '@/netClient/dataService';
import ContextMenu from '@/components/ContextMenu.vue';
import { mapActions } from 'vuex';

export default {
  name: 'MessageList',
  props: ['messages'],
  components: {
    MyMessage,
    OtherMessages,
    DateOfMsgs,
    ContextMenu
  },
  data: () => ({
    userId: '',
    isVisible: false,
  }),
  methods: {
    ...mapActions('msg', ['openEditField']),
    getUserId() {
      const { userId } = JSON.parse(localStorage.getItem('user'));
      this.userId = userId;
    },
    showCntxtMenu() {
      this.isVisible = true
    },
    close() {
      this.isVisible = false;
      console.log('closed');
    },
    startEditing() {
      this.openEditField();
      this.close();
    },
    refresh() {
      this.$emit('refresh');
    },
  },
  mounted() {
    this.getUserId();
  },
};
</script>

<template>
  <div class="msg-conteiner" id="full">
    <div class="msg-list" v-for="msg in messages" :key="msg.id">
      <!-- <DateOfMsgs 
                :msg="msg"
            /> -->
      <MyMessage v-if="msg.userId == userId" :msg="msg" @deleteMsg="deleteMsg"/>
      <OtherMessages v-else :msg="msg" />
    </div>
    <ContextMenu @click="hj" v-show="isVisible" @close="close"/>
  </div>
</template>

<script>
import MyMessage from '@/components/MyMessage.vue';
import OtherMessages from '@/components/OtherMessages.vue';
import DateOfMsgs from '@/components/DateOfMsgs.vue';
import { deleteMsg } from '@/netClient/dataService';

export default {
  name: 'MessageList',
  props: ['messages'],
  components: {
    MyMessage,
    OtherMessages,
    DateOfMsgs,
  },
  data: () => ({
    userId: '',
  }),
  methods: {
    
    getUserId() {
      const { userId } = JSON.parse(localStorage.getItem('user'));
      this.userId = userId;
    },
    async deleteMsg() {
      try {
        const response = deleteMsg(this.msg.id);
      } catch (error) {
        console.error({ error });
        throw error;
      }
    },
  },
  mounted() {
    this.getUserId();
  },
};
</script>

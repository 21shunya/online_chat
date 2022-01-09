<template>
  <div
    class="modal"
    role="dialog"
    aria-labelledby="modalTitle"
    aria-describedby="modalDescription"
    @mouseleave="close"
  >
    <button class="menu-btn" @click="startEditing">
      <img class="img-menu" src="@/assets/pencil.svg" />
      <div class="btn-edit">Редактировать</div>
    </button>
    <button class="menu-btn" @click="deleteMsg">
      <img class="img-menu" src="@/assets/trash-can.svg" />
      <div class="btn-delete">Удалить</div>
    </button>
  </div>
</template>

<script>
import { deleteMsg } from '@/netClient/dataService';
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ContextMenu',
  data: () => ({
    // modal: document.querySelector('.modal'),
  }),
  computed: {
    ...mapState('msg', ['msgId'])
  },
  methods: {
    ...mapActions('msg', ['deleteMsgInfo']),
    close() {
      this.$emit('close');
    },
    startEditing() {
      this.$emit('startEditing');
    },
    async deleteMsg() {
      try {
        const response = await deleteMsg(this.msgId);
        console.log(response)
      } catch (error) {
        console.error({ error });
        throw error;
      }
    this.deleteMsgInfo();
    this.close();
    this.$emit('refresh')
    },
  },
};
</script>

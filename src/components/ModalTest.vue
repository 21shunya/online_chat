<template>
  <transition name="modal-fade">
    <!-- <div class="modal-backdrop"> -->
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <button class="menu-btn">
        <img class="img-menu" src="@/assets/pencil.svg" />
        <div class="btn-edit">Редактировать</div>
      </button>
      <button class="menu-btn">
        <img class="img-menu" src="@/assets/trash-can.svg" />
        <div class="btn-delete" @click="deleteMsg">Удалить</div>
      </button>
      <button type="button" class="btn-close" @click="close" aria-label="Close modal">
        close
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalTest',
  methods: {
    close() {
      this.$emit('close');
    },
    deleteMsg() {
      this.$emit('deleteMsg');
    },
  },
};
</script>

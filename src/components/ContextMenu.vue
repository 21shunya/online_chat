<template>
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      @mouseleave="close"
    >
      <button class="menu-btn">
        <img class="img-menu" src="@/assets/pencil.svg" />
        <div class="btn-edit">Редактировать</div>
      </button>
      <button class="menu-btn">
        <img class="img-menu" src="@/assets/trash-can.svg" />
        <div class="btn-delete">Удалить</div>
      </button>
    </div>
</template>

<script>
export default {
    name: 'ContextMenu',
    methods: {
        close() {
            this.$emit('close');
        },
    }

}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 253px;
  right: 30%;
  background: #20213a;
  box-shadow: 2px 2px 20px 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 0px;
  border: 2px solid #9d6fff;
  box-sizing: border-box;
  border-radius: 15px;
}
</style>
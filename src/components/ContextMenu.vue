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
        <div class="btn-edit" >Редактировать</div>
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
    data: () => ({
        // modal: document.querySelector('.modal'),
    }),
    methods: {
        close() {
            this.$emit('close');
        },
        startEditing() {
            this.$emit('startEditing')
        }
    },

}
</script>

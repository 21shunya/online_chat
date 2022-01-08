export const msg = {
  namespaced: true,
  state: {
    msgText: '',
    msgId: '',
    isEditNow: false,
  },
  actions: {
    openEditField({ commit }, { message, msgId }) {
      console.log('actions:', message, msgId);
      commit('setMsgText', message, msgId);
    },
    closeEditField({ commit }) {
      commit('deleteMsg');
    },
  },
  mutations: {
    setMsgText(state, message, msgId) {
      state.msgText = message;
      state.msgId = msgId;
      state.isEditNow = true;
      console.log('mutations:', state.msgText, state.isEditNow);
    },
    deleteMsg(state) {
      state.msgText = '';
      state.msgId = ''
      state.isEditNow = false;
    },
  },
};

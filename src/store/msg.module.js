export const msg = {
  namespaced: true,
  state: {
    msgText: '',
    msgId: '',
    isEditNow: false
  },
  actions: {
    setMsgInfo({ commit }, { message, msgId }) {
      console.log('actions:', message, msgId);
      commit('setMsgInfo', {message, msgId});
    },
    deleteMsgInfo({ commit }) {
      commit('deleteMsgInfo');
    },
    openEditField({ commit },) {
      commit('openEditField')
    },
    closeEditField({ commit },) {
      commit('closeEditField')
    }
  },
  mutations: {
    setMsgInfo(state, {message, msgId}) {
      state.msgText = message;
      state.msgId = msgId;
      console.log('mutations:', state.msgText, state.msgId);
    },
    deleteMsgInfo(state) {
      state.msgText = '';
      state.msgId = ''
    },
    openEditField(state) {
      state.isEditNow = true
    },
    closeEditField(state) {
      state.isEditNow = false
    }
  },
};

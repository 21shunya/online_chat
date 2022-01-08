export const msg = {
  namespaced: true,
  state: {
    msgText: '',
    isEditNow: false,
  },
  actions: {
    openEditField({ commit }, message) {
      console.log('actions:', message);
      commit('setMsgText', message);
    },
  },
  mutations: {
    setMsgText(state, message) {
      state.msgText = message;
      state.isEditNow = true;
      console.log('mutations:', state.msgText, state.isEditNow);
    },
  },
};

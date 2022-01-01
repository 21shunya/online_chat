export const context_menu = {
    state: {
        isModalVisible: false,
        openNow: false
    },
    actions: {
        showModal({ commit }) {
            if (!isModalVisible){
                const isModalVisible = true;
                const openNow = true;
                commit('showModal', isModalVisible, openNow)
            }
        },
        closeModal({ commit }) {
            const isModalVisible = false;
            const openNow = false;
            if (!state.openNow) {
                commit('closeModal', isModalVisible)
            }
            commit('closeOpen', openNow)
            return isModalVisible
        }
    },
    mutations: {
        closeOpen(openNow) {
            state.openNow = openNow
        },
        closeModal(isModalVisible) {
            state.isModalVisible = isModalVisible
        },
        showModal(isModalVisible, openNow) {
            state.isModalVisible = isModalVisible;
            state.openNow = openNow
        }
    }
};
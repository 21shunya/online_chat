import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module'
import { context_menu } from './contextMenu.module'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    context_menu
  }
});

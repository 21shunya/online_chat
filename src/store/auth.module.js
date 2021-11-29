import { doLogin, doLogout, doRegister } from "../netClient/authService";


const user = localStorage.getItem('user');
const token = localStorage.getItem('accessToken')
const initialState = user
  ? { status: { loggedIn: true }, user, token }
  : { status: { loggedIn: false }, user: null, token:null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    async doLogin({commit}, {login, password}) {
      try {
        const { token, user} = await doLogin( 
          login,
          password
        )
        commit('loginSuccess', user);
        commit('setToken', token);
        return token
      } catch (error) {
        commit('loginFailure');
        console.error({ error });
        throw error;
      }
    },

    async doLogout({commit},) {
      try {
        const response = await doLogout()
        commit('logout');
        return response;
    } catch (error) {
        console.error({ error })
        throw error;
    }
  },

  async doRegister({commit}, {login, email, password}) {
    try {
        const response = await doRegister(
          login,
          email,
          password
        );
        commit('registerSuccess');
        return response;
    } catch (error) {
      commit('registerFailure');
      console.error({ error })
      throw error;
    }
} 
  
    // login({ commit }, user) {
    //   return authService.login(user).then(
    //     user => {
    //       commit('loginSuccess', user);
    //       return Promise.resolve(user);
    //     },
    //     error => {
    //       commit('loginFailure');
    //       return Promise.reject(error);
    //     });
    // },
    // logout({ commit }) {
    //   // return authService.logout().then( 
    //   //   response => {
    //   //     commit('logout');
    //   //     return Promise.resolve(response.data)
    //   //   }
    //   // )
    //   authService.logout();
    //   commit('logout');
    // },
    // register({ commit }, user) {
    //   return authService.register(user).then(
    //     response => {
    //       commit('registerSuccess');
    //       return Promise.resolve(response.data);
    //     },
    //     error => {
    //       commit('registerFailure');
    //       return Promise.reject(error);
    //     }
    //   );
    // }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};
import http from "@/netClient/config.js";


const user = localStorage.getItem('user');
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    async doLogin({commit}, {login, password}) {
      try {
        const response = await http.post('/auth/login', { 
          login,
          password
        })
        const user = JSON.stringify(response.data)
        const { accessToken } = JSON.parse(user)
        localStorage.user = user;
        localStorage.accessToken = accessToken;
        commit('loginSuccess', user);
        return localStorage.accessToken 
      } catch (error) {
        commit('loginFailure');
        console.error({ error });
        throw error;
      }
    },

    async doLogout({commit},) {
      try {
        const response = await http.get('/auth/logout',
        {
          headers : {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.accessToken
          }
        });
        commit('logout');
        localStorage.removeItem('user', 'accessToken');
        return response.data;
    } catch (error) {
        console.error({ error })
        throw error;
    }
  },

  async doRegister({commit}, {login, email, password}) {
    try {
        const response = await http.post('/auth/registration', {
          login,
          email,
          password
        });
        commit('registerSuccess');
        return response.data;
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
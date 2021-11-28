import { doRegister, doLogin, doLogout } from "../netClient/authService";
import http from "@/netClient/config.js";


// const user = JSON.parse(localStorage.getItem('user'));
// const initialState = user
//   ? { status: { loggedIn: true }, user }
//   : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  // state: initialState,
  actions: {
    async doLogin({}, { login, password}) {
      try {
        const response = await http.post('/auth/login', { 
          login,
          password
        })
        const user = JSON.stringify(response.data)
        localStorage.user = user;
        return JSON.parse(localStorage.user).accessToken  // todo: привести к нормальному виду(вынести в отдельную переменную)   
      } catch (error) {
        console.error({ error });
        throw error;
      }
    },

    async doLogout({}, ) {
      try {
        const response = await http.get('/auth/logout',
        {
            headers : {
                'Content-Type': 'application/json',
                'x-access-token': JSON.parse(localStorage.user).accessToken //----------
            }
        });
        localStorage.removeItem('accessToken');
        return response.data;
    } catch (error) {
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
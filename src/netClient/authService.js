import http from '@/netClient/config.js';

export async function doRegister(email, login, password) {
    try {
        const response = await http.post('/auth/registration', {
            email,
            login,
            password
        });
        return response.data;
    } catch (error) {
        console.error({ error })
        throw error;
    }
} 

export async function doLogin(login, password) {
    try {
        const response = await http.post('/auth/login', { 
          login,
          password
        })
        const user = JSON.stringify(response.data)
        const { accessToken } = JSON.parse(user)
        localStorage.user = user;
        localStorage.accessToken = accessToken;
        return {token: localStorage.accessToken, user: localStorage.user}
      } catch (error) {
        console.error({ error });
        throw error;
      }
  }

export async function doLogout() {
    try {
        const response = await http.get('/auth/logout',
        {
          headers : {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.accessToken
          }
        });
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        return response.data;
    } catch (error) {
        console.error({ error })
        throw error;
    }
}
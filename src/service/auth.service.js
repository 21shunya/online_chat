import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        login: user.login,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    console.log(JSON.parse(localStorage.user).accessToken)
    return axios.get(API_URL + 'logout', {
      headers : {
              'Content-Type': 'application/json',
              'x-access-token': JSON.parse(localStorage.user).accessToken
      }
    }).then((response) => {
       localStorage.removeItem('user');
       console.log(localStorage.user)
       return response.data;
    })

    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'registration', {
      login: user.login,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
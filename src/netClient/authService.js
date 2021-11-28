import http from '@/netClient/config.js';

export async function doRegister(email, login, password, ) {
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
        return response.data;
    } catch (error) {
        console.error({ error })
        throw error;
    }
}
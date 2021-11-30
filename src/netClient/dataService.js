import http from '@/netClient/config.js';

export async function fetchMessages() {
    try {
        const response = await http.get('/chat/messages', {
            headers : {
                'x-access-token': localStorage.accessToken
            }
        });
        return response?.data?.messageList ?? [];
    }  catch (error) {
        console.error({ error });
        throw error;
    }
}

export async function sendMsg(message) {
    try {
        const response = await http.post('/chat/messages/send', {
            message
        },
        {
            headers : {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.accessToken
            }
            
        })
        if (! response?.data) console.log("msg doesn't send")  
        console.log(response?.data)  
        return response?.data ?? {};
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

export async function fetchUser(id) {
    try {
        const response = await http.get('user/' + id);
        return response?.data ?? {};
    } catch (error) {
        console.error({ error });
        throw error;
    }
}
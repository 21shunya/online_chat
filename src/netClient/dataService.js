import http from '@/netClient/config.js';

export async function fetchMessages() {
    try {
        const response = await http.get('/chat/messages', {
            headers : {
                'x-access-token': localStorage.accessToken
            }
        });
        return response?.data?.list ?? [];
    }  catch (error) {
        console.error({ error });
        throw error;
    }
}

export async function fetchUser(id) {
    try {
        const response = await http.get('/user/' + id);
        return response?.data ?? {};
    } catch (error) {
        console.error({ error });
        throw error;
    }

}

export async function sendMsg({senderId, text, attachments, datetime}) {
    // console.log({senderId, text, attachments, datetime})
    try {
        const response = await http.post('/msg', {
            senderId,
            text,
            attachments,
            datetime
        });
        if (! response?.data.result) console.log("msg doesn't send")    
        return response?.data ?? {};
    } catch (error) {
        console.error({ error });
        throw error;
    }
}
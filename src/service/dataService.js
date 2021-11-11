import axios from '@/axios';

export async function fetchMessages() {
    const response = await axios.get('/msg');
    return response?.data?.list ?? [];
}

export async function fetchUser(id) {
    try {
        const response = await axios.get('/user/' + id);
        return response?.data ?? {};
    } catch (error) {
        console.error({ error });
        throw error;
    }

}

export async function sendMsg({senderId, text, attachments, datetime}) {
    // console.log({senderId, text, attachments, datetime})
    try {
        const response = await axios.post('/msg', {
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
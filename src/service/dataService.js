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
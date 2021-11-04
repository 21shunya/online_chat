import axios from '@/axios';

export async function fetchMessages() {
    const response = await axios.get('/msg');
    return response?.data?.list ?? [];
}
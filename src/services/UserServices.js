import api from './api';

export const getAllUsers = async () => {
    const response = await api.get('/users');
    return response.data;
}

export const registerUser = async (name) => {
    const response = await api.post('/users', { name });
    return response.data;
}

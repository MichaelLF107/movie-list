import api from './api';

export const getAllUsers = async () => {
    const response = await api.get('/users');
    return response.data;
}

export const registerUser = async (res) => {
    const response = await api.post('/registerUser', { res });
    return response.status;
}

export const getUserById = async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
}

export const deleteUser = async (id) => {
    const response = await api.delete(`/deleteUser/${id}`);
    return response.data;
}
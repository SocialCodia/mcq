import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: 'https://api-mcq.herokuapp.com/api/',
    // baseURL: 'http://localhost:5500/api/',
    withCredentials: true
});


export const getMcqs = () => api.get('public/mcqs');
export const getUsers = () => api.get('admin/users');
export const addMcq = data => api.post('public/mcq', data);
export const doLogin = data => api.post('auth/login', data);
export const doRegister = data => api.post('auth/register', data);
export const updateUser = data => api.patch('admin/user', data);

api.interceptors.response.use((response) => response.data, (error) => {
    toast.error(error.response.data.message);
    return error.response.data;
});


export default api;
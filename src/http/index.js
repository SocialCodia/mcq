import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: 'http://localhost:5500/api/',
    withCredentials: true
});


export const getMcqs = () => api.get('public/mcqs');
export const addMcq = data => api.post('public/mcq', data);


api.interceptors.response.use((response) => response.data, (error) => {
    toast.error(error.response.data.message);
    return error.response.data;
});


export default api;
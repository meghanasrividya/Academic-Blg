// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Proxy is already set in Vite config (if needed)
});

// Automatically attach token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

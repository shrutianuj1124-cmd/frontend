// =============================================
//   Centralized API Configuration
//   All backend API calls go through this file
// =============================================
import axios from 'axios';

// In dev: uses http://localhost:5000
// In production: uses the live backend URL from .env
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Axios instance with base URL pre-configured
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Attach JWT token automatically to every request if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));

// Global response error handler
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid — clear and redirect to login
            localStorage.removeItem('adminToken');
            window.location.href = '/admin/login';
        }
        return Promise.reject(error);
    }
);

export const API_BASE_URL = BASE_URL;
export default api;

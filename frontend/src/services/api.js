// src/services/api.js

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // Use environment variable for API URL

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptors for adding token to requests
api.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Generic GET request
export const get = async (endpoint) => {
    const response = await api.get(endpoint);
    return response.data;
};

// Generic POST request
export const post = async (endpoint, data) => {
    const response = await api.post(endpoint, data);
    return response.data;
};

// Generic PUT request
export const put = async (endpoint, data) => {
    const response = await api.put(endpoint, data);
    return response.data;
};

// Generic DELETE request
export const del = async (endpoint) => {
    const response = await api.delete(endpoint);
    return response.data;
};

export default api;

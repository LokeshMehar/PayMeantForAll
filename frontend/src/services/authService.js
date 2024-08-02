// src/services/authService.js

import api from './api';

// Sign up a new user
export const signup = async (userData) => {
    try {
        const response = await api.post('/user/signup', userData);
        return response;
    } catch (error) {
        throw error.response.data; // Forward the error message
    }
};

// Sign in an existing user
export const signin = async (credentials) => {
    try {
        const response = await api.post('/user/signin', credentials);
        return response;
    } catch (error) {
        throw error.response.data; // Forward the error message
    }
};

// Update user information
export const updateUser = async (userData) => {
    try {
        // const response = await api.put('/user', userData);
        const response = await api.put('/user/update', userData);
        return response;
    } catch (error) {
        throw error.response.data; // Forward the error message
    }
};

// Fetch user data (if needed)
export const fetchUserData = async () => {
    try {
        const response = await api.get('/user/bulk'); // Adjust endpoint as necessary
        return response;
    } catch (error) {
        throw error.response.data; // Forward the error message
    }
};

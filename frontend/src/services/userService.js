// src/services/userService.js

import api from './api';

// Fetch users based on the search input
export const getUsers = async (filter) => {
    try {
        const response = await api.get(`/user/bulk?filter=${filter}`);
        console.log(response.data);
        return response.data; // Ensure the response structure is correct
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error.response.data; // Forward the error message
    }
};

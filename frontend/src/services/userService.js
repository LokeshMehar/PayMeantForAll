// src/services/userService.js

// import api from './api';

// Fetch users based on the search input

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
// export const getUsers = async (filter) => {
    //     try {
        //         const response = await api.get(`/user/bulk?filter=${filter}`);
//         return response.data.user; // Ensure the response structure is correct
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         throw error.response.data; // Forward the error message
//     }
// };

// Get the current balance of the user
export const getBalance = async () => {
    try {
        const response = await api.get('/account/balance');
        return response.data; // Ensure it returns the correct structure
    } catch (error) {
        console.error('Error fetching balance:', error);
        throw error.response.data; // Forward the error message
    }
};

// Update user details
export const updateUserDetails = async (userData) => {
    try {
        const response = await api.put('/user/update', userData);
        return response; // Return the updated user data
    } catch (error) {
        console.error('Error updating user details:', error);
        throw error.response.data; // Forward the error message
    }
};


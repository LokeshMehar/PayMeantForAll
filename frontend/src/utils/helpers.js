// src/utils/helpers.js

export const getAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const setAuthToken = (token) => {
    console.log(token);
    localStorage.setItem('authToken', token);
};

export const clearAuthToken = () => {
    localStorage.removeItem('authToken');
};

// Additional utility functions can be added here

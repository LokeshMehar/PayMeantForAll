// src/services/transactionService.js

import api from './api';

// Send money to a recipient
export const sendMoney = async (transactionData) => {
    try {
        const response = await api.post('/account/transfer', transactionData); // Adjust the endpoint as necessary
        return response.data;
    } catch (error) {
        throw error.response.data; // Forward the error message
    }
};

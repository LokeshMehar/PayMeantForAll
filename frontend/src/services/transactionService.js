// src/services/transactionService.js

import api from './api';

// Send money to a recipient
export const sendMoney = async (transactionData) => {
    try {
        const response = await api.post('/account/transfer', transactionData);
        console.log(response);
         // Adjust the endpoint as necessary
        return response;
    } catch (error) {
        console.log("here in error");
        throw error.response.data; // Forward the error message
    }
};

const Account = require('../models/Account');
const asyncHandler = require('../utils/asyncHandler');
const mongoose = require('mongoose');

const getBalance = asyncHandler(async (req, res) => {
    const account = await Account.findOne({ userId: req.user._id });
    if (account) {
        res.json({ balance: account.balance });
    } else {
        res.status(404);
        throw new Error('Account not found');
    }
});

const transferFunds = asyncHandler(async (req, res) => {
    const { to, amount } = req.body;

    if (to === req.user._id.toString()) {
        res.status(400);
        throw new Error('Cannot transfer money to yourself');
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const fromAccount = await Account.findOne({ userId: req.user._id }).session(session);
        const toAccount = await Account.findOne({ userId: to }).session(session);

        if (!fromAccount || !toAccount) {
            throw new Error('One or both accounts not found');
        }

        if (fromAccount.balance < amount) {
            throw new Error('Insufficient balance');
        }

        fromAccount.balance -= amount;
        toAccount.balance += amount;

        await fromAccount.save();
        await toAccount.save();

        await session.commitTransaction();
        res.json({ message: 'Transfer successful' });
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }
});

module.exports = { getBalance, transferFunds };
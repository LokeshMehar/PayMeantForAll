const User = require('../models/User');
const Account = require('../models/Account');
const asyncHandler = require('../utils/asyncHandler');
const { generateToken } = require('../utils/jwtUtils');
const { json } = require('express');

const registerUser = asyncHandler(async (req, res) => {
    const { username, password, firstName, lastName } = req.body;

    const userExists = await User.findOne({ username });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        username,
        password,
        firstName,
        lastName
    });

    if (user) {
        await Account.create({ userId: user._id, balance: 1 + Math.random() * 1000 });
        res.status(201).json({
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && (await user.validatePassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid username or password');
    }
});

const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            token: generateToken(updatedUser._id)
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

const getUsers = asyncHandler(async (req, res) => {
    console.log("to the moon");
    const filter = req.query.filter || '';
    const users = await User.find({
        $or: [
            { firstName: { $regex: filter, $options: 'i' } },
            { lastName: { $regex: filter, $options: 'i' } }
        ]
    }).select('-password');
    console.log(users);

    res.json(users);
});

module.exports = { registerUser, loginUser, updateUser, getUsers };
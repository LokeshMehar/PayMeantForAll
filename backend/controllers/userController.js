const User = require('../models/User');
const Account = require('../models/Account');
const asyncHandler = require('../utils/asyncHandler');
const { generateToken } = require('../utils/jwtUtils');
const { json } = require('express');
const bcrypt = require("bcrypt")

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
    // Find the user by ID from the request
    const user = await User.findById(req.user._id);
    // console.log("here in the updater");

    // Check if the user exists
    if (user) {
        // Update user fields only if they are provided in the request body
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;

        // Update password if provided
        if (req.body.password) {
            const passwordHashed = await bcrypt.hash(req.body.password, 10);
            user.password = passwordHashed; // Hash the new password
        }

        // Save the updated user details
        const updatedUser = await user.save();

        // Respond with the updated user details
        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            token: generateToken(updatedUser._id), // Generate a new token if necessary
        });
    } else {
        // If user not found, return a 404 error
        res.status(404);
        throw new Error('User not found');
    }
});


const getUsers = asyncHandler(async (req, res) => {
    // console.log("to the moon");
    const filter = req.query.filter || '';
    const users = await User.find({
        $or: [
            { firstName: { $regex: filter, $options: 'i' } },
            { lastName: { $regex: filter, $options: 'i' } }
        ]
    }).select('-password');
    // console.log(users);

    res.json(users);
});

module.exports = { registerUser, loginUser, updateUser, getUsers };
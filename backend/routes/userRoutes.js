const express = require('express');
const { registerUser, loginUser, updateUser, getUsers } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const { body } = require('express-validator');
const { validate } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/register', [
    body('username').isLength({ min: 3, max: 30 }).trim().toLowerCase(),
    body('password').isLength({ min: 6 }),
    body('firstName').isLength({ max: 50 }).trim(),
    body('lastName').isLength({ max: 50 }).trim(),
    validate
], registerUser);

router.post('/login', loginUser);
router.put('/update', protect, updateUser);
router.get('/bulk', getUsers);

module.exports = router;
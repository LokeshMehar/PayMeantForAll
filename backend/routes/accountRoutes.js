const express = require('express');
const { getBalance, transferFunds } = require('../controllers/accountController');
const { protect } = require('../middlewares/authMiddleware');
const { body } = require('express-validator');
const { validate } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.get('/balance', protect, getBalance);
router.post('/transfer', [
    body('to').isMongoId(),
    body('amount').isNumeric().isFloat({ min: 0.01 }),
    validate
], protect, transferFunds);

module.exports = router;
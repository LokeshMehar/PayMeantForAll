const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/account', accountRoutes);

app.use(errorHandler);

module.exports = app;
// app.js - Main application setup

const express = require('express');
const cors = require('cors');
//const limiter = require('./middleware/rateLimitMiddleware');
const logger = require('./middleware/loggerMiddleware');
//const errorHandler = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(limiter);
app.use(logger);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;

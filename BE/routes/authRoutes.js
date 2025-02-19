// authRoutes.js - Handles authentication routes

const express = require('express');
const AuthService = require('../services/authService');

const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await AuthService.login(email, password);
        res.json(result);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

module.exports = router;
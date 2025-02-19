// userRoutes.js - Handles user-related routes

const express = require('express');
//const UserService = require('../services/userService');
//const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Get all users (Admin only)
router.get('/', authenticateToken, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access Forbidden' });
        }
        const users = await UserService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a user by ID
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const userId = req.params.id;
        if (req.user.role !== 'admin' && req.user.userId !== parseInt(userId)) {
            return res.status(403).json({ message: 'Access Forbidden' });
        }
        const user = await UserService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Register a new user
router.post('/', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = await UserService.createUser(name, email, password, role);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

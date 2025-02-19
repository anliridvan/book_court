// userController.js - Handles user-related operations

//const UserService = require('../services/userService');

class UserController {
    static async getAllUsers(req, res) {
        try {
            if (req.user.role !== 'admin') {
                return res.status(403).json({ message: 'Access Forbidden' });
            }
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getUserById(req, res) {
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
    }

    static async registerUser(req, res) {
        try {
            const { name, email, password, role } = req.body;
            const user = await UserService.createUser(name, email, password, role);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = UserController;

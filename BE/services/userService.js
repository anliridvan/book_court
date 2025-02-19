// userService.js - Handles business logic for user management

const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

class UserService {
    static async getAllUsers() {
        return await User.findAll();
    }

    static async getUserById(userId) {
        return await User.findById(userId);
    }

    static async createUser(name, email, password, role = 'player') {
        const passwordHash = await bcrypt.hash(password, 10);
        return await User.create(name, email, passwordHash, role);
    }
}

module.exports = UserService;

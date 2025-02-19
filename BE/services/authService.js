// authService.js - Handles authentication logic

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
require('dotenv').config();

class AuthService {
    static async login(email, password) {
        const user = await User.findByEmail(email);
        if (!user || !await bcrypt.compare(password, user.password_hash)) {
            throw new Error('Invalid credentials');
        }
        
        const token = jwt.sign(
            { userId: user.user_id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
        );
        return { token, user };
    }
}

module.exports = AuthService;
// authController.js - Handles authentication logic

const AuthService = require('../services/authService');

class AuthController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const result = await AuthService.login(email, password);
            res.json(result);
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
}

module.exports = AuthController;

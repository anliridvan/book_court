// auth.test.js - Unit tests for authentication

const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');
const { expect } = require('chai');

describe('Authentication API', () => {
    it('should return a JWT token for valid login', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: 'john@example.com', password: 'password123' });

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('token');
    });

    it('should reject login with incorrect credentials', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: 'wrong@example.com', password: 'wrongpassword' });

        expect(res.status).to.equal(401);
        expect(res.body).to.have.property('message', 'Invalid credentials');
    });
});

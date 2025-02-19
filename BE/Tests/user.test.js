// user.test.js - Unit tests for user API

const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');
const { expect } = require('chai');

let authToken;

before(async () => {
    authToken = jwt.sign({ userId: 1, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
});

describe('User API', () => {
    it('should fetch all users (Admin only)', async () => {
        const res = await request(app)
            .get('/api/users')
            .set('Authorization', `Bearer ${authToken}`);

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    it('should fetch a single user by ID', async () => {
        const res = await request(app)
            .get('/api/users/1')
            .set('Authorization', `Bearer ${authToken}`);

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('email');
    });

    it('should prevent non-admins from accessing all users', async () => {
        const userToken = jwt.sign({ userId: 2, role: 'player' }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const res = await request(app)
            .get('/api/users')
            .set('Authorization', `Bearer ${userToken}`);

        expect(res.status).to.equal(403);
        expect(res.body).to.have.property('message', 'Access Forbidden');
    });
});

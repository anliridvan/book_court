// booking.test.js - Unit tests for booking API

const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');
const { expect } = require('chai');

let playerToken, adminToken;

before(async () => {
    playerToken = jwt.sign({ userId: 3, role: 'player' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    adminToken = jwt.sign({ userId: 1, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
});

describe('Booking API', () => {
    it('should allow a player to create a booking', async () => {
        const res = await request(app)
            .post('/api/bookings')
            .set('Authorization', `Bearer ${playerToken}`)
            .send({ court_id: 2, players: 4, booking_date: '2025-02-20', booking_time: '18:00' });

        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('booking_id');
    });

    it('should fetch all bookings (Admin only)', async () => {
        const res = await request(app)
            .get('/api/bookings')
            .set('Authorization', `Bearer ${adminToken}`);

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    it('should prevent unauthorized access to bookings', async () => {
        const res = await request(app)
            .get('/api/bookings');

        expect(res.status).to.equal(401);
    });

    it('should allow an admin to delete a booking', async () => {
        const res = await request(app)
            .delete('/api/bookings/1')
            .set('Authorization', `Bearer ${adminToken}`);

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message', 'Booking deleted successfully');
    });
});

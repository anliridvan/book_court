// bookingRoutes.js - Handles booking-related routes

const express = require('express');
//const BookingService = require('../services/bookingService');
//const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Get all bookings (Admin only)
router.get('/', authenticateToken, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access Forbidden' });
        }
        const bookings = await BookingService.getAllBookings();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a booking (Players only)
router.post('/', authenticateToken, async (req, res) => {
    try {
        if (req.user.role !== 'player') {
            return res.status(403).json({ message: 'Access Forbidden' });
        }
        const { court_id, players, booking_date, booking_time } = req.body;
        const booking = await BookingService.createBooking(req.user.userId, court_id, players, booking_date, booking_time);
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a booking (Only the owner or admin can delete)
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const bookingId = req.params.id;
        const booking = await BookingService.getBookingById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        if (req.user.role !== 'admin' && booking.user_id !== req.user.userId) {
            return res.status(403).json({ message: 'Access Forbidden' });
        }
        await BookingService.deleteBooking(bookingId);
        res.json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

// bookingService.js - Handles business logic for booking operations

const Booking = require('../models/bookingModel');

class BookingService {
    static async getAllBookings() {
        return await Booking.findAll();
    }

    static async getBookingById(bookingId) {
        return await Booking.findById(bookingId);
    }

    static async createBooking(userId, courtId, players, bookingDate, bookingTime) {
        return await Booking.create(userId, courtId, players, bookingDate, bookingTime);
    }

    static async updateBooking(bookingId, courtId, players, bookingDate, bookingTime) {
        return await Booking.update(bookingId, courtId, players, bookingDate, bookingTime);
    }

    static async deleteBooking(bookingId) {
        return await Booking.delete(bookingId);
    }
}

module.exports = BookingService;
// bookingModel.js - Booking Model

const sql = require('mssql');

class Booking {
    static async findAll() {
        const result = await sql.query`SELECT * FROM Bookings ORDER BY booking_date, booking_time`;
        return result.recordset;
    }

    static async findById(bookingId) {
        const result = await sql.query`SELECT * FROM Bookings WHERE booking_id = ${bookingId}`;
        return result.recordset[0];
    }

    static async create(userId, courtId, players, bookingDate, bookingTime) {
        await sql.query`
            INSERT INTO Bookings (user_id, court_id, players, booking_date, booking_time)
            VALUES (${userId}, ${courtId}, ${players}, ${bookingDate}, ${bookingTime})
        `;
        return this.findById(userId);
    }

    static async update(bookingId, courtId, players, bookingDate, bookingTime) {
        await sql.query`
            UPDATE Bookings
            SET court_id = ${courtId}, players = ${players}, booking_date = ${bookingDate}, booking_time = ${bookingTime}
            WHERE booking_id = ${bookingId}
        `;
        return this.findById(bookingId);
    }

    static async delete(bookingId) {
        await sql.query`DELETE FROM Bookings WHERE booking_id = ${bookingId}`;
        return { message: 'Booking deleted successfully' };
    }
}

module.exports = Booking;

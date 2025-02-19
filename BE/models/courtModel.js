// courtModel.js - Court Model

const sql = require('mssql');

class Court {
    static async findAll() {
        const result = await sql.query`SELECT * FROM Courts ORDER BY name`;
        return result.recordset;
    }

    static async findById(courtId) {
        const result = await sql.query`SELECT * FROM Courts WHERE court_id = ${courtId}`;
        return result.recordset[0];
    }
}

module.exports = Court;
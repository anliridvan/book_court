
class User {
    static async findByEmail(email) {
        const result = await sql.query`SELECT * FROM Users WHERE email = ${email}`;
        return result.recordset[0];
    }

    static async findById(userId) {
        const result = await sql.query`SELECT * FROM Users WHERE user_id = ${userId}`;
        return result.recordset[0];
    }

    static async create(name, email, passwordHash, role = 'player') {
        await sql.query`
            INSERT INTO Users (name, email, password_hash, role)
            VALUES (${name}, ${email}, ${passwordHash}, ${role})
        `;
        return this.findByEmail(email);
    }
}

module.exports = User;
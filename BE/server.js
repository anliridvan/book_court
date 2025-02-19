// server.js - Entry point of the application

const http = require('http');
const sql = require('mssql');
const app = require('./app');
//const { PORT, DB } = require('./config/env');

// Database Configuration
const dbConfig = {
    user: DB.USER,
    password: DB.PASSWORD,
    server: DB.SERVER,
    database: DB.DATABASE,
    options: DB.OPTIONS
};

// Connect to database and start the server
sql.connect(dbConfig)
    .then(() => {
        console.log('Connected to MSSQL Database');
        const server = http.createServer(app);
        server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('Database connection failed:', err));

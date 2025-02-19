// env.js - Environment Configuration Loader

require('dotenv').config();

const getEnv = (key, defaultValue) => {
    return process.env[key] !== undefined ? process.env[key] : defaultValue;
};

module.exports = {
    PORT: getEnv('PORT', 3000),
    DB: {
        USER: getEnv('DB_USER', 'your_db_user'),
        PASSWORD: getEnv('DB_PASSWORD', 'your_db_password'),
        SERVER: getEnv('DB_SERVER', 'your_db_server'),
        DATABASE: getEnv('DB_NAME', 'padel_hall_booking'),
        OPTIONS: {
            encrypt: getEnv('DB_ENCRYPT', 'true') === 'true',
            trustServerCertificate: getEnv('DB_TRUST_SERVER_CERTIFICATE', 'true') === 'true'
        }
    },
    JWT: {
        SECRET: getEnv('JWT_SECRET', 'your_secret_key'),
        EXPIRES_IN: getEnv('JWT_EXPIRES_IN', '1h')
    },
    LOGGING: {
        LEVEL: getEnv('LOG_LEVEL', 'info'),
        ENABLED: getEnv('LOG_ENABLED', 'true') === 'true'
    },
    SECURITY: {
        RATE_LIMIT_WINDOW: parseInt(getEnv('RATE_LIMIT_WINDOW', '900000')), // 15 minutes
        RATE_LIMIT_MAX: parseInt(getEnv('RATE_LIMIT_MAX', '100')) // Max requests per window per IP
    }
};

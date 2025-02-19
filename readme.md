# Padel Hall Booking System

## Overview
The **Padel Hall Booking System** is a **full-stack application** that allows users to book courts for playing padel. The system includes an **administration panel** for employees to manage bookings. It features **JWT authentication**, **role-based access control**, and a structured API for seamless integration.

---

## Features
- **User Authentication:** Secure JWT-based login
- **Booking System:** Reserve courts with date and time selection
- **Role-Based Access:** Admins can manage all bookings, players manage their own
- **Filtering Options:** Search bookings by date, court, and number of players
- **API Documentation:** Fully documented RESTful API
- **Unit Testing:** Ensures reliability with Mocha, Chai, and Supertest

---

## Tech Stack
### **Backend**
- Node.js with Express.js
- MS SQL Database
- JWT Authentication
- RESTful API
- Unit Testing (Mocha, Chai, Supertest)

### **Frontend (To be developed)**
- Angular
- SCSS for styling
- TypeScript

---

## Installation & Setup
### **1. Clone the Repository**
```sh
git clone https://github.com/your-repo/padel-hall-booking.git
cd padel-hall-booking
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file and set the following:
```ini
PORT=3000
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_SERVER=your_db_server
DB_NAME=padel_hall_booking
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1h
```

### **4. Run the Application**
```sh
npm start
```
Or for development with automatic restarts:
```sh
npm run dev
```

---

## API Endpoints
### **Authentication**
- `POST /api/auth/login` → Authenticate and return JWT token

### **Users**
- `GET /api/users` → Fetch all users (Admin only)
- `GET /api/users/:id` → Fetch a specific user
- `POST /api/users` → Register a new user

### **Bookings**
- `GET /api/bookings` → Fetch all bookings (Admin only)
- `POST /api/bookings` → Create a booking (Players only)
- `DELETE /api/bookings/:id` → Delete a booking (Admin or owner only)

For full API documentation, see [API Docs](./api-documentation.md)

---

## Testing
Run unit tests:
```sh
npm test
```

---

## Project Structure
```
📂 padel-hall-booking-api
├── src/
│   ├── config/             # Environment and database configuration
│   ├── controllers/        # Route controllers for handling logic
│   ├── middleware/         # Authentication & error handling
│   ├── models/             # Database models
│   ├── routes/             # API route definitions
│   ├── services/           # Business logic layer
│   ├── tests/              # Unit tests
│   ├── app.js              # Main application setup
│   ├── server.js           # Entry point
├── .env                    # Environment variables
├── package.json            # Project dependencies & scripts
├── README.md               # Documentation
```

---

## Deployment
To deploy the application:
1. Set up a production database
2. Configure environment variables
3. Run the application using a process manager like **PM2**:
   ```sh
   pm2 start server.js --name padel-hall-booking
   ```

---

## Contributors
- **IV.anLee & Mehmet Kaya** - Developer

For any issues, feel free to open a [GitHub Issue](https://github.com/your-repo/issues).

---

🚀 **Now your project is fully documented and ready to go!** Let me know if you need adjustments or enhancements! 🎯


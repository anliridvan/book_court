# Padel Hall Booking API Documentation

## Base URL
`http://localhost:3000/api`

---

## Authentication

### **Login**
- **Endpoint:** `POST /auth/login`
- **Description:** Authenticate a user and return a JWT token.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your_jwt_token_here"
  }
  ```
- **Error Responses:**
  - `401 Unauthorized`: Invalid credentials

---

## Users

### **Fetch All Users (Admin Only)**
- **Endpoint:** `GET /users`
- **Headers:**
  ```
  Authorization: Bearer your_jwt_token_here
  ```
- **Response:**
  ```json
  [
    {
      "user_id": 1,
      "name": "Admin User",
      "email": "admin@example.com",
      "role": "admin"
    }
  ]
  ```
- **Error Responses:**
  - `403 Forbidden`: Access denied for non-admin users

### **Fetch a Single User**
- **Endpoint:** `GET /users/:id`
- **Headers:**
  ```
  Authorization: Bearer your_jwt_token_here
  ```
- **Response:**
  ```json
  {
    "user_id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "player"
  }
  ```

### **Register a User**
- **Endpoint:** `POST /users`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "player"
  }
  ```
- **Response:**
  ```json
  {
    "user_id": 2,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "player"
  }
  ```

---

## Bookings

### **Fetch All Bookings (Admin Only)**
- **Endpoint:** `GET /bookings`
- **Headers:**
  ```
  Authorization: Bearer your_jwt_token_here
  ```
- **Response:**
  ```json
  [
    {
      "booking_id": 1,
      "user_id": 2,
      "court_id": 3,
      "players": 4,
      "booking_date": "2025-02-20",
      "booking_time": "18:00"
    }
  ]
  ```

### **Create a Booking (Players Only)**
- **Endpoint:** `POST /bookings`
- **Headers:**
  ```
  Authorization: Bearer your_jwt_token_here
  ```
- **Request Body:**
  ```json
  {
    "court_id": 2,
    "players": 2,
    "booking_date": "2025-02-20",
    "booking_time": "16:00"
  }
  ```
- **Response:**
  ```json
  {
    "booking_id": 10,
    "user_id": 2,
    "court_id": 2,
    "players": 2,
    "booking_date": "2025-02-20",
    "booking_time": "16:00"
  }
  ```

### **Delete a Booking**
- **Endpoint:** `DELETE /bookings/:id`
- **Headers:**
  ```
  Authorization: Bearer your_jwt_token_here
  ```
- **Response:**
  ```json
  {
    "message": "Booking deleted successfully"
  }
  ```
- **Error Responses:**
  - `403 Forbidden`: User is not the owner of the booking or not an admin
  - `404 Not Found`: Booking does not exist

---

## Error Handling

| Status Code | Meaning |
|-------------|---------|
| `400` | Bad Request - Validation errors |
| `401` | Unauthorized - Missing or invalid JWT token |
| `403` | Forbidden - User does not have access to this resource |
| `404` | Not Found - Requested resource does not exist |
| `500` | Internal Server Error - Unexpected server failure |

---

## Notes
- This API uses **JWT-based authentication**. Include the `Authorization` header with `Bearer <token>` for protected routes.
- Admin users have full access to manage users and bookings.
- Players can only manage their own bookings.

---

🔥 **API documentation is ready for use!** 🚀


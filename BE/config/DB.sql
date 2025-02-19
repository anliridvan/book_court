-- Database: Padel Hall Booking System

-- 1. Users Table
CREATE TABLE Users (
    user_id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) NOT NULL,
    email NVARCHAR(255) UNIQUE NOT NULL,
    password_hash NVARCHAR(255) NOT NULL,
    role NVARCHAR(50) CHECK (role IN ('player', 'admin')) NOT NULL,
    created_at DATETIME DEFAULT GETDATE()
);

-- 2. Courts Table
CREATE TABLE Courts (
    court_id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(50) NOT NULL,
    type NVARCHAR(20) CHECK (type IN ('2-player', '4-player')) NOT NULL,
    created_at DATETIME DEFAULT GETDATE()
);

-- 3. Bookings Table
CREATE TABLE Bookings (
    booking_id INT PRIMARY KEY IDENTITY(1,1),
    user_id INT NOT NULL,
    court_id INT NOT NULL,
    players INT CHECK (players IN (2, 4)) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (court_id) REFERENCES Courts(court_id) ON DELETE CASCADE
);

-- 4. Indexing for Performance
CREATE INDEX idx_booking_date_time ON Bookings (booking_date, booking_time);
CREATE INDEX idx_user_email ON Users (email);

-- 5. Insert Sample Data

-- Insert Users
INSERT INTO Users (name, email, password_hash, role) VALUES
('Admin User', 'admin@example.com', 'hashedpassword123', 'admin'),
('John Doe', 'john@example.com', 'hashedpassword456', 'player'),
('Jane Smith', 'jane@example.com', 'hashedpassword789', 'player'),
('Alice Brown', 'alice@example.com', 'hashedpassword321', 'player'),
('Bob White', 'bob@example.com', 'hashedpassword654', 'player');

-- Insert Courts
INSERT INTO Courts (name, type) VALUES
('Court 1', '2-player'),
('Court 2', '4-player'),
('Court 3', '2-player'),
('Court 4', '4-player'),
('Court 5', '2-player'),
('Court 6', '4-player'),
('Court 7', '2-player'),
('Court 8', '4-player'),
('Court 9', '2-player'),
('Court 10', '4-player');

-- Insert Extensive Booking Data (Covering 5 Months Past & Future)
DECLARE @Counter INT = 1;
DECLARE @StartDate DATE = DATEADD(MONTH, -5, GETDATE());
DECLARE @EndDate DATE = DATEADD(MONTH, 5, GETDATE());

WHILE @Counter <= 1000  -- Generate 1000 bookings
BEGIN
    INSERT INTO Bookings (user_id, court_id, players, booking_date, booking_time)
    VALUES (
        (SELECT TOP 1 user_id FROM Users ORDER BY NEWID()),
        (SELECT TOP 1 court_id FROM Courts ORDER BY NEWID()),
        CASE WHEN RAND() > 0.5 THEN 2 ELSE 4 END,
        DATEADD(DAY, ABS(CHECKSUM(NEWID())) % DATEDIFF(DAY, @StartDate, @EndDate), @StartDate),
        CAST(DATEADD(MINUTE, (ABS(CHECKSUM(NEWID())) % 24) * 60, '08:00') AS TIME)
    );
    SET @Counter = @Counter + 1;
END;

-- Verify Data with Select Statements
SELECT * FROM Users;
SELECT * FROM Courts;
SELECT * FROM Bookings ORDER BY booking_date, booking_time;




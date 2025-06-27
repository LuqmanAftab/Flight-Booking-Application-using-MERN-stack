# ✈️ Flight Booking App - MERN Stack

A full-stack flight booking application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to search for flights, make bookings, and provides admin functionality for flight management.

---

## 🌟 Features

### 👤 User Features
- ✅ User registration and authentication
- ✅ Search flights by departure and destination
- ✅ View flight details and availability
- ✅ Book flights with passenger information
- ✅ View booking history
- ✅ Cancel bookings

### 👨‍💼 Admin Features
- ✅ Admin dashboard with analytics
- ✅ Add new flights to the system
- ✅ Update existing flight details
- ✅ View all users and their bookings
- ✅ Manage flight schedules and pricing
- ✅ Delete or suspend flights

### 🔐 Authentication & Authorization
- ✅ authentication
- ✅ Role-based access control (User/Admin)
- ✅ Protected routes and API endpoints
- ✅ Secure password hashing

---

## ⚙️ Tech Stack

### Frontend
- **React** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Bootstrap/Tailwind CSS** - Styling framework

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

---

## 📁 Project Structure

```
Flight-Booking-App-MERN/
├── client/                    # Frontend React app
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/          # Login and Register forms
│   │   │   │   ├── Login.js
│   │   │   │   └── Register.js
│   │   │   ├── Flights/       # Flight search and listing
│   │   │   │   ├── FlightSearch.js
│   │   │   │   ├── FlightList.js
│   │   │   │   └── FlightCard.js
│   │   │   ├── Booking/       # Booking form and history
│   │   │   │   ├── BookingForm.js
│   │   │   │   ├── BookingHistory.js
│   │   │   │   └── BookingCard.js
│   │   │   └── Admin/         # Admin dashboard components
│   │   │       ├── AdminDashboard.js
│   │   │       ├── AddFlight.js
│   │   │       ├── ManageFlights.js
│   │   │       └── UserManagement.js
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── server/                    # Backend Express API
│   ├── routes/
│   │   ├── auth.js           # Authentication routes
│   │   ├── flights.js        # Flight management routes
│   │   ├── bookings.js       # Booking routes
│   │   └── admin.js          # Admin routes
│   ├── models/
│   │   ├── User.js           # User schema
│   │   ├── Flight.js         # Flight schema
│   │   └── Booking.js        # Booking schema
│   ├── middleware/
│   │   ├── auth.js           # JWT authentication middleware
│   │   └── admin.js          # Admin authorization middleware
│   ├── index.js              # Main server entry point
│   ├── schemas.js            # Mongoose schemas (deprecated - use models/)
│   ├── .env
│   └── package.json
│
└── README.md                 # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Flight-Booking-App-MERN.git
   cd Flight-Booking-App-MERN
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   
   Create `.env` file in the `server` directory:
   ```env
   PORT=6001
   MONGO_URL=mongodb://localhost:27017/FlightBookingMERN
   ```

5. **Start the application**
   
   Start the backend server:
   ```bash
   cd server
   npm start
   ```
   
   Start the frontend (in a new terminal):
   ```bash
   cd client
   npm start
   ```

6. **Access the application**
   - http://localhost:3000

---

## 🔧 Available Scripts

### Client
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests

### Server
- `npm start` - Start server
- `npm run dev` - Start server with nodemon
- `npm test` - Run tests

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

Your Name - luqmanaftabg6@gmail.com

Project Link: https://github.com/LuqmanAftab/Flight-Booking-Application-using-MERN-stack

---

## 🙏 Acknowledgments

- Inspired by modern flight booking platforms
- Built with love using the MERN stack ❤️

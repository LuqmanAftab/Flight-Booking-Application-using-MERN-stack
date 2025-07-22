const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);


// Middleware
app.use(cors());
app.use(express.json());

// Routes
const flightRoutes = require('./routes/flightRoutes');
app.use('/api/flights', flightRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error('MongoDB connection error:', err));

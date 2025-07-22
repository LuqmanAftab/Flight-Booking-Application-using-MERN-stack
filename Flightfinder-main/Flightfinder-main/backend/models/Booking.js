// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  flightId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight',
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    default: 1,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Booking', bookingSchema);

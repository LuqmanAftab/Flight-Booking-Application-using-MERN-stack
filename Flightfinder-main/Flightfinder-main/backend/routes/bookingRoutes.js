// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/bookings
router.post('/', async (req, res) => {
  try {
    const { userName, email, flightId, seats } = req.body;

    const booking = new Booking({
      userName,
      email,
      flightId,
      seats,
    });

    const saved = await booking.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: 'Booking failed', message: error.message });
  }
});

// GET /api/bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('flightId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

module.exports = router;

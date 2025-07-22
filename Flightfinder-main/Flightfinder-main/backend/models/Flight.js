const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: String,
  from: String,
  to: String,
  date: String,
  price: Number,
  duration: String,
  class: String,
  direct: Boolean
});

module.exports = mongoose.model('Flight', flightSchema);

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { flight } = location.state || {};

  const handleConfirmBooking = () => {
    // You can store booking in state or localStorage for now
    navigate('/confirmation');
  };

  if (!flight) {
    return (
      <div className="container mt-5 text-center">
        <h3>No flight selected.</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Confirm Your Booking</h2>
      <div className="card p-3 mb-4">
        <h5>{flight.airline}</h5>
        <p>{flight.from} ➡ {flight.to}</p>
        <p>Date: {flight.date}</p>
        <p>Class: {flight.class}</p>
        <p>Duration: {flight.duration}</p>
        <p>Price: ${flight.price}</p>
      </div>

      <h5>Select Seat (Simulated):</h5>
      <select className="form-select mb-3">
        <option>1A (Window)</option>
        <option>1B (Aisle)</option>
        <option>2A (Window)</option>
        <option>2B (Aisle)</option>
      </select>

      <h5>Passenger Info (Simulated):</h5>
      <input type="text" className="form-control mb-3" placeholder="Full Name" />
      <input type="email" className="form-control mb-3" placeholder="Email" />
      <input type="tel" className="form-control mb-3" placeholder="Phone Number" />

      <button className="btn btn-primary" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;

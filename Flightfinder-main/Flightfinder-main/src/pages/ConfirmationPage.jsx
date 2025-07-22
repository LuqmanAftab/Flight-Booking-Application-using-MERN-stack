import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4 text-success">🎉 Booking Confirmed!</h2>
      <p>Your flight has been successfully booked. An e-ticket has been sent to your email.</p>
      <p>Thank you for choosing FlightFinder!</p>
      <Link to="/" className="btn btn-primary mt-4">Go to Home</Link>
    </div>
  );
};

export default ConfirmationPage;

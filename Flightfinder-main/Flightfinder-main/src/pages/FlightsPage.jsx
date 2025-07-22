import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlightsPage = () => {
  const navigate = useNavigate();
  <img
  src="https://cdn-icons-png.flaticon.com/512/188/188318.png"
  alt="Airplane"
  className="airplane"
/>


  const [flights] = useState([
    {
      id: 1,
      airline: 'Air France',
      from: 'New York City',
      to: 'Paris',
      date: '2025-07-10',
      price: 1200,
      duration: '7h 30m',
      class: 'Business',
      direct: true,
    },
    {
      id: 2,
      airline: 'Delta Airlines',
      from: 'New York City',
      to: 'Paris',
      date: '2025-07-10',
      price: 1100,
      duration: '8h',
      class: 'Economy',
      direct: true,
    },
    {
      id: 3,
      airline: 'Emirates',
      from: 'New York City',
      to: 'Paris',
      date: '2025-07-11',
      price: 980,
      duration: '9h',
      class: 'Business',
      direct: false,
    },
    {
      id: 4,
      airline: 'British Airways',
      from: 'New York City',
      to: 'Paris',
      date: '2025-07-12',
      price: 1050,
      duration: '8h 15m',
      class: 'Economy',
      direct: true,
    },
    {
      id: 5,
      airline: 'Lufthansa',
      from: 'New York City',
      to: 'Paris',
      date: '2025-07-13',
      price: 990,
      duration: '8h 45m',
      class: 'Premium Economy',
      direct: false,
    },
    {
      id: 6,
      airline: 'Qatar Airways',
      from: 'New York City',
      to: 'Paris',
      date: '2025-07-14',
      price: 1300,
      duration: '7h 50m',
      class: 'First Class',
      direct: true,
    },
  ]);

  const handleBook = (flight) => {
    navigate('/book', { state: { flight } });
  };

 return (
  <div className="fullscreen-bg p-4">
    {/* Clouds only once at the top of the page */}
    <div className="sky">
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>
    </div>

    <div className="container">
      <h2 className="mb-4 text-center">Available Flights from NYC to Paris</h2>
      <div className="row">
        {flights.map((flight) => (
          <div key={flight.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">{flight.airline}</h5>
                <p className="card-text">{flight.from} ➡ {flight.to}</p>
                <p><strong>Date:</strong> {flight.date}</p>
                <p><strong>Class:</strong> {flight.class}</p>
                <p><strong>Duration:</strong> {flight.duration}</p>
                <p><strong>Price:</strong> ${flight.price}</p>
                <button
                  className="btn btn-success w-100 mt-2"
                  onClick={() => handleBook(flight)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default FlightsPage;

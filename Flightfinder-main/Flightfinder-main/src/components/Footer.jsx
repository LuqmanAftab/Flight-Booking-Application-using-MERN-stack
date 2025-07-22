import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; {new Date().getFullYear()} FlightFinder. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

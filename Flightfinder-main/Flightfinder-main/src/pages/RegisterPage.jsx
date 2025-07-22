import React from 'react';

const RegisterPage = () => {
  return (
    <div className="container-fluid mt-5 px-4">
      <h2 className="mb-4">Register</h2>
      <form>
        <input type="text" className="form-control mb-3" placeholder="Full Name" required />
        <input type="email" className="form-control mb-3" placeholder="Email" required />
        <input type="password" className="form-control mb-3" placeholder="Password" required />
        <button type="submit" className="btn btn-success">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;

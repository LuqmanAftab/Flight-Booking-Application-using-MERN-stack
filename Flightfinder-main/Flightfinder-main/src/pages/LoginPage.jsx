import React from 'react';

const LoginPage = () => {
  return (
    <div className="container-fluid mt-5 px-4">
      <h2 className="mb-4">Login</h2>
      <form>
        <input type="email" className="form-control mb-3" placeholder="Email" required />
        <input type="password" className="form-control mb-3" placeholder="Password" required />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

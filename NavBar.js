// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#111', color: '#fff' }}>
      <Link to="/" style={{ margin: '0 10px', color: 'white' }}>FakeCoin</Link>
      <Link to="/login" style={{ margin: '0 10px', color: 'white' }}>Login</Link>
      <Link to="/register" style={{ margin: '0 10px', color: 'white' }}>Register</Link>
      <Link to="/dashboard" style={{ margin: '0 10px', color: 'white' }}>Dashboard</Link>
    </nav>
  );
}

export default Navbar;

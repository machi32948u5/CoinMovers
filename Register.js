// client/src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const user = { email, password, balance: 10000, btc: 0 };
    localStorage.setItem('fakeUser', JSON.stringify(user));
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleRegister} style={{ padding: '20px' }}>
      <h2>Register</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" /><br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Register;

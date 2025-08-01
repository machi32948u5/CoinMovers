// client/src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [btcPrice, setBtcPrice] = useState(30000); // fake BTC price
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('fakeUser'));
    setUser(stored);
  }, []);

  const buyBTC = () => {
    if (!user || user.balance < amount * btcPrice) return alert('Not enough funds');
    const updated = {
      ...user,
      balance: user.balance - amount * btcPrice,
      btc: user.btc + Number(amount),
    };
    setUser(updated);
    localStorage.setItem('fakeUser', JSON.stringify(updated));
  };

  const sellBTC = () => {
    if (!user || user.btc < amount) return alert('Not enough BTC');
    const updated = {
      ...user,
      balance: user.balance + amount * btcPrice,
      btc: user.btc - Number(amount),
    };
    setUser(updated);
    localStorage.setItem('fakeUser', JSON.stringify(updated));
  };

  if (!user) return <p style={{ padding: '20px' }}>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      <p>Welcome: {user.email}</p>
      <p>USD Balance: ${user.balance.toFixed(2)}</p>
      <p>BTC Holdings: {user.btc.toFixed(4)} BTC</p>
      <p>Fake BTC Price: ${btcPrice}</p>

      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Amount of BTC"
      />
      <button onClick={buyBTC}>Buy BTC</button>
      <button onClick={sellBTC}>Sell BTC</button>
    </div>
  );
}

export default Dashboard;

import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]); // Placeholder for user search results
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Connect to backend API for user search
    setUsers([{ username: 'alice' }, { username: 'bob' }]); // Example
  };

  const handleTransfer = (e) => {
    e.preventDefault();
    // TODO: Connect to backend API for money transfer
    setMessage(`Transferred $${amount} to ${recipient}`);
    setAmount('');
    setRecipient('');
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search users"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul className="user-list">
        {users.map((user, idx) => (
          <li key={idx} onClick={() => setRecipient(user.username)}>
            {user.username}
          </li>
        ))}
      </ul>
      <form onSubmit={handleTransfer} className="transfer-form">
        <input
          type="text"
          placeholder="Recipient"
          value={recipient}
          onChange={e => setRecipient(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <button type="submit">Transfer</button>
      </form>
      {message && <div className="success">{message}</div>}
    </div>
  );
}

export default Dashboard;

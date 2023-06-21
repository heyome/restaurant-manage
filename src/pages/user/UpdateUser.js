import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './UpdateUser.css'; 

function UpdateUser() {
  const [username, setUsername] = useState('');
  const { userId } = useParams();  // Extract userId from URL parameters

  useEffect(() => {
    // Fetch user details
    fetch(`/user/${userId}`)
      .then(response => response.json())
      .then(data => setUsername(data.username));
  }, [userId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Send a PUT request to update user details
    fetch(`http://localhost:3001/api/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        // Redirect to user list or show some confirmation message
      });
  }

  return (
    <div className="update-user">
      <h1 className="update-user-title">Update User</h1>
      <Link to="/users" className="back-link">Back to User List</Link>
      <form onSubmit={handleUpdate} className="update-user-form">
        <label className="update-user-label">
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="update-user-input" />
        </label>
        <button type="submit" className="update-user-btn">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;

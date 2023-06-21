import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './UserList.css'; 

function UserList() {
  const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(() => {
      fetch('http://localhost:3001/api/users')
        .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => setUsers(data))
    .catch(error => console.log('Error:', error));
  }, []);  // The empty array means that fetchUsers will only be created once, on component mount

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);  // fetchUsers is now in the dependency array, but it won't cause an infinite loop because it's wrapped with useCallback

  const deleteUser = (id) => {
    fetch(`http://localhost:3001/api/users/${id}`, { method: 'DELETE' })
      .then(res => res.text())
      .then(res => {
        console.log(res);
        fetchUsers();
      });
  }

  return (
    <div className="user-list">
      <h1 className="user-list-title">User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>
                <button onClick={() => deleteUser(user.id)} className="user-delete-btn">Delete</button>
                <Link to={`/update/${user.id}`} className="user-update-link">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

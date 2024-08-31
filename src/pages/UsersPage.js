import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import Header from '../components/Header';
import ErrorNotification from '../components/ErrorNotification';
import { getUsers, addUser, editUser, deleteUser } from '../services/userService';
import '../styles/UsersPage.css';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (user) => {
    try {
      if (user.id) {
        await editUser(user.id, user);
      } else {
        await addUser(user);
      }
      setSelectedUser(null);
      loadUsers();
    } catch (error) {
      setError('Failed to save user');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      loadUsers();
    } catch (error) {
      setError('Failed to delete user');
    }
  };

  return (
    <div className="users-page">
      <Header />
      {error && <ErrorNotification message={error} onClose={() => setError(null)} />}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          <UserList users={users} onEdit={setSelectedUser} onDelete={handleDelete} />
          <UserForm selectedUser={selectedUser} onSave={handleSave} onCancel={() => setSelectedUser(null)} />
        </>
      )}
    </div>
  );
};

export default UsersPage;

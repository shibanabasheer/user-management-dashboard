import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import Header from '../components/Header';
import ErrorNotification from '../components/ErrorNotification';
import { getUsers, addUser, editUser, deleteUser } from '../services/userService';
import Pagination from '../components/Pagination';
import '../styles/UsersPage.css';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      setError('Failed to load users');
    }
  };

  const handleAdd = () => {
    setSelectedUser(null);
    setShowForm(true); // Show form when adding a new user
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowForm(true); // Show form when editing a user
  };

  const handleSave = async (user) => {
    try {
      if (user.id) {
        await editUser(user.id, user);
      } else {
        await addUser(user);
      }
      setShowForm(false); // Hide form after saving
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

  const handleCancel = () => {
    setShowForm(false); // Hide form when canceled
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="users-page">
      <Header />
      {error && <ErrorNotification message={error} onClose={() => setError(null)} />}
      <UserList users={currentUsers} onEdit={handleEdit} onDelete={handleDelete} />
      <div className="add-user-button-container">
        <button className="add-user-button" onClick={handleAdd}>Add User</button>
      </div>
      {showForm && (
        <UserForm 
          selectedUser={selectedUser} 
          onSave={handleSave} 
          onCancel={handleCancel} 
        />
      )}
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default UsersPage;


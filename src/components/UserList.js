import React from 'react';
import UserCard from './UserCard';
import '../styles/UserList.css';

// UserList component to display a list of user cards
const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      {users.length > 0 ? (
        users.map(user => (
          <UserCard 
            key={user.id} 
            user={user} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;





import React from 'react';
import PropTypes from 'prop-types';
import '../styles/UserCard.css';

// UserCard component displays user details and provides edit/delete functionality
const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Department:</strong> {user.department}</p>
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

// PropTypes ensure that the required user data is passed to the component
UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserCard;




